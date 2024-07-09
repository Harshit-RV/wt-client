import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "./ui/popover"

import { Textarea } from "./ui/textarea"
import { ButtonCN } from "./ui/buttoncn";

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
  