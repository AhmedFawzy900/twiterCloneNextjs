import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { useState } from "react"
import man from '../public/user.jpg'
import {ChatIcon, ChartBarIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/outline'
const Input = () => {
  const [inputValue , setInputValue ] = useState("")
  const [media,setMedia] = useState("")
  const [newPost , setNewPost] = useState(false)
 
  return (
    <>
    <div className='flex border-b border-gray-200 p-3 space-x-3'>
      
      <div>
      <Image src={man} alt='/' width='40' height='40'
      className="rounded-full object-cover cursor-pointer hover:btightness-95 h-5" />
      </div>

      <div className="w-full divide-y divide-gray-2000 ">
        <div className=''>
            <textarea className="w-full border-none focus:ring-0 
            text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"  
            rows="2" placeholder="what is happening" onChange={(e) =>setInputValue(e.target.value) }
            ></textarea>
        </div>
        <div id="display_image" className={`${media ? 'flex' : 'hidden'} justify-center`}><Image src={media?URL.createObjectURL(media):""} className='object-cover' alt="/" width='400' height='250' /></div>
        <div className="flex items-center justify-between pt-2.5">
            <div className="flex">
              <div>
                <label htmlFor="img"><PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover-bg-sky-100" for="image" ></PhotographIcon></label>
                <input type="file" 
                accept='image/*'
                onChange={(e) => {setMedia(e.target.files[0])}} id='img' className="hidden" />
                
              </div>
                <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover-bg-sky-100" />
            </div>
            <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full
            font bold shadow-md hover:brightness-95 disabled:opacity-50" onClick={() => setNewPost(true)} >Tweet</button>
        </div>


      </div>

    </div>

  
    <div className={`${newPost ? 'block ' : 'hidden'}`}>
      <div className='flex p-3 cursor-pointer border-b border-gray-200'>
        {/*user image */}
        <div className='mr-3'>
          <Image src={man} alt='/'
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
                  sm:text-[16px] hover:underline'>Ahmed attia</h4>
                  <span className='text-sm sm:text-[15px]'>@attia - </span>
                  <span className='text-sm sm:text-[15px] hover:underline'>2 houre ago</span>
              </div>

                  {/* dot icon */}
                  <DotsHorizontalIcon className='h-10 hoverEffect
                  w-10 hover:bg-sky-100 hover:text-sky-500 p-2' />
            </div>

              {/* post text */}
                <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2 '>{inputValue}</p>
              {/* post image */}
                <div className={` ${media ? 'block ' : 'hidden'}`} >

                  <Image src={media?URL.createObjectURL(media):man} alt='post image'
                  width='500' height='250' objectFit='cover'
                  className={` ${media ? 'block ' : 'hidden'} rounded-2xl mr-2`}/>
                </div>
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
    </div>

    </>
  )
  
  }
  // console.log(inputValue,media);

export default Input
