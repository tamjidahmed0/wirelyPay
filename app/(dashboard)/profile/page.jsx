'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import tamjid from '@/public/tamjid.jpg'
import Header from "@/components/Header"
import GetProfileDetails from "@/lib/api/GetProfileDetails"


const Profile = () => {
const [result, setResult] = useState({})


  useEffect(()=>{


    const api = async () =>{
      try {
        const result = await GetProfileDetails()
        console.log(result)
        setResult(result)
      } catch (error) {
        console.log(error)
      }
    }

    api()


  },[])



  return (
    <section className="bg-[#F9F9F9] h-[100vh] flex flex-col justify-center space-y-7 max-md:space-y-0">
      <div className=" mx-16 max-sm:hidden">
      <Header title={'Profile'} subText={'Discover and manage your personal details here.'} />
      </div>
      <div className=" max-w-[95rem] 2xl:h-[80vh]  mx-16 max-sm:mx-auto max-md:mx-auto bg-white   p-6  rounded-lg shadow-md "> 
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src= {`${process.env.NEXT_PUBLIC_API}/${result.picture}`}
          alt="Profile Picture"
          height={500}
          width={500}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{result.name}</h2>
          <p className="text-gray-500">{result?.Id?.email}</p>
        </div>
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Edit
      </button>
    </div>

    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-7 max-md:gap-4 ">
      <div>
        <label className="block text-gray-700">Full Name</label>
        <input
          type="text"
          placeholder="Your First Name"
          readOnly
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-gray-700">Nick Name</label>
        <input
          type="text"
          placeholder="Your First Name"
          readOnly
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-gray-700">Gender</label>
        <select
          disabled
          className="w-full mt-1 p-2 border rounded-md bg-gray-100"
        >
          <option>Your First Name</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Country</label>
        <input
          type="text"
          placeholder="Your First Name"
          readOnly
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-gray-700">Language</label>
        <select
          disabled
          className="w-full mt-1 p-2 border rounded-md bg-gray-100"
        >
          <option>Your First Name</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Time Zone</label>
        <input
          type="text"
          placeholder="Your First Name"
          readOnly
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>
    </div>

    <div className="mt-16 max-md:mt-4">
      <h3 className="text-gray-700">My Email Address</h3>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
            📧
          </div>
          <div>
            <p className="font-semibold">{result?.Id?.email}</p>
            {/* <p className="text-xs text-gray-500">1 month ago</p> */}
          </div>
        </div>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
          Change email address
        </button>
      </div>
    </div>
      </div>

  </section>
  
  )
}

export default Profile