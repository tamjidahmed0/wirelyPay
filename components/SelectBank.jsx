'use client'
import { useState, useEffect } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


import { useDispatch } from "react-redux"
import { setSelectedBankId } from "@/features/BankIdSlice"
import { Wallet } from '@phosphor-icons/react'
import MyBanks from "@/lib/api/MyBanks"

const SelectBank = () => {
  const dispatch = useDispatch()
  const [selectbank, setSelectBank] = useState([])
  const [selectedAccount, setSelectedAccount] = useState(''); // Store both name and id

  useEffect(() => {
    const api = async () => {
      try {
        const result = await MyBanks()
        setSelectBank(result)
        setSelectedAccount(result[0].bankName) 
      } catch (error) {
        console.log(error)
      }
    }
    api()
  }, [])

  const handleValueChange = (value) => {
    const selected = JSON.parse(value) // Parse the JSON string to get the bank data
    // Set both name and ID
    dispatch(setSelectedBankId(selected.id))
   
  }

console.log(selectedAccount, 'selected account')

  return (
    <Select onValueChange={handleValueChange}  >
      <SelectTrigger className="w-[180px]">
        <Wallet size={32} />
        <SelectValue placeholder="Select Account" defaultValue={selectedAccount}/>
      </SelectTrigger>
      <SelectContent >
        {selectbank.map((bank, index) => (
          <SelectItem 
            key={index} 
            value={JSON.stringify({ name: bank.bankName, id: bank._id })} // Store both bank name and ID as JSON
          >
            {bank.bankName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectBank
