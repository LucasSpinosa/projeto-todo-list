export interface Task {
    id: number;
    title: string;
    description: string;
    steps: string[];
    priority: "low" | "medium" | "high";
    status: "working" | "done";
}