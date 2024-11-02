'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import tamjid from '@/public/tamjid.jpg'
import Header from "@/components/Header"
import GetProfileDetails from "@/lib/api/GetProfileDetails"
import { Button } from "@/components/ui/button"
import { getNames } from 'country-list';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import moment from 'moment-timezone'



const Profile = () => {
  const [result, setResult] = useState({})
  const countryNames = getNames();
  const timeZones = moment.tz.names();


  useEffect(() => {


    const api = async () => {
      try {
        const result = await GetProfileDetails()
        console.log(result)
        setResult(result)
      } catch (error) {
        console.log(error)
      }
    }

    api()


  }, [])



  const handleSubmit = (formData) =>{
    const name = formData.get('name')
    const gender = formData.get('gender')
    const country = formData.get('country')
    const timeZone = formData.get('timeZone')

console.log(name, gender, country, timeZone)
    


  }


  return (
    <section className="bg-[#F9F9F9] h-[100vh] flex flex-col justify-center space-y-7 max-md:space-y-0">
      <div className=" mx-16 max-sm:hidden">
        <Header title={'Profile'} subText={'Discover and manage your personal details here.'} />
      </div>
      <form action={handleSubmit} className=" max-w-[95rem] 2xl:h-[80vh]  mx-16 max-sm:mx-auto max-md:mx-auto bg-white   p-6  rounded-lg shadow-md ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_API}/${result.picture}`}
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
          <Button type = "submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Save
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-7 max-md:gap-4 ">
          <div>
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
             
              className="w-full mt-1 p-1 border rounded-md"
            />
          </div>

          <div>
          <label className="block text-gray-700">Gender</label>
          <Select name="gender">
              <SelectTrigger className="">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>

              <SelectItem value='male'>Male</SelectItem>
              <SelectItem value='Female'>Female</SelectItem>




              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-gray-700">Country</label>
            <Select name="country">
              <SelectTrigger className="">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>

                {countryNames.map((country, index) => (
                  <div key={index}>
                    <SelectItem value={`${country}`}>{country}</SelectItem>

                  </div>

                ))}




              </SelectContent>
            </Select>
          </div>



            <div>
          <label className="block text-gray-700">Time zone</label>
          <Select name="timeZone">
              <SelectTrigger className="">
                <SelectValue placeholder="Time zone" />
              </SelectTrigger>
              <SelectContent>

              {timeZones.map((timezone, index) => (
                  <div key={index}>
                    <SelectItem value={`${timezone}`}>{timezone}</SelectItem>

                  </div>

                ))}




              </SelectContent>
            </Select>
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
      </form>

    </section>

  )
}

export default Profile