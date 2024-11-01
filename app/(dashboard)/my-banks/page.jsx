import BankLists from "@/components/BankLists";
import Header from "@/components/Header";



const MyBanks = () => {


  return (
    <div className='h-[100vh] mx-10 pt-[48px]'>
      <Header title='My Banks Accounts' subText='Effortlessly Manage Your Banking Activities' />
      <h1 className='text-[18px] font-bold mt-[48px]'>Your banks</h1>
      <BankLists />

    </div>
  );
};

export default MyBanks;
