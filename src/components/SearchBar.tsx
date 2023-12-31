import React from 'react';
import { Icons } from '../Core';

const SearchBar:React.FC = () => {
    return (
        <div className='relative'>
            <div>
                <input type="search" placeholder="Search" className=' h-10 w-80  pl-4 pr-12 border text-gray-500 placeholder:text-gray-500 border-gray-400 focus:outline-none focus:border-primary-500 focus:bg-white transition duration-150 ease-in-out '/>
            <div className='w-12 h-10 bg-accent-500 flex items-center justify-center text-white absolute right-0 top-0 cursor-pointer'><Icons.Search/></div>
            </div>
        </div>
    );
};

export default SearchBar;