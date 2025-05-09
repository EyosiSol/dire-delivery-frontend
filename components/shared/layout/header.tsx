'use client'

import { LogOutFetch, removeUserProfile, userProfile, userToken } from '@/actions/auth';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shared/custom-shadcn/custom-dialog-logout';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { LuChevronUp, LuLogOut } from 'react-icons/lu';
import SidebarToggleHeader from "./sidebar-toggle-header";


function Header() {
  const router = useRouter()

  const logout = async () => {
    const userData = await userProfile();
    const token = await userToken();

    if (userData && token) {
      if (userData && token) {
        await removeUserProfile();
        router.push('/log-in');
        await LogOutFetch(userData.id)
      }
    }
  }

  return (
    <div className="px-6 h-20 flex items-center bg-[#060A87] w-full md:hidden">
      {/* <SidebarTrigger /> */}
      <SidebarToggleHeader />
      <div className="flex gap-1 items-center justify-center ml-auto">
        <Dialog>
          <DialogTrigger>
            <LuChevronUp
              stroke="white"
              className={cn('cursor-pointer rotate-180')}
              size={23}
            />
          </DialogTrigger>
          <DialogContent
            className={cn(
              'top-16 right-4  bg-white py-3 px-3 rounded-md transition-all cursor-pointer hover:bg-gray-200',
            )}
            onClick={logout}
          >
            <DialogHeader className="p-0">
              <DialogTitle className="flex gap-2 text-sm font-normal" >
                <LuLogOut /> Logout
              </DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default Header