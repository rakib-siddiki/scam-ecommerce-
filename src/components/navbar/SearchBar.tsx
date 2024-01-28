import React from 'react'
import { Icons } from '../../Core'

const SearchBar: React.FC = () => {
  return (
    <div className="relative">
      <div>
        <input
          type="search"
          placeholder="Search"
          className="h-10 pl-4 pr-12 text-gray-500 transition duration-150 ease-in-out border border-gray-400  w-80 placeholder:text-gray-500 focus:outline-none focus:border-primary-500 focus:bg-white"
        />
        <div className="absolute top-0 right-0 flex items-center justify-center w-12 h-10 text-white cursor-pointer bg-accent-500">
          <Icons.Search />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
