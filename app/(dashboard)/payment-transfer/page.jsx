import Header from "@/components/Header"
import SelectBank from "@/components/SelectBank"
import PaymentTransferForm from "@/components/PaymentTransferForm"

const PaymentTransfer = () => {
    return (
        <div className="mx-4 md:mx-10 pt-[48px]">
            <Header title="Payment transfer" subText="Please provide any specific details or notes related to the payment transfer" />

            <div className="mt-6">
                <h1 className="text-[16px] md:text-[18px] font-bold">Transfer details</h1>
                <p className="text-[12px] md:text-[14px] font-semibold text-gray-500">Enter the details of the recipient</p>
            </div>

            <div className="mt-8">
                <div className="flex flex-col md:flex-row border-b pb-4">
                    <div className="w-full md:w-[280px]">
                        <h1 className="text-[14px] font-bold">Select source bank account</h1>
                        <p className="text-[12px] text-gray-500 font-semibold">Select the bank account you want to transfer funds from</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-8">
                        <SelectBank />
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h1 className="text-[16px] md:text-[18px] font-bold">Bank account details</h1>
                <p className="text-[12px] md:text-[14px] font-semibold text-gray-500">Enter the bank account details of the recipient</p>
            </div>

        
                <PaymentTransferForm />
           
        </div>
    )
}

export default PaymentTransfer
