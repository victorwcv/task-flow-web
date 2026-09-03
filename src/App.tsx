import { useEffect, useState } from "react";
import "./App.css";
import { getTasks, createTask, deleteTask, updateTask } from "./api/taskApi";
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
  const [editingTask, setEditingTask] = useState<Task | null>(null);

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
      if (editingTask) {
        const updatedTask = await updateTask(editingTask.id, data);

        setTasksData((prev) =>
          prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
        );

        setEditingTask(null);
        return;
      }

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

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  return (
    <>
      <TaskForm
        key={editingTask?.id ?? "create"}
        onSubmit={handleSave}
        onCancel={editingTask ? () => setEditingTask(null) : undefined}
        initialValues={
          editingTask
            ? {
                title: editingTask.title,
                description: editingTask.description ?? "",
              }
            : undefined
        }
      />
      <div>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
}

export default App;
