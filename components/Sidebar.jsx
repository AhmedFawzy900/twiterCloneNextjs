import Image from "next/image"
import logo2 from "../public/logo2.png"
import man from "../public/user.jpg"
import SidebarMenuItem from "./SidebarMenuItem"
import {HomeIcon} from '@heroicons/react/solid'
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/outline'
const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 
    xl:items-start fixed h-full xl:ml-24">
     
     {/* twiter logo */}
     <div className="hoverEffect  hover:bg-blue-100 
     flex items-center justify-center">
      <Image src={logo2} width='30' height='30' />
     </div>


     {/* menu */}
       <div className="mt-4 mb-2.5 xl:items:start">
        <SidebarMenuItem  text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem  text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem  text="Notification" Icon={BellIcon} />
        <SidebarMenuItem  text="Masseges" Icon={InboxIcon} />
        <SidebarMenuItem  text="Bookmark" Icon={BookmarkIcon} />
        <SidebarMenuItem  text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem  text="Profile" Icon={UserIcon} />
        <SidebarMenuItem  text="more" Icon={DotsCircleHorizontalIcon} />
       </div>


        {/* button  */}
        <button className="bg-blue-400 text-white rounded-full 
        w-56 h-12 font-bold shadow-md hover:brightness-95
        text-lg hidden xl:inline mb-2" >Tweet</button>


        {/* mini protofolio */}
        <div className="hoverEffect text-gray-700 flex items-center 
        justify-center xl:justify-start mt-auto  ">
            <Image src={man} alt='/' width='40' height='40' 
            className='rounded-full object-cover mr-2' />
          <div className="leading-5 hidden xl:inline ml-2 ">
              <h4 className="font-bold ">Ahmed Attia</h4>
              <p className="text-gray-500 ">@codewithahmed</p>
          </div>
          <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
        </div>

      </div>
  )
}

export default Sidebar
