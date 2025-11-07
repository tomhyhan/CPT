import { Field, Input } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function ProductInput({ 
  search,      
  onInputChange    
}) {
  return (
    <div className="w-full px-2 pt-4">
      <Field>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <Input
            id="product-search"
            type="search"
            value={search}
            onChange={(e) => onInputChange(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search by description..."
          />
        </div>
      </Field>
    </div>
  )
}