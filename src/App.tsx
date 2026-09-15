import { useState } from "react";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { TaskForm } from "./components/TaskForm";
import { TaskCard } from "./components/TaskCard";
import type { Task } from "./domain/task/types";
import { useTasks } from "./hooks/useTasks";
import "./App.css";

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
        </div>
      </Card>
    );
  };

  const renderTasks = () => {
    if (tasks.length === 0) {
      return renderEmpty();
    }

    return (
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            isMutating={isMutating}
            onDelete={deleteElement}
            onEdit={handleEdit}
            onStatusChange={updateStatus}
          />
        ))}
      </div>
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
        <section className="app-form-section">
          <TaskForm
            key={editingTask?.id ?? "create"}
            onCreate={createElement}
            onEdit={updateElement}
            onCancel={editingTask ? () => setEditingTask(null) : undefined}
            editingTask={editingTask}
            isMutating={isMutating}
          />
        </section>

        <section className="tasks-section">
          <div className="tasks-section-header">
            <div>
              <p className="tasks-section-eyebrow">Workspace</p>

              <h2 className="tasks-section-title">Tus tareas</h2>
            </div>

            <span className="tasks-count">{tasks.length}</span>
          </div>

          {isLoading ? renderLoading() : error ? renderError() : renderTasks()}
        </section>
      </main>

      <footer className="app-footer">
        <span>TaskFlow</span>
        <span>Built with React + TypeScript</span>
      </footer>
    </div>
  );
}

export default App;
