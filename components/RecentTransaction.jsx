'use client'
import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BankInfo from "@/components/BankInfo"
import TransactionsTable from "./TransactionsTable"
import MyBanks from "@/lib/api/MyBanks"
import TransactionHistory from "@/lib/api/TransactionHistory"

const RecentTransaction = ({
    page = 1
}) => {

    const [result, setResult] = useState([])
    const [TransactionResult, setTransactionResult] = useState([])


    useEffect(() => {

        const api = async () => {
            try {
            
                const result = await MyBanks()
                const transactions_result = await TransactionHistory()
                setTransactionResult(transactions_result)

                if(Array.isArray(result)){
                    setResult(result)
                }else{
                    setResult([])
                }


                
            } catch (error) {
                console.log(error)
            }
        }

        api()


    }, [])




    return (
        <section>
            <h1 className=" text-[24px] font-bold mt-[48px]">Recent transactions</h1>


            <Tabs defaultValue={0} className="w-full mt-[20px]">

                {result.map((value, index) => (

                    <TabsList className=' !bg-none' key={index}>
                        <TabsTrigger value={index} className='!text-blue-500 font-bold'>{value.bankName}</TabsTrigger>
                    </TabsList>

                ))}



                {result.map((value, index) => (

                    <div>
                        <TabsContent value={index}>
                        
                            <TransactionsTable  className={'max-h-[40vh]'} data ={TransactionResult} bankId = {value._id} />
                        </TabsContent>
                    </div>

                ))}

            </Tabs>

        </section>
    )
}

export default RecentTransaction