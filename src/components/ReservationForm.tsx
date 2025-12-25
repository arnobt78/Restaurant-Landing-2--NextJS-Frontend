/**
 * ReservationForm Component
 * 
 * A form component for booking restaurant tables.
 * 
 * Features:
 * - First name and last name inputs
 * - Date picker using react-day-picker (via Calendar component)
 * - Person count selector using Radix UI Select
 * - Form validation ready (can be extended)
 * - Responsive grid layout
 * 
 * Libraries Used:
 * - date-fns: Date formatting and manipulation
 * - Radix UI: Accessible UI primitives (Popover, Select)
 * - react-day-picker: Calendar component for date selection
 * 
 * State Management:
 * - Uses useState hook to manage selected date
 * - Date state is typed as Date | undefined for type safety
 */
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";
// import { Button } from "./button"
import { Label } from "./ui/label";
import { Input } from "./ui/input";
// import { Popover, PopoverTrigger } from "@radix-ui/react-popover"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const ReservationForm = () => {
  /**
   * Date State Management
   * 
   * useState hook with TypeScript typing:
   * - Date | undefined: Allows date or no selection
   * - new Date(): Initializes with current date
   * - setDate: Function to update the selected date
   * 
   * This state is used by the Calendar component to:
   * - Display selected date in the button
   * - Control which date is selected in the calendar
   */
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <form className="flex flex-col gap-y-10">
      <div className="grid gap-[30px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <label htmlFor="firstname"> first name</label>
            <Input id="firstname" type="text" />
          </div>

          <div>
            <label htmlFor="lastname">last name</label>
            <Input id="lastname" type="text" />
          </div>
        </div>

        <div className="grid  grid-cols-1 xl:grid-cols-2 gap-[30px]">
          {/* 
            Date Picker using Popover and Calendar
            - Popover: Radix UI component for dropdown/overlay
            - asChild: Allows PopoverTrigger to merge with Button props
            - format(date, "PPP"): Formats date as "January 1, 2024" (readable format)
            - Calendar: react-day-picker component wrapped in custom UI
            - mode="single": Allows selecting only one date
            - onSelect={setDate}: Updates state when date is selected
            - initialFocus: Focuses calendar on open for keyboard navigation
          */}
          <div>
            <label> date </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"input"}
                  className={cn("w-full justify-start text-left font-normal")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {/* 
            Person Count Selector
            - Select: Radix UI accessible select component
            - SelectGroup: Groups related options
            - SelectItem: Individual selectable options
            - Currently no state management (would need useState for value)
          */}
          <div>
            <Label> person </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="How many people?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>People</SelectLabel>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <Button className="uppercase w-full xl:w-auto xl:self-end rounded">
        Book a table
      </Button>
    </form>
  );
};

export default ReservationForm;
