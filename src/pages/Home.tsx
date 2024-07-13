
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table"
import { Button } from "antd"
import { Link } from "react-router-dom"
import { MoreOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useAuth } from "@clerk/clerk-react";

export const Home = () => {
    const { getToken } = useAuth();

    const makeRequest = async () => {
        try {
            await axios.post('http://localhost:8080/monitor/create', {
                monitorUrl: 'https://harshitrv.vercel.app/',
                alertCondition: 'IS404',
                email: 'harshit.rai.verma@gmail.com'
            }, {
                headers: {
                    Authorization: `Bearer ${await getToken()}`
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex justify-center min-h-screen bg-gray-100'>
           
            <div className="py-12 w-full lg:w-[900px]">
                
                <div className="flex justify-between">
                    <h1 className='font-medium text-2xl'>Your monitors</h1>
                    <Link to='/create'>
                        <Button type="primary" size="large" className="px-8 h-8">Create</Button>
                    </Link>
                    <Button onClick={makeRequest} type="primary" size="large" className="px-8 h-8">Create 2</Button>
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