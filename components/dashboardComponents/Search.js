import React from 'react'
import {MdOutlineShortText} from 'react-icons/md'

const Search = ({search,setSearch}) => {
    const searchSuggestions = [{
        suggestion:'minimal'
    },{
        suggestion:'house'
    },{
        suggestion:'minimal'
    }]
    return (
        <div className='rounded-full overflow-hidden border-2 border-[#333333] p-1.5 max-w-[1150px] bg-[#1a1a1a] px-5 pr-8 flex items-center'>
            <div className='animate-pulse h-4 w-4 rounded-full border-2 flex-shrink-0' />
            <input 
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value) }
            className='bg-[#1a1a1a] placeholder-[#fafafa] text-white px-3 border-none outline-none lg:w-full focus:ring-0 text-xs'
            placeholder='Search...' />
            <div className='flex items-center divide-dotted divide-x-2 divide-[#333] ml-auto'>
                <div className='flex space-x-2 pr-5'>
                    {searchSuggestions.map((suggestion) => (
                        <button className='tag'>{suggestion.suggestion}</button>
                    ))}
                </div>
                <div className='flex items-center space-x-1.5 text-[#cecece] pl-4'>
                    <MdOutlineShortText className='text-2xl animate-pulse' />
                    <span className='text-xs font-medium'>Filters</span>
                </div>
            </div>
        </div>
    )
}

export default Search
