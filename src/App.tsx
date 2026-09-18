import { useState } from "react";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { TaskDialog } from "./components/TaskDialog";
import { TaskForm } from "./components/TaskForm";
import type { Task } from "./domain/task/types";
import { useTasks } from "./hooks/useTasks";
import { TaskBoard } from "./components/TaskBoard";
import "./App.css";

function App() {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);

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

  const handleCreate = () => {
    setEditingTask(null);
    setIsTaskDialogOpen(true);
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsTaskDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsTaskDialogOpen(false);
    setEditingTask(null);
  };

  const renderLoading = () => {
    return (
      <Card>
        <div className="task-state">
          <span className="task-state-indicator" />
          <p>Cargando tareas...</p>
        </div>
      </Card>
    );
  };

  const renderError = () => {
    return (
      <Card>
        <div className="task-state task-state-error">
          <div>
            <p className="task-state-title">No pudimos cargar tus tareas</p>

            <p className="task-state-message">{error}</p>
          </div>

          <Button variant="secondary" onClick={refetch}>
            Reintentar
          </Button>
        </div>
      </Card>
    );
  };

  const renderEmpty = () => {
    return (
      <Card>
        <div className="task-state">
          <p className="task-state-title">Todo despejado</p>

          <p className="task-state-message">
            No tienes tareas todavía. Crea la primera para comenzar a organizar
            tu trabajo.
          </p>

          <Button onClick={handleCreate}>+ Nueva tarea</Button>
        </div>
      </Card>
    );
  };

  const renderTasks = () => {
    if (tasks.length === 0) {
      return renderEmpty();
    }

    return (
      <TaskBoard
        tasks={tasks}
        isMutating={isMutating}
        onDelete={deleteElement}
        onEdit={handleEdit}
        onStatusChange={updateStatus}
      />
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-brand">
          <div className="app-logo">T</div>

          <div>
            <p className="app-eyebrow">STELLAN</p>
            <h1 className="app-title">TaskFlow</h1>
          </div>
        </div>

        <p className="app-tagline">Organiza. Ejecuta. Avanza.</p>
      </header>

      <main className="app-main">
        <section className="tasks-section">
          <div className="tasks-section-header">
            <div>
              <p className="tasks-section-eyebrow">Workspace</p>

              <h2 className="tasks-section-title">Tus tareas</h2>
            </div>

            <div className="tasks-section-actions">
              <span className="tasks-count">{tasks.length}</span>

              <Button onClick={handleCreate}>+ Nueva tarea</Button>
            </div>
          </div>

          {isLoading ? renderLoading() : error ? renderError() : renderTasks()}
        </section>
      </main>

      <footer className="app-footer">
        <span>TaskFlow</span>
        <span>Built with React + TypeScript</span>
      </footer>

      {isTaskDialogOpen && (
        <TaskDialog onClose={handleCloseDialog} closeDisabled={isMutating}>
          <TaskForm
            key={editingTask?.id ?? "create"}
            editingTask={editingTask}
            isMutating={isMutating}
            onCreate={createElement}
            onEdit={updateElement}
            onCancel={handleCloseDialog}
          />
        </TaskDialog>
      )}
    </div>
  );
}

export default App;
