'use client'
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux"
import TransferPayment from "@/lib/api/TransferPayment"
import { useToast } from "@/hooks/use-toast"

const PaymentTransferForm = () => {
    const { toast } = useToast()
    const selectedBankId = useSelector((state) => state.bankId.selectedBankId);

    const handleSubmit = async(formData) =>{
        const email = formData.get('email')
        const account = formData.get('account')
        const bankId = formData.get('bankid')
        const amount = formData.get('amount')

        try {
            const result = await TransferPayment({email,account, amount, ReceiverBankId:bankId, senderBankId:selectedBankId})
            console.log(result, 'result')
            if(result.status === 201){
                toast({
                    title: result.msg,
                    className: 'top-0 left-1/2 transform -translate-x-1/2 flex fixed md:max-w-[420px] md:top-4'
                  })
                  
            }else if(result.status === 400){
                toast({
                    variant: "destructive",
                    title: result.msg,
                    className: 'top-0 left-1/2 transform -translate-x-1/2 flex fixed md:max-w-[420px] md:top-4'
                  })
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form action={handleSubmit} className="w-full max-w-[824px]  px-4">
      <div className="mt-[20px] space-y-6">
        <div className="flex flex-col md:flex-row border-b pb-4">
          <div className="md:w-[280px]">
            <h1 className="text-sm md:text-[14px] font-bold">Recipient&apos;s Email Address</h1>
          </div>
          <div className="mt-2 md:mt-0 md:ml-20">
            <Input placeholder="Enter email" name="email" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b pb-4">
          <div className="md:w-[280px]">
            <h1 className="text-sm md:text-[14px] font-bold">Recipient&apos;s Bank Account Number</h1>
          </div>
          <div className="mt-2 md:mt-0 md:ml-20">
            <Input placeholder="Enter Account No:" name="account" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b pb-4">
          <div className="md:w-[280px]">
            <h1 className="text-sm md:text-[14px] font-bold">Recipient&apos;s Bank Id Number</h1>
          </div>
          <div className="mt-2 md:mt-0 md:ml-20">
            <Input placeholder="Bank id" name="bankid" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b pb-4">
          <div className="md:w-[280px]">
            <h1 className="text-sm md:text-[14px] font-bold">Enter Amount</h1>
          </div>
          <div className="mt-2 md:mt-0 md:ml-20">
            <Input placeholder="Amount" name="amount" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button className="w-full md:w-[824px] bg-tealBlue" type="submit">
          Transfer funds
        </Button>
      </div>
    </form>
  )
}

export default PaymentTransferForm
