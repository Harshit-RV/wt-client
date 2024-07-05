
// import { Button } from "./components/ui/button";
import { Button } from 'antd';
import { Input } from "antd";
import { ArrowLeftOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { useState } from 'react';


function MonitorCreate() {
  const [ emailCount, setEmailCount ] = useState(1);

  return (
    <div className='flex h-screen bg-white'>
      <div className='px-4 p-4 sm:p-5 sm:px-14 flex flex-col w-full'>

        <Button type={'text'} className="border-gray-200 w-14 h-14"><ArrowLeftOutlined /></Button>

        <h1 className='font-extrabold text-3xl mt-5'>Create Monitor</h1>

        <div className="w-full sm:w-[550px]">

          <div className='flex flex-col mt-5 border p-7 rounded-lg pr-14 shadow-sm bg-black bg-opacity-80 gap-1'>
            <span className="text-white font-semibold text-lg">URL to monitor</span>
            <Input className='my-2 p-2' />
          </div>


          <div className='flex flex-col mt-5 border p-7 rounded-lg pr-14 shadow-sm bg-black bg-opacity-5 gap-3'>
            <span className=" font-semibold text-lg">Alert Condition</span>
            
            <Select
              style={{ flex: 1 }}
              size='large'
              options={[
                { value: 'When URL is unavailable', label: 'When URL is unavailable' },
                { value: 'When status code is 404', label: 'When status code is 404' },
                { value: 'When status code is 501', label: 'When status code is 501' },
                { value: 'When status code is not', label: 'When status code is not 200' },
              ]}
            />

          </div>
          
          <div className='flex flex-col mt-5 border p-7 rounded-lg pr-14 shadow-sm bg-black bg-opacity-5 gap-3'>
            <span className=" font-semibold text-lg">Contact Options</span>

            {
              Array(emailCount).fill(0).map((_, i) => (
                <Input key={i} className='p-2' placeholder={`Priority ${i+1}: E-mail`}/>
              ))
            }

            <div className='flex gap-3 mb-3'>
              <Button disabled={emailCount == 5} onClick={() => setEmailCount((value) => value+1)} type='primary' className='w-20 '><PlusOutlined /></Button>
              <Button disabled={emailCount == 1} onClick={() => setEmailCount((value) => value-1)} type='default' className='w-20 '><MinusOutlined /></Button>
            </div>


            { emailCount != 1 && <div className='flex justify-between gap-2 mt-1 items-center'>
              
              <span className='text-[15px]'>Time before alerting next priority email</span>
              <Select 
                style={{ width: 100 }}
                placeholder='x mins'
                size='small'
                options={[
                  { value: 10, label: '10 mins' },
                  { value: 5, label: '5 mins' },
                  { value: 2, label: '2 mins' },
                ]}
              />
             
            </div>}

            <div className='h-[2px] bg-gray-300 w-full'></div>
              
            <div className='flex justify-between gap-2 items-center'>
              
              <span className='text-[15px]'>Time before sending next series of alerts</span>
              <Select 
                style={{ width: 100 }}
                placeholder='x mins'
                size='small'
                options={[
                  { value: '10', label: '10 mins' },
                  { value: '5', label: '5 mins' },
                  { value: '2', label: '2 mins' },
                ]}
              />
             
            </div>

                
          </div>

          <div className='flex justify-end my-7 gap-8'>
            <Button size='large' className='px-10'>Cancel</Button>
            <Button type='primary' size='large' className='px-10'>Create</Button>
          </div>
        </div>

        


      </div>

     
    </div>
  );
}

export const InputField = ({placeholder, type} : {placeholder: string, type:'text' | 'number'}) => {
  return (
    <div>
      <input placeholder={placeholder} required type={type} id="first_name" className="w-80 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"/>
    </div>
  )
}

export default MonitorCreate
