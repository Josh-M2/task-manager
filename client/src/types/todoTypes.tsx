export type TaskTypes = {
  _id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high" | "";
  category: "todo" | "doing" | "done" | "";
  dueDate: Date | string;
  createdDate: Date | string;
};

export type TaskInputTypes = {
  handleDialogCreate?: () => void;
  handleDialogEdit?: () => void;
  selectedTask?: {
    _id: string;
    title: string;
    description: string;
    priority: "low" | "medium" | "high" | "";
    category: "todo" | "doing" | "done" | "";
    dueDate: Date | string;
    createdDate: Date | string;
  };
};

export type ShowTaskTypes = {
  toDoList?: TaskTypes[];
  doneList?: TaskTypes[];
  doingList?: TaskTypes[];
};
