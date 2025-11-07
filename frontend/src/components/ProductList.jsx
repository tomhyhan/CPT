import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { useProductApi } from '../context/ProductApiContext'
import { useMemo, useState } from 'react'
import Categories from './Categories'
import Tags from './Tags'
import ProductInput from './ProductInput'
import { useDebounce } from 'use-debounce'
import Products from './Products'

export default function ProductList() {
  const {productApi} = useProductApi()
  const [category, setCategory] = useState(null)
  const [tag, setTag] = useState(new Set())
  const [search, setSearch] = useState("")
  const [value] = useDebounce(search, 300);

  // This code was assisted by AI.
  const queryFilter = useMemo(() => {
    return {
      category: category?.id || null, 
      tag: [...tag], 
      search: value,
    }
  }, [category, tag, value])

  // initially fetch Category, Product and Tag
  // These requests run in parallel 
  // Product Query refetches items when queryFilter changes
  const productQuery = useQuery({queryKey: ["products", queryFilter], queryFn: () => productApi.products(queryFilter), placeholderData: keepPreviousData } )
  const categoryQuery = useQuery({queryKey: ["categories"], queryFn: () => productApi.categories(), staleTime: 1000 * 60 * 5} )
  const tagQuery = useQuery({queryKey: ["tags"], queryFn: () => productApi.tags(), staleTime: 1000 * 60 * 5} )


  const isLoading = categoryQuery.isLoading || tagQuery.isLoading
  if (isLoading) return <div>loading...</div>

  const isError = productQuery.isError || categoryQuery.isError || tagQuery.isError 
  if (isError) return <div>Something is wrong...</div>

  const handleCategoryClick = (categoryInput) => {
    // Filter products on category change
    setCategory(categoryInput)
  }

  const handleTagClick = (tagInput) => {
    // Filter products on tag change
    // If tag is already in tag Set, delete tag
    // Otherwise, add to a Set
    const newTag = new Set(tag)
    newTag.has(tagInput.id) ? newTag.delete(tagInput.id): newTag.add(tagInput.id)
    setTag(newTag)
  }

  const handleInputChange = (input) => {
    // Filter products on input change
    setSearch(input)
  }

return (
    <div>
      <div className="grid grid-cols-10">
        
        <div className="col-span-3">
          <Categories
            categories={categoryQuery.data}
            selectedCategory={category}
            onCategoryClick={handleCategoryClick}
          />
        </div>

        <div className="col-span-7">
          <ProductInput
            search={search}
            onInputChange={handleInputChange}
          />
        </div>

        <div className="col-span-3">
          <Tags
            tags={tagQuery.data}
            selectedTags={tag}
            onTagClick={handleTagClick}
          />
        </div>

        <div className="col-span-7">
          <Products
            data={productQuery.data}
            isFetching={productQuery.isFetching}
          />

        </div>
      </div>
    </div>
  )
}