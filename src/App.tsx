import { useEffect, useState } from "react";
import type { Task } from "./types/task";
import "./App.css";
import { getTasks } from "./api/taskApi";
import { mapTask } from "./utils/mapTask";
import { ApiError } from "./api/client";
import { z } from "zod";

function App() {
  const [tasks, setTasksData] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        const tasksData = data.map(mapTask);
        setTasksData(tasksData);
      } catch (error) {
        if (error instanceof ApiError) {
          console.error(`HTTP error - ${error.status}: ${error.message}`);
        } else if (error instanceof z.ZodError) {
          console.error(`Validation error - ${error.message}`, error.issues);
        } else if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    };
    fetchTasks();
  }, [tasks]);

  return <></>;
}

export default App;
