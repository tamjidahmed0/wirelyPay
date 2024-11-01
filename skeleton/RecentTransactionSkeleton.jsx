import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const TransactionTableSkeleton = () => {
    return (
        <section className="mt-5 md:mt-8 lg:mt-10">
            <div className="overflow-x-auto">
                <Table className="min-w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="p-2 md:p-4">
                                <div className="h-4 bg-gray-300 rounded-md w-20 md:w-24 lg:w-32 animate-pulse"></div>
                            </TableHead>
                            <TableHead className="p-2 md:p-4">
                                <div className="h-4 bg-gray-300 rounded-md w-16 md:w-20 lg:w-24 animate-pulse"></div>
                            </TableHead>
                            <TableHead className="p-2 md:p-4">
                                <div className="h-4 bg-gray-300 rounded-md w-14 md:w-18 lg:w-20 animate-pulse"></div>
                            </TableHead>
                            <TableHead className="p-2 md:p-4">
                                <div className="h-4 bg-gray-300 rounded-md w-20 md:w-24 lg:w-28 animate-pulse"></div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {Array(5).fill().map((_, index) => (
                            <TableRow key={index} className="border-b border-gray-200">
                                <TableCell className="px-2 py-3 md:px-4">
                                    <div className="h-4 bg-gray-200 rounded-md w-20 md:w-24 lg:w-32 animate-pulse"></div>
                                </TableCell>
                                <TableCell className="px-2 py-3 md:px-4">
                                    <div className="h-4 bg-gray-200 rounded-md w-16 md:w-20 lg:w-24 animate-pulse"></div>
                                </TableCell>
                                <TableCell className="px-2 py-3 md:px-4">
                                    <div className="h-4 bg-gray-200 rounded-md w-14 md:w-18 lg:w-20 animate-pulse"></div>
                                </TableCell>
                                <TableCell className="px-2 py-3 md:px-4">
                                    <div className="h-4 bg-gray-200 rounded-md w-20 md:w-24 lg:w-28 animate-pulse"></div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
};

export default TransactionTableSkeleton;
