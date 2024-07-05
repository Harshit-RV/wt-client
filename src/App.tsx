
import { Routes,Route } from "react-router-dom"
import MonitorCreate from "./pages/MonitorCreate";
import { Home } from "./pages/Home";
import { Menu, MenuProps } from "antd";
import { AppstoreOutlined, HomeFilled } from '@ant-design/icons';
import { ScrollArea } from "./components/ui/scroll-area";


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    type: 'divider',
  },
  {
    key: 'sub1',
    label: 'Home',
    icon: <HomeFilled />,
  },
  {
    type: 'divider',
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
];


function App() {

  return (
    <div className="flex">
      <Menu
          className='hidden sm:flex sm:flex-col'
          style={{ width: 230 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          items={items}
      />
      <ScrollArea className="h-full w-full rounded-md border">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<MonitorCreate/>} />
        </Routes>
      </ScrollArea>
    </div>
  );
}


export default App
