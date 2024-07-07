
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { MoreOutlined } from '@ant-design/icons';

export const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center h-screen bg-gray-100'>
           
            <div className="py-12 w-[900px]">
                
                <div className="flex justify-between">
                    <h1 className='font-medium text-2xl'>Create Monitor</h1>
                    <Button onClick={() => navigate('/create')} type="primary" size="large" className="px-8 h-8">Create</Button>
                </div>

                <div className="mt-7 rounded-xl border drop-shadow-sm bg-white">
                <Table className='rounded-lg'>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[60px] mr-4"></TableHead>
                            <TableHead>Monitors</TableHead>
                            <TableHead className="text-right">Options</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                    <TableRow>
                        <TableCell><div className="w-4 ml-3 h-4 bg-green-500"></div></TableCell>
                        <TableCell className="flex flex-col">
                            <span className="font-bold text-lg">google.com</span>
                            <span>Up - 7d 12h 3min</span>
                        </TableCell>
                        <TableCell className="text-right text-lg"><MoreOutlined/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div className="w-4 ml-3 h-4 bg-green-500"></div></TableCell>
                        <TableCell className="flex flex-col">
                            <span className="font-bold text-lg">google.com</span>
                            <span>Up - 7d 12h 3min</span>
                        </TableCell>
                        <TableCell className="text-right text-lg"><MoreOutlined/></TableCell>
                    </TableRow>

                    </TableBody>
                </Table>

            

                </div>

                
            </div>

            

        
        </div>
    )
}