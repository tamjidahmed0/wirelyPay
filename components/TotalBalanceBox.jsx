'use client'
import { useEffect, useState } from 'react';
import DoughnutChart from './DoughnutChart';
import AnimationCounter from './AnimationCounter';
import { Plus } from '@/components/Icon';
import MyBanks from '@/lib/api/MyBanks';
import TotalBalanceBoxSkeleton from '@/skeleton/TotalBalanceBoxSkeleton';
import BankDetailsSubmit from './BankDetailsSubmit';

const TotalBalanceBox = () => {
  const [BalanceBoxData, setBalanceBoxData] = useState([]);
  const [balance, setBalance] = useState(null);
  const [TotalBanks, setTotalBanks] = useState(null);
  const [loading, setLoading] = useState(true); // Default is true

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        
        const result = await MyBanks();
        if(Array.isArray(result)){
          console.log(result)
          setBalanceBoxData(result);
          
          const totalAmount = result.reduce((acc, item) => acc + (item.amount || 0), 0);
          const count_banks = result.length;
          
          setBalance(totalAmount);
          setTotalBanks(count_banks);
        }else if(result && result.msg){
           setBalanceBoxData([])
        }
   

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    api();
  }, []);


 

  if (loading) {
    return <TotalBalanceBoxSkeleton />;
  }

  return (
    <div className='shadow-lg rounded-lg p-6 flex justify-between items-start border mt-[48px]'>
      <div className='flex items-start'>
        <DoughnutChart accounts={BalanceBoxData} />
        <div className='flex flex-col gap-6 ml-8'>
          <h2 className='text-[16px] max-sm:text-[11px] max-md:text-[13px] font-bold'>
            Bank accounts: {TotalBanks}
          </h2>
          <div className='flex flex-col gap-2 '>
            <p className='font-semibold text-gray-500 max-md:text-[15px] max-sm:text-[12px]'>Total balance</p>
            <p className='text-[30px] max-md:text-[22px] font-bold'>
              <AnimationCounter amount={balance} />
            </p>
          </div>
        </div>
      </div>
      
     
      <div className='self-start'>
        <BankDetailsSubmit ButtonclassName={' max-sm:text-[10px] max-sm:p-[10px]'} />
      </div>
    </div>
  );
}

export default TotalBalanceBox;
