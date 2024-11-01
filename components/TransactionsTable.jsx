'use client'
import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import TransactionHistory from "@/lib/api/TransactionHistory";
import TransactionTableSkeleton from "@/skeleton/RecentTransactionSkeleton";

const TransactionsTable = ({ className, data, bankId }) => {
    const [Transaction, setTransaction] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const api = async () => {
            setLoading(true);
            try {
                const result = await TransactionHistory(bankId);
                setTransaction(result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        api();
    }, [bankId]);

    if (loading) {
        return <TransactionTableSkeleton />;
    }

    return (
        <section className="mt-[20px] md:mt-[30px] lg:mt-[40px]">
            {Transaction.length === 0 ? (
                <div className="text-center mt-20 text-gray-500 font-semibold">
                    <h1>No Transaction data available.</h1>
                </div>
            ) : (
                <div className={`${className} overflow-x-auto`}>
                    <Table className="min-w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="p-2 md:p-4 text-sm md:text-base lg:text-lg">Transaction</TableHead>
                                <TableHead className="p-2 md:p-4 text-sm md:text-base lg:text-lg">Amount</TableHead>
                                <TableHead className="p-2 md:p-4 text-sm md:text-base lg:text-lg">Date</TableHead>
                                <TableHead className="p-2 md:p-4 text-sm md:text-base lg:text-lg">TrxId</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {Transaction.map((value, index) => (
                                <TableRow key={index} className="border-b border-gray-200">
                                    <TableCell className="p-2 md:p-4 text-sm md:text-base lg:text-lg font-medium">{value.name}</TableCell>
                                    <TableCell
                                        className={`${value.isSendMoney ? 'text-red-500' : 'text-green-600'} font-bold p-2 md:p-4 text-sm md:text-base lg:text-lg`}
                                    >
                                        {value.isSendMoney ? `- $${value.amount}` : `+ $${value.amount}`}
                                    </TableCell>
                                    <TableCell className="p-2 md:p-4 text-sm md:text-base lg:text-lg text-gray-500">
                                        {new Date(value.Date).toLocaleString('en-US', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hour12: true,
                                        })}
                                    </TableCell>
                                    <TableCell className="p-2 md:p-4 text-sm md:text-base lg:text-lg">{value.trxId}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </section>
    );
};

export default TransactionsTable;
