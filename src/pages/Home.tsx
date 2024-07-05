
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


export const Home = () => {
    return (
        <div className='flex flex-col h-screen bg-white'>
            <h1>Dashboard</h1>

            <div className="bg-gray-100 border p-10">
                something
            </div>

            <div className="px-40">

                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        <TableRow className='border border-black rounded-lg'>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>

                <div className="bg-gray-100 border rounded-lg p-4 flex justify-between items-center">
                    <div className="w-4 h-4 bg-green-500"></div>
                    <span>https://google.com</span>
                    <span>200</span>

                </div>

            </div>

            

        
        </div>
    )
}