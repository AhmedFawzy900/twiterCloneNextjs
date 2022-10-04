import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const News = ({articale}) => {
  return (
    <div>
        <a href={articale.url} target='_blank' >
            <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
                <div className="space-y-0.5">
                    <h6 className='text-sm font-bold'>{articale.title}</h6>
                    <p className='text-xs font-meduim text-gray-500'>{articale.source.name}</p>

                </div>
                <img className='rounded-xl '  alt='/' width='80' height='90' src={articale.urlToImage} alt='/' />

            </div>
        </a>
    </div>
  )


}

export default News
