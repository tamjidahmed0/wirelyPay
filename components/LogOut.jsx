'use client'
import Image from "next/image";
import tamjid from '@/public/tamjid.jpg';
import { SignOut } from "@phosphor-icons/react";

const LogOut = async({profileData}) => {
  const handleSignOut = () => {
    // Add your sign-out logic here (e.g., API call, state management, etc.)
    console.log("User signed out");
  };

  return (
    <div className='absolute bottom-5 flex items-center space-x-3'>
      <Image src={`${process.env.NEXT_PUBLIC_API}/${profileData.picture}`} height={40} width={40} className="rounded-full" />
      <div className='flex flex-col flex-shrink-0 max-w-[200px]'>
        <h1 className='font-bold text-[14px] truncate'>{profileData.name}</h1>
        <span className='text-gray-500 text-[14px] font-bold truncate'>{profileData.Id.email}</span>
      </div>
      <button onClick={handleSignOut} className='flex items-center justify-center rounded transition-colors'>
        <SignOut size={25} className='text-gray-700' />
      </button>
    </div>
  );
}

export default LogOut;
