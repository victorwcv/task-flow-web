import type { ComponentProps } from "react";
import "./Button.css";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  appearance?: "default" | "icon";
};

export const Button = ({
  variant = "primary",
  size = "md",
  appearance = "default",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`stellan-btn stellan-btn-${variant} stellan-btn-${size} stellan-btn-${appearance}`}
      {...props}
    />
  );
};
