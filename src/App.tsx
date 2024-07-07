
import { Routes,Route, Link, useLocation } from "react-router-dom"
import MonitorCreate from "./pages/MonitorCreate";
import { Home } from "./pages/Home";
import { Button } from "antd";

import {
  ButtonCN
} from "@/components/ui/buttoncn"


// import { Button, Menu, MenuProps } from "antd";
// import { AppstoreOutlined, HomeFilled } from '@ant-design/icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"


import { ScrollArea } from "./components/ui/scroll-area";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"


// type MenuItem = Required<MenuProps>['items'][number];

// const items: MenuItem[] = [
//   {
//     type: 'divider',
//   },
//   {
//     key: 'sub1',
//     label: 'Home',
//     icon: <HomeFilled />,
//   },
//   {
//     type: 'divider',
//   },
//   {
//     key: 'sub2',
//     label: 'Navigation Two',
//     icon: <AppstoreOutlined />,
//     children: [
//       { key: '5', label: 'Option 5' },
//       { key: '6', label: 'Option 6' },
//       {
//         key: 'sub3',
//         label: 'Submenu',
//         children: [
//           { key: '7', label: 'Option 7' },
//           { key: '8', label: 'Option 8' },
//         ],
//       },
//     ],
//   },
//   {
//     type: 'divider',
//   },
// ];


function App() {
  const location = useLocation()
  
  return (
    <div className="flex flex-col">
      {/* <Menu
          className='hidden sm:flex sm:flex-col'
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          items={items}
      /> */}

      <div className="w-full h-14 bg-white items-end flex px-20 justify-between">

          <div className="flex h-full">
            <NavBarItem pathname={location.pathname} link="/" title="Home" />
            <NavBarItem pathname={location.pathname} link="/create" title="Create Monitort" />
          </div>
          

          <div className="h-full flex items-center gap-5">
            <FeedbackComponent />
            <ButtonCN variant="default" className={`font-semibold border-gray-300 h-8`}>Account</ButtonCN>
          </div>
          
      </div>

      <ScrollArea className="h-full w-full rounded-md border">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<MonitorCreate/>} />
        </Routes>
      </ScrollArea>
      
    </div>
  );
}

interface NavBarItemProps {
  pathname: string;
  link: string;
  title: string;
}

export const NavBarItem = (args: NavBarItemProps) => {
  return (
    <Link to={args.link} className="h-full flex flex-col justify-between">
      <div></div> <div></div> <div></div>
      <Button type="text" className={`rounded-lg  font-semibold ${args.pathname == args.link ? ' text-black' : 'text-gray-500' } `}>{args.title}</Button>
      <div className={`h-0.5 ${args.pathname == args.link ? 'bg-black' : ''}`}></div>
    </Link>
  )
}

export const FeedbackComponent = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <ButtonCN variant="outline" className={`font-semibold border-gray-300 h-8`}>Feedback</ButtonCN>
      </PopoverTrigger>
      <PopoverContent>
        <Textarea placeholder='Help us improve :)'/>

        <div className="flex justify-between mt-4 gap-4">
          <ButtonCN variant="outline" className={`font-semibold border-gray-300 h-8 w-full`}>Cancel</ButtonCN>
          <ButtonCN variant="default" className={`font-semibold border-gray-300 h-8 w-full`}>Send</ButtonCN>
        </div>
        
      </PopoverContent>
    </Popover>
  );
}

export default App
