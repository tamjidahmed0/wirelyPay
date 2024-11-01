import Navigation from "@/components/Navigation"
import LogOut from "@/components/LogOut"
import GetProfileDetails from "@/lib/api/GetProfileDetails"

const SideBar = async() => {

const result = await GetProfileDetails()


  return (
    <div className=' h-[100vh] w-[300px] border-r max-md:hidden relative'>
 
      <div className=' mx-5'>
        <h1 className='text-3xl font-bold mt-10'>wirelyPay</h1>
        <Navigation profileData = {result} />
        <LogOut profileData = {result} />
        
      </div>
    </div>
  )
}

export default SideBar