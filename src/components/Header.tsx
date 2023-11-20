import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React from 'react'

function Header() {
  return (
    <header>
        <form>
            <input>
            
            </input>
            <button hidden>Search</button>
            <MagnifyingGlassIcon className='h-6 w-6 text-indigo-300' />
        </form>
      
    </header>
  )
}

export default Header
