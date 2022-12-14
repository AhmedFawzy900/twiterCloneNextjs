import {ChatIcon, ChartBarIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

const Post = ({post}) => {

  return (
    <div className='flex p-3 cursor-pointer border-b border-gray-200'>
      {/*user image */}
      <div className='mr-3'>
        <Image src={post.userImage} alt='/'
         width='40' height='40' objectFit='cover' 
         className='rounded-full '/> 
      </div>
       {/*the right side */}
       <div>
          {/* heADER */}

          <div className='flex items-center justify-between'>
             {/*post user info */}
             <div className='flex space-x-1 items-center whitespace-nowrap'>
                <h4 className='font-bold text-[15px]
                sm:text-[16px] hover:underline'>{post.name}</h4>
                <span className='text-sm sm:text-[15px]'>@{post.username} - </span>
                <span className='text-sm sm:text-[15px] hover:underline'>{post.timeStamp}</span>
             </div>

                {/* dot icon */}
                <DotsHorizontalIcon className='h-10 hoverEffect
                 w-10 hover:bg-sky-100 hover:text-sky-500 p-2' />
          </div>

            {/* post text */}
              <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2 '>{post.text}</p>
            {/* post image */}
                <Image src={post.img} alt='post image'
                 width='500' height='350' objectFit='cover'
                 className='rounded-2xl mr-2'/>
            {/* icons */}
             <div className='flex justify-between text-gray-500 p-2'>
                <ChatIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
                <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100' />
                <HeartIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100' />
                <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
                <ChartBarIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
             </div>
       </div>
    </div>
  )
}

export default Post
