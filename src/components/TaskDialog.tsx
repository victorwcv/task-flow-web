import type { MouseEvent, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Button } from "./ui/Button";
import "./TaskDialog.css";

type TaskDialogProps = {
  children: ReactNode;
  onClose: () => void;
  closeDisabled?: boolean;
};

export const TaskDialog = ({
  children,
  onClose,
  closeDisabled = false,
}: TaskDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, []);

  const handleClose = () => {
    if (closeDisabled) {
      return;
    }

    dialogRef.current?.close();
    onClose();
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target !== dialogRef.current) {
      return;
    }

    handleClose();
  };

  const handleCancel = (event: React.SyntheticEvent<HTMLDialogElement>) => {
    if (closeDisabled) {
      event.preventDefault();
      return;
    }

    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="task-dialog"
      onClick={handleBackdropClick}
      onCancel={handleCancel}
    >
      <div className="task-dialog-content">
        <div className="task-dialog-close">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            aria-label="Cerrar"
            onClick={handleClose}
            disabled={closeDisabled}
          >
            ×
          </Button>
        </div>

        {children}
      </div>
    </dialog>
  );
};
