import { useQuery } from '@tanstack/react-query'
import { useProductApi } from '../context/ProductApiContext'
import { useMemo, useState } from 'react'
import Categories from './Categories'
import Tags from './Tags'

export default function ProductList() {
  const {productApi} = useProductApi()
  const [category, setCategory] = useState(null)
  const [tag, setTag] = useState(new Set())
  const [search, setSearch] = useState("")

  // This code was assisted by AI.
  const queryFilter = useMemo(() => {
    return {
      category: category?.id || null, 
      tag: [...tag], 
    }
  }, [category, tag, search])

  // These requests run in parallel 
  const productQuery = useQuery({queryKey: ["products", queryFilter], queryFn: () => productApi.products(queryFilter)} )
  const categoryQuery = useQuery({queryKey: ["categories"], queryFn: () => productApi.categories()} )
  const tagQuery = useQuery({queryKey: ["tags"], queryFn: () => productApi.tags()} )


  const isLoading = productQuery.isLoading || categoryQuery.isLoading || tagQuery.isLoading
  if (isLoading) return <div>loading...</div>

  const isError = productQuery.isError || categoryQuery.isError || tagQuery.isError 
  if (isError) return <div>Something is wrong...</div>

  const handleCategoryClick = (categoryInput) => {
    // Update category
    setCategory(categoryInput)
  }

  const handleTagClick = (tagInput) => {
    // If tag is already in tag Set, delete tag
    // Otherwise, add to a Set
    const newTag = new Set(tag)
    newTag.has(tagInput.id) ? newTag.delete(tagInput.id): newTag.add(tagInput.id)
    setTag(newTag)
  }

  const handleInputChange = (input) => {

  }

  return (
    <div>
    <Categories 
      categories={categoryQuery.data} 
      selectedCategory={category}
      onCategoryClick={handleCategoryClick}
    />
    <Tags
      tags={tagQuery.data}
      selectedTags={tag}
      onTagClick={handleTagClick}/>
    {productQuery.data.map(product => (
      <div>
        <p >{product.title}</p>
      </div>
  ))}    
  </div>
  )
}

