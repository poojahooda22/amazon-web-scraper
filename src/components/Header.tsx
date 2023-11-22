'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React, { FormEvent, useRef } from 'react'

function Header() {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const input = inputRef.current?.value;

        if(!input) return;

        if(inputRef.current?.value) {
            inputRef.current.value = "";
        }

        try {
            // call our API to activate the Scraper...
            // /api/activeScraper

            const response = await fetch("/api/activateScraper", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ search: input }),
            })
        } catch (error) {
            //handle any errors
        }

        //wait for the response to come back
    };

  return (
    <header>
        <form 
            onSubmit={handleSearch}
            className='flex items-center space-x-2 justify-center 
            rounded-full py-2 px-4 bg-indigo-100 max-w-md mx-auto'
        >
            <input
                type="text"
                placeholder="Search..."
                className='flex-1 outline-none 
                bg-transparent placeholder:text-indigo-300'
                ref={inputRef}
                
            />
            
            <button hidden>Search</button>
            <MagnifyingGlassIcon className='h-6 w-6 text-indigo-300' />
        </form>
      
    </header>
  )
}

export default Header
