'use client'
import { HouseSimple, CurrencyDollar, Scroll , MoneyWavy, Bank, User} from "@phosphor-icons/react"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Navigation = ({profileData}) => {
    const pathname = usePathname()
    console.log(pathname)
    const menuItems = [
        {label: 'Home', icon : <HouseSimple size={25} /> , link:'/home'},
        {label: 'My Banks', icon :<CurrencyDollar size={25} /> , link:'/my-banks'},
        {label: 'Transaction History', icon :<Scroll size={25} /> , link:'/transaction-history'},
        {label: 'Payment Transfer', icon :<MoneyWavy size={25} /> , link:'/payment-transfer'},
        {label: 'Connect Bank', icon :<Bank size={25} />  , link:'/connect-bank'},
        {label: 'Profile', icon :<User size={25} />  , link:'/profile'}
      ]
    return (
        <section className='mt-[2rem]  '>
        {menuItems.map((value, index) => (
            <ul key={index} className='mb-5'>
                <li className={`${value.link === pathname ? 'bg-tealBlue' : '!text-[#344054]'} rounded-md px-3 py-3 text-white font-semibold`}>
                    <div className='flex items-center space-x-3'>
                        {value.icon}
                        <Link href={value.link} className='text-[16px]'>{value.label}</Link>
                    </div>
                </li>
            </ul>
        ))}
    
     
    </section>
    
    )
}

export default Navigation