import { TaskTypes } from "@/types/todoTypes";

export const sortList = (tasks: TaskTypes[], by: string): TaskTypes[] | [] => {
  let sortedList: typeof tasks | undefined = [];
  const prioComparison: Record<TaskTypes["priority"], number> = {
    high: 0,
    medium: 1,
    low: 2,
  };
  switch (by) {
    case "prioHigh":
      console.log("sorting 1");

      sortedList =
        tasks
          ?.slice()
          .sort(
            (a, b) => prioComparison[a.priority] - prioComparison[b.priority]
          ) || [];
      break;
    case "prioLow":
      console.log("sorting 2");

      sortedList =
        tasks
          ?.slice()
          .sort(
            (a, b) => prioComparison[b.priority] - prioComparison[a.priority]
          ) || [];
      break;

    case "due":
      console.log("sorting 3");
      sortedList = tasks
        ?.slice()
        .sort(
          (a, b) =>
            new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        );
      break;

    case "createdASC":
      console.log("sorting 4");
      sortedList = tasks
        ?.slice()
        .sort(
          (a, b) =>
            new Date(a.createdDate).getTime() -
            new Date(b.createdDate).getTime()
        );
      break;

    case "createdDESC":
      console.log("sorting 5");
      sortedList = tasks
        ?.slice()
        .sort(
          (a, b) =>
            new Date(b.createdDate).getTime() -
            new Date(a.createdDate).getTime()
        );
      break;

    default:
      break;
  }
  console.log("sorted", sortedList);
  return sortedList || [];
};
