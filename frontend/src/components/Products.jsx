export default function Products({ data, isFetching }) {
  if (isFetching && !data) {
    return <div className="text-center text-gray-500">Loading products...</div>
  }

  if (data && data.length === 0) {
    return <div className="text-center text-gray-500">No products found.</div>
  }

  return (
    <>
      {data &&
        data.map((product) => (
          <div key={product.id} className="bg-white border-b border-gray-200 p-2">
            <p className="font-medium text-gray-900">{product.title}</p>
            <p className="text-sm text-gray-600 mt-1">
              {product.description}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Category: {product.category?.title}
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              {product.tag.map((tag) => (
                <span
                  key={tag.id}
                  className="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700"
                >
                  {tag.title}
                </span>
              ))}
            </div>
          </div>
        ))}
    </>
  )
}