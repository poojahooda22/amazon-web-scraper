import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React from 'react'

function Header() {
  return (
    <header>
        <form 
            className='flex items-center space-x-2 justify-center 
            rounded-full py-2 px-4 bg-indigo-100 max-w-md mx-auto'
        >
            <input
                type="text"
                placeholder="Search..."
                className='flex-1'
            />
            
            <button hidden>Search</button>
            <MagnifyingGlassIcon className='h-6 w-6 text-indigo-300' />
        </form>
      
    </header>
  )
}

export default Header
