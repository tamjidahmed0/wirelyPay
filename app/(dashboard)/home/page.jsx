import Image from "next/image";
import Header from "@/components/Header";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import SideBar from "@/components/SideBar";
import RecentTransaction from "@/components/RecentTransaction";
import GetProfileDetails from "@/lib/api/GetProfileDetails";

export default async function Home() {
const result = await GetProfileDetails()
  const user = {
    firstName: 'Tamjid'
  }

  return (
    <div className=" mx-10 pt-[48px] ">


      <Header type='greeting' title='Welcome,' subText='Access & manage your account and transactions efficiently.' user={result.name} />
      <TotalBalanceBox  />
      <RecentTransaction />




    </div>
  );
}
