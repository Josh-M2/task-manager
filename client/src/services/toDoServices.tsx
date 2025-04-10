import axiosInstance from "./axiosInstance";
import { TaskTypes } from "@/types/todoTypes";

export const createTask = async (newTask: {}) : Promise<TaskTypes | {}> =>{
    console.log("forwarded to funct",newTask);
    try {
        const response = await axiosInstance.post("/todos/", newTask);

        if(response.data){
            return response.data;
        }
    } catch (error:any) {
        console.error(error)
        
    }
return {};
}

export const initTodoList = async () :Promise<TaskTypes[] |[]> =>{
    try {
        const response = await axiosInstance.get("/todos/");
        if(response.data) return response.data;
    } catch (error:any) {
        console.error(error.message);
    }
    return [];
}