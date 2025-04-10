import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ElipseVertical, PlusSVG, EditSVG } from "./SVGs";
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

const ShowDone: React.FC = () => {
  return (
    <div className="">
      <Card className="w-[350px] max-h-[80vh]">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-xl">Done</CardTitle>
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
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="overflow-auto">
          <div>
            <ul>
              <li className="py-1">
                <Card
                  className="w-100vh h-fit p-3 flex flex-row items-start !gap-x-0"
                  onMouseEnter={() => {
                    console.log("hovered");
                  }}
                >
                  {/* <Checkbox className="mt-1 mr-2" /> */}
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
                  </div>
                  {/* add tooltip */}
                  <Button variant="ghost" className="px-3 py-1 rounded-full">
                    <EditSVG />
                  </Button>
                </Card>
              </li>
              <li className="py-1">
                <Card className="w-100vh h-fit p-3 flex flex-row items-start !gap-x-0">
                  {/* <Checkbox className="mt-1 mr-2" /> */}
                  <div className="flex flex-col items-start w-full max-w-xs gap-y-2">
                    <h1 className="w-full break-words font-bold text-md text-start">
                      Title Title Title Title Title Title Title Title
                    </h1>
                    <p className="w-full break-words text-start md:text-sm">
                      Description Description Description DescriptionDescri
                      Description Description Description
                    </p>
                    <p className="w-full break-words text-start md:text-xs px-3 py-1 bg-orange-500 !w-fit rounded-md">
                      MEDIUM
                    </p>
                    <p className="w-full break-words text-start md:text-sm text-gray-500 !w-fit rounded-md">
                      Due date:
                    </p>
                    <p className="w-full break-words text-start md:text-sm text-gray-500 !w-fit rounded-md">
                      Date created:
                    </p>
                  </div>
                  {/* add tooltip */}
                  <Button variant="ghost" className="px-3 py-1 rounded-full">
                    <EditSVG />
                  </Button>
                </Card>
              </li>
              <li className="py-1">
                <Card className="w-100vh h-fit p-3 flex flex-row items-start !gap-x-0">
                  {/* <Checkbox className="mt-1 mr-2" /> */}
                  <div className="flex flex-col items-start w-full max-w-xs gap-y-2">
                    <h1 className="w-full break-words font-bold text-md text-start">
                      Title Title Title Title Title Title Title Title
                    </h1>
                    <p className="w-full break-words text-start md:text-sm">
                      Description Description Description DescriptionDescri
                      Description Description Description
                    </p>
                    <p className="w-full break-words text-start md:text-xs px-3 py-1 bg-red-500 !w-fit rounded-md">
                      HIGH
                    </p>
                    <p className="w-full break-words text-start md:text-sm text-gray-500 !w-fit rounded-md">
                      Due date:
                    </p>
                    <p className="w-full break-words text-start md:text-sm text-gray-500 !w-fit rounded-md">
                      Date created:
                    </p>
                  </div>
                  {/* add tooltip */}
                  <Button variant="ghost" className="px-3 py-1 rounded-full">
                    <EditSVG />
                  </Button>
                </Card>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" className="font-bold">
            <PlusSVG />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowDone;
