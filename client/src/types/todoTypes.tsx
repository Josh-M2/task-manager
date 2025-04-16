export type TaskTypes = {
  _id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  category: "todo" | "doing" | "done";
  dueDate: Date;
  createdDate: Date;
};

export type CleanerForTaskTypes = Omit<TaskTypes, "_id" | "createdDate">;

export type TypesOfTaskInputComponent = {
  handleDialogCreate?: () => void;
  handleDialogEdit?: () => void;
  selectedTask?: {
    _id: string;
    title: string;
    description: string;
    priority: TaskTypes["priority"];
    category: TaskTypes["category"];
    dueDate: Date;
    createdDate: Date;
  };
  category?: TaskTypes["category"];
};

export type TypesOfShowTaskComponent = {
  toDoList?: TaskTypes[];
  setToDoList?: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
  doneList?: TaskTypes[];
  setDoneList?: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
  doingList?: TaskTypes[];
  setDoingList?: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
  loadingInit: boolean;
};
