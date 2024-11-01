import { Wallet } from '@/components/Icon'

const BankInfo = () => {
    return (

        <div className='flex bg-[#F5FAFF] px-7 py-5 rounded-md mt-[20px]'>
            <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
                <Wallet size={20} />
            </div>

            <div className='ml-4 flex flex-col space-y-[7px]'>
                <h1 className='text-[#194185] font-bold text-[20px]'>Brac Bank PLC</h1>
                <span className='text-[#1570EF] font-semibold text-[18px]'>$85544</span>
            </div>
        </div>

    )
}

export default BankInfo