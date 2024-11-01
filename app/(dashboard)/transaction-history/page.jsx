'use client'
import TransactionsTable from "@/components/TransactionsTable"
import Header from "@/components/Header"
import SelectBank from "@/components/SelectBank"
import { useSelector } from "react-redux"


const TransactionHistory = () => {
  const selectedBankId = useSelector((state) => state.bankId.selectedBankId);
  return (
    <div className='mx-10 pt-[48px]'>
      <div className='flex justify-between '>
        <Header title={'Transaction history'} subText={'Gain Insights and Track Your Transactions Over Time'} />

        <SelectBank />
  

      </div>

      {/* <div className ='bg-[#1570EF] h-[142px] rounded-md px-8 py-3 space-y-6 mt-[20px] flex justify-between max-md:'>
       <div>
       <h1 className ='font-bold text-[24px] text-white'>Brac bank plc</h1>
       <span className ='text-[20px] font-bold text-white'> Account No: 558545845466789334</span>
       </div>

        <div className =' bg-[#FFFFFF4D] w-[165px] h-[85px] rounded-lg border p-3'>
            <h1 className ='text-[14px] font-semibold text-white'>Current Balance</h1>
            <span className =' text-[24px] font-bold text-white'>$23537</span>
        </div>
      </div> */}

        <div className ='mt-[20px]'>
          <h1 className ='text-[18px] font-bold'>Transaction history</h1>
        <TransactionsTable className={'max-h-[500px]'} bankId={selectedBankId} />
        </div>
     
    </div>
  )
}

export default TransactionHistory