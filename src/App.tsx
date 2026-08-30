import { useEffect, useState } from "react";
import type { Task, TaskFormValues } from "./types/task";
import "./App.css";
import { getTasks, createTask } from "./api/taskApi";
import { mapTask } from "./utils/mapTask";
import { ApiError } from "./api/client";
import { z } from "zod";
import { TaskForm } from "./components/TaskForm";
import { TaskCard } from "./components/TaskCard";

function handleError(error: unknown) {
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

function App() {
  const [tasks, setTasksData] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        const tasksData = data.map(mapTask);
        setTasksData(tasksData);
      } catch (error) {
        handleError(error);
      }
    };
    fetchTasks();
  }, []);

  const saveTask = async (data: TaskFormValues) => {
    const taskSaved = await createTask(data);
    setTasksData((prev) => [...prev, mapTask(taskSaved)]);
  };

  return (
    <>
      <TaskForm onSubmit={saveTask} />
      <div>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}

export default App;
