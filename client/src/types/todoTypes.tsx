export type TaskTypes = {
    _id: string,
    title: string,
    description: string,
    priority: "low" | "medium" | "high" | "",
    category: "todo" | "doing" | "done" | "",
    dueDate: Date | string,
    createdDate: string
}