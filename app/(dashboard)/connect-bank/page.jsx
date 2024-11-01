'use client'
import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import BankDetailsSubmit from "@/components/BankDetailsSubmit"
import GetConnectedBanks from "@/lib/api/GetConnectedBanks"
import Header from "@/components/Header"
import { useSelector } from "react-redux"

const ConnectBank = () => {
  const bankDetails = useSelector((state) => state.bank.bankDetails)
  const [result, setResult] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      try {
        const result = await GetConnectedBanks()
        setResult(result)
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }

    apiCall()
  }, [])

  useEffect(() => {
    setResult((prev) => [...prev, bankDetails])
  }, [bankDetails])

  return (
    <section className="mx-4 md:mx-10 pt-[48px]">
      <Header title="Connect Banks" subText="Connect your local banks to wirelyPay" />
      <BankDetailsSubmit />

      <div className="mt-10 md:mt-20 overflow-x-auto max-h-[60vh]">
        <div className="min-w-[600px] md:min-w-full">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs md:text-sm">Bank name</TableHead>
                <TableHead className="text-xs md:text-sm">Holder name</TableHead>
                <TableHead className="text-xs md:text-sm">Account no:</TableHead>
                <TableHead className="text-xs md:text-sm">Bank Id</TableHead>
                <TableHead className="text-xs md:text-sm">Country</TableHead>
                <TableHead className="text-xs md:text-sm">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result.map((value, index) => (
                <TableRow key={index} className="text-xs md:text-sm">
                  <TableCell className="font-bold px-2 md:px-4">{value.bankName}</TableCell>
                  <TableCell className="py-1 md:py-2">{value.name}</TableCell>
                  <TableCell className="py-1 md:py-2">{value.account}</TableCell>
                  <TableCell className="py-1 md:py-2">{value._id}</TableCell>
                  <TableCell className="py-1 md:py-2">{value.country}</TableCell>
                  <TableCell className="py-1 md:py-2">
                    <span
                      className={`${
                        value.status ? 'bg-green-500' : 'bg-red-500'
                      } px-2 py-1 rounded text-xs md:text-sm font-bold text-white`}
                    >
                      {value.status ? 'Approved' : 'Under review'}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

export default ConnectBank
