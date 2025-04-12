import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ElipseVertical, PlusSVG, EditSVG, TrashBinSVG } from "./SVGs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./ui/theme-provider";
import TaskInputForm from "./TaskInputForm";
import { TaskTypes } from "@/types/todoTypes";
import { initTodoList } from "@/services/toDoServices";
import { parseISO, format } from 'date-fns';

const ShowTask: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);


  const [tasks, setTasks] = useState<TaskTypes[]>([]);
   const [date, setDate] = React.useState<Date>();
   const [selectedTaskIndexEdit, setselectedTaskIndexEdit] = useState<number | null>(null);
   const [selectedTaskIndexDelete, setselectedTaskIndexDelete] = useState<number | null>(null);
   const [selectedTaskIndexDoing, setselectedTaskIndexDoing] = useState<number | null>(null);
   const [selectedTaskIndexDone, setselectedTaskIndexDone] = useState<number | null>(null);



  useEffect(()=>{
    const initialFetchOfToDoList = async () => {
      try {
        const response = await initTodoList();
        if(response){
          setTasks(response);
          console.log("initTODOLIST: ", response);
        } 
      } catch (error:any) {
        console.log(error.message)
        
      }
    }
    initialFetchOfToDoList();
  },[])


  useEffect(()=>{
    console.log("hover index: ", hoveredIndex);
  },[hoveredIndex])

  const handleDialogCreate = ()=>{
    setIsOpen(false);
  }

  const handleDialogEdit = ()=>{
    setIsOpenEdit(false);
  }

  const handleDialogdelete = ()=>{
    setIsOpenDelete(false);
  }

  const getFormattedDate = (date: string | Date): string => {
    const safeDate = typeof date === "string" ? parseISO(date) : date;
    return format(safeDate, "MMMM dd, yyyy");
  };

  

  return (
    <div className="flex justify-center items-center">
      <Card className="w-[350px] h-[80vh] flex flex-col justify-between">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-xl">To do list</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <ElipseVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-4">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Sort by</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Tag</DropdownMenuItem>
                    <DropdownMenuItem>Due Date</DropdownMenuItem>
                    <DropdownMenuItem>Date Created</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="overflow-auto">
          <div>
            <ul>
           {tasks && tasks.map((item, index)=>(
            <li className="py-1" key={index}>
                <Card
                  className="w-100vh h-fit p-3 flex flex-row items-start !gap-x-0 cursor-pointer"
                  onMouseEnter={()=>setHoveredIndex(index)}
                   onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col items-start w-full max-w-xs gap-y-2">
                    <h1 className="w-full break-words font-bold text-md text-start">
                      {item.title}
                    </h1>
                    <p className="w-full break-words text-start md:text-sm">
                    {item.description}
                    </p>
                    <p className={`w-full break-words text-start md:text-xs px-3 py-1 !w-fit rounded-md 
                      ${item.priority === "low" ? "bg-green-500": item.priority === "medium" ? "bg-orange-500" : "bg-red-500"}`}>
                     {item.priority}
                    </p>
                    <p className="w-full break-words text-start md:text-sm text-gray-500 !w-fit rounded-md">
                      Due date: {getFormattedDate(item.dueDate)}
                    </p>
                    <p className="w-full break-words text-start md:text-sm text-gray-500 !w-fit rounded-md">
                      Date created: {getFormattedDate(item.createdDate)}
                    </p>

                    <div
                      ref={(el)=>{contentRef.current[index] = el}}
                      style={{
                        maxHeight: hoveredIndex === index
                          ? `${contentRef.current[index]?.scrollHeight}px`
                          : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease-out",
                      }}
                      className={`w-full transition-all duration-300 ease-out overflow-hidden ${hoveredIndex === index ? contentRef.current[index]?.scrollHeight : '0'}px`}
                    >
                      <div className="w-full mt-1 p-1 rounded-b-md flex justify-center gap-x-2">
                        <Dialog open = {selectedTaskIndexEdit === index} 
                        onOpenChange={(open) => {
                          if (open) {
                            setselectedTaskIndexEdit(index);
                          } else {
                            setselectedTaskIndexEdit(null);
                          }
                        }}>
                          <DialogTrigger asChild>
                          <Button variant="outline" className="px-3 py-1 rounded">
                            <EditSVG />
                          </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]"
                          >
                            <DialogHeader>
                              <DialogTitle>Edit Task</DialogTitle>
                              <DialogDescription>
                              Edit your task here, press save if your done.
                              </DialogDescription>
                            </DialogHeader>

                            <TaskInputForm
                            handleDialogEdit={() => setselectedTaskIndexEdit(null)}
                            id={item._id}
                            title={item.title}
                            description={item.description}
                            priority={item.priority}
                            category = {item.category}
                            dueDate={item.dueDate}
                            createdDate={item.createdDate} 
                            />                          
                        </DialogContent>
                        </Dialog>
                        <Button variant="outline" className="px-3 py-1 rounded">
                          Doing
                        </Button>
                        <Button variant="outline" className="px-3 py-1 rounded">
                          Done
                        </Button>

                       <Dialog open={selectedTaskIndexDelete ===index} onOpenChange={(open)=>{
                        if(open){
                          setselectedTaskIndexDelete(index);
                        } else {
                          setselectedTaskIndexDelete(null)
                        }
                       }}>
                          <DialogTrigger asChild>
                            <Button variant="destructive">
                              <TrashBinSVG />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Delete</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to delete this task?
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="sm:justify-end">
                              <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                  Close
                                </Button>
                              </DialogClose>
                              <DialogClose asChild>
                                <Button variant="destructive">Delete</Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog> 
                      </div>
                    </div>
                  </div>
                </Card>
              </li>
           ))}
              
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="font-bold">
                <PlusSVG />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>New task</DialogTitle>
                <DialogDescription>
                  Add your new task here, press save if your done.
                </DialogDescription>
              </DialogHeader>

              <TaskInputForm handleDialogCreate = {handleDialogCreate}/>

             
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowTask;
