'use client'


import { useEffect , useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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


import { getNames } from 'country-list';
import ConnectBank from "@/lib/api/ConnectBank"
import { useToast } from "@/hooks/use-toast"
import { useDispatch, useSelector } from "react-redux"
import { setBankDetails } from "@/features/bankSlice"




const BankDetailsSubmit = ({ButtonclassName}) => {
    const dispatch = useDispatch()
    const { toast } = useToast()
    const [result, setResult] = useState({})

    const countryNames = getNames();

    const handleSubmit = async (formData) => {
        console.log(formData.get('country'))
        const bankName = formData.get('bankName')
        const name = formData.get('name')
        const account = formData.get('accountNumber')
        const swift = formData.get('swiftCode')
        const country = formData.get('country')

        

        try {
            const result = await ConnectBank({bankName,name, account, swift, country} )

            if(result.status === 201){
                setResult(result.data)
                dispatch(setBankDetails(result.data))
    console.log(result)
    
                toast({
                    
                    title: "Your request has been added to our server",
                    description: "Please wait until we review. It may time 2 or 3 days some time very fast.",
                  })
            }else if(result.status === 400){
                toast({
                    variant: "destructive",
                    title: result.msg
                  })
            }



            
        } catch (error) {
            console.log(result)
        }

    }

 
    return (
     
        
   <AlertDialog>

      

                <div className="flex justify-end">
                <AlertDialogTrigger className={`${ButtonclassName} w-auto p-3  bg-tealBlue rounded text-white font-bold hover:bg-blue-300 text-sm`}>
                        Add Account
                    </AlertDialogTrigger>
                </div>

                <AlertDialogContent>
                <form action={handleSubmit} className=" flex flex-col space-y-3">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Connect your bank account</AlertDialogTitle>
                        <AlertDialogDescription>
                            You can add bank account details and connect your local banks
                        </AlertDialogDescription>




                    </AlertDialogHeader>



                    <Label htmlFor="name">Bank name</Label>
                    <Input type="text" id="name" name='bankName' placeholder="Enter your abank name" />



                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name='name' placeholder="Enter your account name" />



                    <Label htmlFor="number">Account number</Label>
                    <Input type="number" name='accountNumber' id="number" placeholder="Enter your account number" />



                    <Label htmlFor="swift">Swift code</Label>
                    <Input type="text" id="swift" name='swiftCode' placeholder="Enter your bank swift code" />


                    <Select name="country">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>

                            {countryNames.map((country, index) => (
                                <div key={index}>
                                    <SelectItem value={`${country}`}>{country}</SelectItem>

                                </div>

                            ))}




                        </SelectContent>
                    </Select>






                    <AlertDialogFooter >
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction type ='submit'>Request for review</AlertDialogAction>

                    </AlertDialogFooter>

 


          </form>

                </AlertDialogContent>
      

       
          </AlertDialog>



      
    )
}

export default BankDetailsSubmit