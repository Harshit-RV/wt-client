import { TableCell, TableRow } from "./ui/table";
import { Skeleton } from "../components/ui/skeleton"
import { MoreOutlined } from '@ant-design/icons';


export const MonitorSkeleton = () => {
  return (
      <TableRow>
          <TableCell>
              <Skeleton className="w-5 ml-3 h-5 bg-gray-200" />

              {/* <div className="w-4 ml-3 h-4 bg-green-500"></div> */}
          </TableCell>

          <TableCell className="flex flex-col w-full">

              <Skeleton className="w-full h-5 mb-3 bg-gray-200" />
              <div className="flex w-full">
                  <Skeleton className="w-full h-5 bg-gray-200" />
                  <div className="w-full"></div>
              </div>

          </TableCell>

          <TableCell className="text-right text-lg">
              <MoreOutlined/>
          </TableCell>
      </TableRow>
  );
}