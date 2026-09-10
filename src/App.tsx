import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskCard } from "./components/TaskCard";
import type { Task } from "./domain/task/types";
import { useTasks } from "./hooks/useTasks";

function App() {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const {
    tasks,
    isLoading,
    error,
    isMutating,
    refetch,
    deleteElement,
    createElement,
    updateElement,
    updateStatus,
  } = useTasks();

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  const renderLoading = () => {
    return <p>Cargando tareas...</p>;
  };

  const renderError = () => {
    return (
      <div>
        <p>{error}</p>
        <button onClick={refetch}>Reintentar</button>
      </div>
    );
  };

  const renderTasks = () => {
    return tasks.length === 0 ? (
      <p>No hay tareas disponibles.</p>
    ) : (
      <div>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteElement}
            onEdit={handleEdit}
            onStatusChange={updateStatus}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <TaskForm
        key={editingTask?.id ?? "create"}
        onCreate={createElement}
        onEdit={updateElement}
        onCancel={editingTask ? () => setEditingTask(null) : undefined}
        editingTask={editingTask}
        isMutating={isMutating}
      />
      {isLoading ? renderLoading() : error ? renderError() : renderTasks()}
    </>
  );
}

export default App;
