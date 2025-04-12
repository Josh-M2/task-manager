import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {createTask, updateTask } from "@/services/toDoServices";
import { TaskTypes } from "@/types/todoTypes";
import { taskInputTypes } from "@/types/taskInputTypes";


const TaskInputForm: React.FC<taskInputTypes> = ({
  handleDialogCreate,
  handleDialogEdit,
  id,
  title,
  description,
  priority,
  category,
  dueDate,
  createdDate
}) => {

  const [date, setDate] = React.useState<Date>();
  const [newTask, setNewTask] = useState<TaskTypes>({
    _id: id ? id: "",
    title: title? title : "",
    description: description? description : "",
    priority: priority? priority as "low" | "medium" | "high": "",
    category: category? category: "todo",
    dueDate: "",
    createdDate: createdDate? new Date(createdDate): ""
  });

  useEffect(()=>{
    console.log("yawa na duedate",date);
    if (date) {
      console.log("Updated dueDate:", date);
      setNewTask((prevTask) => ({
        ...prevTask,
        dueDate: format(date, 'MMMM dd, yyyy'),
      }));
    } 
    else if(dueDate){
      // newTask.dueDate = new Date(dueDate);
      setDate(new Date(dueDate))
    }
  },[date]);

  useEffect(()=>{
    dueDate && console.log("dueDate", dueDate);
  },[dueDate])
  useEffect(()=>{
    dueDate && console.log("newTask.dueDate", newTask.dueDate);
  },[newTask.dueDate])

  const handleDialogEditTaskfunc = async()=>{
    console.log("clicked save task", handleDialogEdit)

    try {
      const response = await updateTask(newTask);
      return response ? response : null
    } catch (error:any) {
      console.error(error.message)
      
    } finally{
      handleDialogEdit && handleDialogEdit();
    }
  }

  const handleDialogCreateTaskfunc = async ()=>{
  
    console.log("newtask in handle create",newTask);

    // const isValid = Object.values(newTask).every(value => value !== '' && value !== null && value !== undefined);
    
    // if(!isValid){
    //   console.log("input all fields");
    //   return;
    // }

    try {
      const response = await createTask(newTask);
      response && console.log("created: ", response);
      handleDialogCreate && handleDialogCreate();
    } catch (error:any) {
      console.error(error.message)      
    }
  }
  

  const handleValueChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const {value, name}  = e.target;
    setNewTask((prev)=> ({...prev, [name]:value}));

  }


  useEffect(()=>{console.log("yawa na prio",newTask.priority)},[newTask]);


  return (
    <div className="">
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Name of task" value={newTask.title} name="title" onChange={handleValueChange}/>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Description of task" value={newTask.description} name="description" onChange={handleValueChange}/>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="due">Due date</Label>
            <Popover>
              <PopoverTrigger asChild id="due">
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[300px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 z-50">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="priority">Priority</Label>
            <Select value = {newTask.priority} onValueChange={(value) => setNewTask({ ...newTask, priority: value as "low" | "medium" | "high" })}>
              <SelectTrigger id="priority">
                <SelectValue placeholder="Select"/>
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="low" >Low</SelectItem>
                <SelectItem value="medium" >Medium</SelectItem>
                <SelectItem value="high" >High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="button" onClick={handleDialogCreate ?  handleDialogCreateTaskfunc : handleDialogEditTaskfunc}>Save task</Button>
        </div>
      </form>
    </div>
  );
};

export default TaskInputForm;
