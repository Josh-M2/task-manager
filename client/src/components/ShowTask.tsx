import React, { useRef, useState } from "react";
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

const ShowTask: React.FC = () => {
  const [isHovered, setisHovered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useTheme();

  const toggle = () => {
    setisHovered(!isHovered);
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
              <li className="py-1">
                <Card
                  className="w-100vh h-fit p-3 flex flex-row items-start !gap-x-0 cursor-pointer"
                  onMouseEnter={toggle}
                  onMouseLeave={toggle}
                >
                  <div className="flex flex-col items-start w-full max-w-xs gap-y-2">
                    <h1 className="w-full break-words font-bold text-md text-start">
                      Title Title Title Title Title Title Title Title
                    </h1>
                    <p className="w-full break-words text-start md:text-sm">
                      Description Description Description DescriptionDescri
                      Description Description Description
                    </p>
                    <p className="w-full break-words text-start md:text-xs px-3 py-1 bg-green-500 !w-fit rounded-md">
                      LOW
                    </p>
                    <p className="w-full break-words text-start md:text-sm text-gray-500 !w-fit rounded-md">
                      Due date:
                    </p>
                    <p className="w-full break-words text-start md:text-sm text-gray-500 !w-fit rounded-md">
                      Date created:
                    </p>

                    <div
                      ref={contentRef}
                      style={{
                        maxHeight: isHovered
                          ? `${contentRef.current?.scrollHeight}px`
                          : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease-out",
                      }}
                      className="w-full"
                    >
                      <div className="w-full mt-1 p-1 rounded-b-md flex justify-center gap-x-2">
                        <Button variant="outline" className="px-3 py-1 rounded">
                          <EditSVG />
                        </Button>
                        <Button variant="outline" className="px-3 py-1 rounded">
                          Doing
                        </Button>
                        <Button variant="outline" className="px-3 py-1 rounded">
                          Done
                        </Button>

                        <Dialog>
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
                      <div></div>
                    </div>
                  </div>
                </Card>
              </li>
              <li className="py-1">
                <Card
                  className="w-100vh h-fit p-3 flex flex-row items-start !gap-x-0 cursor-pointer"
                  onMouseEnter={toggle}
                  onMouseLeave={toggle}
                >
                  <div className="flex flex-col items-start w-full max-w-xs gap-y-2">
                    <h1 className="w-full break-words font-bold text-md text-start">
                      Title Title Title Title Title Title Title Title
                    </h1>
                    <p className="w-full break-words text-start md:text-sm">
                      Description Description Description DescriptionDescri
                      Description Description Description
                    </p>
                    <p className="w-full break-words text-start md:text-xs px-3 py-1 bg-green-500 !w-fit rounded-md">
                      LOW
                    </p>
                    <p className="w-full break-words text-start md:text-sm text-gray-500 !w-fit rounded-md">
                      Due date:
                    </p>
                    <p className="w-full break-words text-start md:text-sm text-gray-500 !w-fit rounded-md">
                      Date created:
                    </p>

                    <div
                      ref={contentRef}
                      style={{
                        maxHeight: isHovered
                          ? `${contentRef.current?.scrollHeight}px`
                          : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease-out",
                      }}
                      className="w-full"
                    >
                      <div className="w-full mt-1 p-1 rounded-b-md flex justify-center gap-x-2">
                        <Button variant="outline" className="px-3 py-1 rounded">
                          <EditSVG />
                        </Button>
                        <Button variant="outline" className="px-3 py-1 rounded">
                          Doing
                        </Button>
                        <Button variant="outline" className="px-3 py-1 rounded">
                          Done
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Dialog>
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

              <TaskInputForm />
              <DialogFooter>
                <Button type="submit">Save task</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowTask;
