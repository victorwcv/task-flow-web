import { useEffect, useState } from "react";
import "./App.css";
import { getTasks, createTask, deleteTask } from "./api/taskApi";
import { ApiError } from "./api/client";
import { z } from "zod";
import { TaskForm } from "./components/TaskForm";
import { TaskCard } from "./components/TaskCard";
import type { Task, TaskFormValues } from "./domain/task/types";

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
        const tasksData = await getTasks();
        setTasksData(tasksData);
      } catch (error) {
        handleError(error);
      }
    };
    fetchTasks();
  }, []);

  const handleSave = async (data: TaskFormValues) => {
    try {
      const taskSaved = await createTask(data);
      setTasksData((prev) => [...prev, taskSaved]);
    } catch (error) {
      handleError(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      setTasksData((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <TaskForm onSubmit={handleSave} />
      <div>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}

export default App;
