

const TotalBalanceBoxSkeleton = () => {
  return (
    <div className='shadow-lg rounded-lg p-6 flex justify-between items-start border mt-[48px] animate-pulse'>
    {/* Left Section */}
    <div className='flex items-start'>
      {/* Skeleton for Doughnut Chart */}
      <div className='w-32 h-32 bg-gray-300 rounded-full'></div>
      <div className='flex flex-col gap-6 ml-8'>
        {/* Skeleton for Bank Accounts Header */}
        <div className='h-5 w-32 max-md:w-24 bg-gray-300 rounded'></div>
        {/* Skeleton for Total Balance Section */}
        <div className='flex flex-col gap-2'>
          <div className='h-4 w-20 max-md:w-16 bg-gray-300 rounded'></div>
          <div className='h-8 w-40 max-md:w-32 bg-gray-300 rounded'></div>
        </div>
      </div>
    </div>
    
    {/* Right Side with Skeleton Add Bank Button */}
    <div className='self-start'>
      <div className='h-6 w-24 max-md:w-16 bg-gray-300 rounded'></div>
    </div>
  </div>
  
  )
}

export default TotalBalanceBoxSkeleton