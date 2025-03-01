import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { LuChevronDown } from "react-icons/lu"


function Header() {
  return (
    <div className="px-6 h-20 flex items-center bg-[#060A87] w-full">
      <SidebarTrigger className="md:hidden" />
      <div className="flex gap-1 items-center justify-center ml-auto">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>        
        <LuChevronDown stroke="white" size={23} />               
      </div>
    </div>
  )
}

export default Header