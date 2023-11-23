import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    results: Product[];
}

function Results({ results }: Props) {
  return (
    <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-5 w-full'>
        {results.map((result) => (
            <Link
                href={result.url}
                key={result.title}
                className='flex flex-col space-x-4 w-full bg-white
                rounded-lg shadow-md p-5'
            >
                <img
                    srcSet={result.imageset}
                    alt={result.title}
                    className='object-contain h-40 w-full py-5'
                />

                <div className='flex flex-col py-5 flex-1'>
                    <p className='font-bold mb-4'>{result.title}</p>
                    <p className='text-sm text-gray-500'>
                        {result.rating} ({result.reviews} reviews)
                    </p>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default Results
