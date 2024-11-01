import localFont from "next/font/local";

import SideBar from "@/components/SideBar";
import StoreProvider from "@/storeProvider/storeProvider";


export const metadata = {
  title: "WirelyPayss",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
   <StoreProvider>
      <div
        className={` antialiased flex`}
      >
     <SideBar />
         <div className = 'flex-1'>
         {children}
         </div>
      

      </div>
   </StoreProvider>

   
  );
}