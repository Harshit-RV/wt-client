
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
import { useQuery } from 'react-query'
import { deleteMonitor, getList } from "../utils/monitor.utils";
import { AlertCondition } from "../types/monitor";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../components/ui/dropdown-menu"
import toast from "react-hot-toast";

export const Home = () => {
    const { getToken } = useAuth();

    const makeRequest = async () => {
        try {
            const res = await axios.get('http://localhost:8080/monitor/list', {
                headers: {
                    Authorization: `Bearer ${await getToken()}`
                }
            })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchList = async () => {
        const token = await getToken();
        if (!token) return;
        return await getList(token);
    }

    const convertAlertConditionToString = (alertCondition: AlertCondition) => {
        switch (alertCondition) {
            case 'ISUNAVAILABLE':
                return 'When URL is unavailable';
            case 'IS404':
                return 'When URL returns 404';
            case 'ISNOT200':
                return 'When URL returns a status code other than 200';
            case 'IS500':
                return 'When URL returns 500';
            case 'IS501':
                return 'When URL returns 501';
            default:
                return '';
        }
    }

    const onDelete = async ( monitorId: string) => {
        const token = await getToken();
        if (!token) return;

        await toast.promise(
            deleteMonitor({ monitorId: monitorId, token: token }),
             {
               loading: 'Deleting...',
               success: <b>Monitor Deleted</b>,
               error: <b>Could not delete monitor.</b>,
             }
           );

        refetchMonitors();
    }

    const { data: monitors, isLoading: monitorsLoading, refetch: refetchMonitors } = useQuery('events', fetchList);

    return (
        <div className='flex justify-center min-h-screen bg-gray-100'>
           
            <div className="py-12 w-full lg:w-[900px]">
                
                <div className="flex justify-between">
                    <h1 className='font-medium text-2xl'>Your monitors</h1>
                    <Link to='/create'>
                        <Button type="primary" size="large" className="px-8 h-8">Create</Button>
                    </Link>
                    {/* <Button onClick={makeRequest} type="primary" size="large" className="px-8 h-8">Create 2</Button> */}
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
                        {
                            monitors?.map((monitor) => (
                                <TableRow>
                                    <TableCell><div className="w-4 ml-3 h-4 bg-green-500"></div></TableCell>
                                    <TableCell className="flex flex-col">
                                        <span className="font-medium text-lg mb-0.5 text-gray-800">{monitor.monitorUrl}</span>
                                        <span className="text-gray-400 font-semibold text-sm">
                                            {convertAlertConditionToString(monitor.alertCondition)} 
                                            {' ∘'} <span className="font-medium">{monitor.contacts[0].email}</span>
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right text-lg">
                                        {/* <MoreOutlined/> */}
                                        <DropdownMenu>
                                            <DropdownMenuTrigger><MoreOutlined/></DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>Options</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem onClick={() => onDelete(String(monitor._id))}>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>

            

                </div>
            </div>
        </div>
    )
}