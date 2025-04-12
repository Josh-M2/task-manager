export type taskInputTypes = {
    handleDialogCreate?: ()=>void;
    handleDialogEdit?: ()=>void;
    id?: string;
    title?: string;
    description?:string;
    priority?:"" | "low" | "medium" | "high";
    category?: "" | "todo" | "doing" | "done";
    dueDate?:Date | string;
    createdDate?:Date | string;
}