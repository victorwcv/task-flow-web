import { useEffect, useState } from "react";
import { createTask, deleteTask, getTasks, updateTask } from "../api/taskApi";
import { handleError } from "../utils/handleError";
import type { Task, TaskFormValues } from "../domain/task/types";
import type { TaskStatus } from "../domain/task/constants";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let ignore = false;

    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();

        if (!ignore) {
          setTasks(tasksData);
        }
      } catch (error) {
        if (!ignore) {
          handleError(error);
          setError("No pudimos cargar las tareas.");
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    fetchTasks();

    return () => {
      ignore = true;
    };
  }, [reloadKey]);

  const refetch = () => {
    setIsLoading(true);
    setError(null);
    setReloadKey((prev) => prev + 1);
  };

  const deleteElement = async (id: string) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      handleError(error);
    }
  };

  const createElement = async (data: TaskFormValues) => {
    try {
      const taskSaved = await createTask(data);
      setTasks((prev) => [...prev, taskSaved]);
    } catch (error) {
      handleError(error);
    }
  };

  const updateElement = async (id: string, data: TaskFormValues) => {
    try {
      const updatedTask = await updateTask(id, data);

      setTasks((prev) =>
        prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
      );
    } catch (error) {
      handleError(error);
    }
  };

  const updateStatus = async (id: string, status: TaskStatus) => {
    try {
      const updatedTask = await updateTask(id, { status });

      setTasks((prev) =>
        prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
      );
    } catch (error) {
      handleError(error);
    }
  };

  return {
    tasks,
    isLoading,
    error,
    refetch,
    deleteElement,
    createElement,
    updateElement,
    updateStatus,
  };
}
