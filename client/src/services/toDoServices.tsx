import axiosInstance from "./axiosInstance";
import { TaskTypes } from "@/types/todoTypes";

export const createTask = async (
  newTask: TaskTypes
): Promise<TaskTypes | {}> => {
  console.log("forwarded to funct", newTask);
  try {
    const response = await axiosInstance.post("/todos/", newTask);
    console.log(createTask, "createTask");
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error);
  }
  return {};
};

export const initTodoList = async (): Promise<TaskTypes[] | []> => {
  try {
    const response = await axiosInstance.get("/todos/");
    response && console.log("w3w", response);
    if (response.data) return response.data;
  } catch (error: any) {
    console.error(error.message);
  }
  return [];
};

export const updateTask = async (
  updatedTask: TaskTypes
): Promise<TaskTypes | {}> => {
  console.log("calling updateTask");
  try {
    const response = await axiosInstance.put(`/todos/${updatedTask._id}`, {
      params: {
        title: updatedTask.title,
        description: updatedTask.description,
        priority: updatedTask.priority,
        category: updatedTask.category,
        dueDate: updatedTask.dueDate,
      },
    });
    if (response.data) return response.data;
    if (response.data) console.log("updateTask", response.data);
  } catch (error: any) {
    console.error(error.message);
  }
  return {};
};

export const addToDoing = async (id: string): Promise<{}> => {
  try {
    const response = await axiosInstance.put(`/todos/doing/${id}`);
    if (response.data) return response.data;
  } catch (error: any) {
    console.error(error.message);
  }
  return {};
};

export const addToDone = async (id: string): Promise<{}> => {
  try {
    const response = await axiosInstance.put(`/todos/done/${id}`);
    if (response.data) return response.data;
  } catch (error: any) {
    console.error(error.message);
  }
  return {};
};

export const addToDo = async (id: string): Promise<{}> => {
  try {
    const response = await axiosInstance.put(`/todos/todo/${id}`);
    if (response.data) return response.data;
  } catch (error: any) {
    console.error(error.message);
  }
  return {};
};

export const deleteById = async (id: string): Promise<{}> => {
  try {
    const response = await axiosInstance.delete(`/todos/${id}`);
    if (response.data) return response.data;
  } catch (error: any) {
    console.error(error.message);
  }
  return {};
};
