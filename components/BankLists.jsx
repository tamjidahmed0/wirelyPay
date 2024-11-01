'use client'
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import { Trash } from "@phosphor-icons/react";
import GetConnectedBanks from "@/lib/api/GetConnectedBanks";
import MyBanks from "@/lib/api/MyBanks";
import DeleteBanks from "@/lib/api/DeleteBanks";
import { useToast } from "@/hooks/use-toast"





const BankLists = () => {
    const {toast} = useToast()

    const [result, setResult] = useState([])
    const [bankId , setBankId] = useState('')
    const [bankDelete, setbankDelete] = useState({})


    useEffect(() => {

        const apiRequest = async () => {
            try {
                
                const result = await MyBanks()
                if(Array.isArray(result)){
                    setResult(result)
                    console.log(result)
                }else{
                    setResult([])
                }
               
            } catch (error) {
                console.log(error)
            }
        }

        apiRequest()


    }, [bankDelete])



    const handlebankId = (bankId) =>{
      
        setBankId(bankId)
    }





const handleBankDelete = async  () =>{
    try {
        const result = await DeleteBanks({bankId})
        console.log(result)
        setbankDelete(result)
        if(result){
            toast({
                title: result.msg,
                className: 'top-0 left-1/2 transform -translate-x-1/2 flex fixed md:max-w-[420px] md:top-4'
              })
        }
    } catch (error) {
        console.log(error)
    }
}







    return (
        <div>

            <AlertDialog>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be remove this bank account from your profile.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick = {handleBankDelete}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>



                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Bank name</TableHead>
                            <TableHead>Swift code</TableHead>
                            <TableHead>Account number</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Actions</TableHead> {/* New header for actions */}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {result.map((value, index) => (
                            <TableRow key={index}>
                                <TableCell>{value.bankName}</TableCell>
                                <TableCell>{value.swift}</TableCell>
                                <TableCell>{value.account}</TableCell>
                                <TableCell>${value.amount}</TableCell>
                                <TableCell>


                                    <AlertDialogTrigger>
                                        <div className='text-red-500' onClick={()=> handlebankId(value._id)}>
                                            <Trash size={25} />
                                        </div>
                                    </AlertDialogTrigger>





                                </TableCell> {/* Delete button added here */}
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>






            </AlertDialog>




        </div>
    )
}

export default BankLists