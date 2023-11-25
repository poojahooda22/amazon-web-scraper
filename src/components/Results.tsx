import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    results: Product[];
}

function Results({ results }: Props) {
  return (
    <div 
        className='grid lg:grid-cols-2 
        xl:grid-cols-3 gap-5 w-full'
    >
        {results.map((result) => (
            <Link
                href={result.url}
                key={result.title}
                className='flex flex-col space-x-4 
                w-full 
                bg-white
                rounded-lg shadow-md p-5'
            >
                <img
                    srcSet={result.imageset}
                    alt={result.title}
                    className='object-contain h-40 w-full py-5'
                />

                <div 
                    className='flex flex-col py-5 flex-1'
                >
                    <p 
                        className='font-bold mb-4'
                    >
                        {result.title}
                    </p>
                    <p 
                        className='text-sm text-gray-500'
                    >
                        {result.rating} ({result.reviews} reviews)
                    </p>

                    <div 
                        className='flex items-center space-x-2 justify-end'
                    >
                        <p 
                        className='font-bold text-indigo-500 pt-2 text-xl mt-auto'>
                            {result.price > 0 ? `$${result.price}` :  "N/A"}
                        </p>

                        {result.previous_price > 0 && (
                            <p className='font-bold text-indigo-500/50 line-through
                            pt-2'>
                                ${result.previous_price}
                            </p>
                        )}
                    </div>

                    <div className='flex flex-wrap gap-2'>
                        {result.features.map(
                            (feature) => 
                            feature && (
                                <p 
                                    key={feature}
                                    className='text-xs bg-indigo-500 text-white 
                                    px-2 py-1 rounded-md'
                                >
                                    {feature}
                                </p>
                            )
                        )}
                    </div>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default Results
