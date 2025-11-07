import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

export default function Categories({
  categories,
  selectedCategory, 
  onCategoryClick,  
}) {
  
  const buttonText = selectedCategory ? selectedCategory.title : 'Categories'

return (
    <div className="w-full pt-4">
      <Menu as="div" className="relative w-full text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-between items-center rounded-md bg-white py-2.5 pl-10 pr-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            <span>{buttonText}</span>
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </MenuButton>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute left-0 right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                <button
                  onClick={() => onCategoryClick(null)}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 cursor-pointer"
                >
                  Show All
                </button>
              </MenuItem>
              {categories.map((category) => (
                <MenuItem key={category.id}>
                  <button
                    onClick={() => onCategoryClick(category)}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 cursor-pointer"
                  >
                    {category.title}
                  </button>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}