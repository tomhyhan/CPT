import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronUpIcon} from '@heroicons/react/20/solid'

export default function Tags({
  tags,           
  selectedTags,   
  onTagClick,     
}) {
  const currentSelection = tags.filter(tag => selectedTags.has(tag.id));
  const unselectedTags = tags.filter(tag => !selectedTags.has(tag.id));

  return (
    <div className="w-full px-4 pt-4">
      <Disclosure as="div" className="mt-2 group" defaultOpen={true}>
        <DisclosureButton className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
          <span>Tags ({selectedTags.size})</span>
          <ChevronUpIcon
            className="h-5 w-5 text-gray-500 transition-transform duration-150 group-data-open:rotate-180"
          />
        </DisclosureButton>
        
        <DisclosurePanel
          transition
          className="origin-top transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0 data-open:scale-100 data-open:opacity-100 px-4 pt-4 pb-2 text-sm text-gray-500 bg-white rounded-b-lg shadow-sm"
        >
          <div className="flex flex-col gap-4">

            {currentSelection.length > 0 && (
              <div className="flex flex-col gap-2">
                {currentSelection.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => onTagClick(tag)}
                    className="flex w-full items-center justify-between rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  cursor-pointer"
                  >
                    <span>{tag.title}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-2">
              {unselectedTags.length > 0 ? (
                unselectedTags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => onTagClick(tag)}
                    className="w-full rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-left text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 cursor-pointer"
                  >
                    {tag.title}
                  </button>
                ))
              ) : (
                <p className="text-gray-400 text-center">
                  {currentSelection.length > 0 ? 'All other tags selected' : 'No tags available'}
                </p>
              )}
            </div>
            
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}