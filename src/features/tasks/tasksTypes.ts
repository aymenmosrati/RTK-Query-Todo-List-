export interface Task {
  id: string;
  name: string;
  status: "To Do" | "In Progress" | "In Review" | "Resolved";
  createdBy: string;
}
