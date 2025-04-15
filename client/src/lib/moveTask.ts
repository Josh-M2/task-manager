import { TaskTypes } from "@/types/todoTypes";
import { moveTask } from "@/services/toDoServices";

export const handleMoveTask = async (
  id: string,
  toCategory: TaskTypes["category"]
) => {
  try {
    console.log("TRIGGER handleMoveTask");
    const response = await moveTask(id, toCategory);
    response && console.log(`added to ${toCategory}, response: ${response}`);
  } catch (error: any) {
    console.error(error.message);
  }
};
