import { useId, type ComponentProps } from "react";
import "./Textarea.css";

type TextareaProps = ComponentProps<"textarea"> & {
  label?: string;
  error?: string;
  helperText?: string;
};

export const Textarea = ({
  id,
  label,
  error,
  helperText,
  ...props
}: TextareaProps) => {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  const feedbackId = `${textareaId}-feedback`;

  return (
    <div className="stellan-textarea-container">
      {label && (
        <label className="stellan-textarea-label" htmlFor={textareaId}>
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        className={`stellan-textarea ${error ? "stellan-textarea-danger" : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || helperText ? feedbackId : undefined}
        {...props}
      />

      {(error || helperText) && (
        <div
          id={feedbackId}
          className={
            error ? "stellan-textarea-error" : "stellan-textarea-helper-text"
          }
        >
          {error || helperText}
        </div>
      )}
    </div>
  );
};
