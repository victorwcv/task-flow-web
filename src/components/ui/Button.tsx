import type { ComponentProps } from "react";
import "./Button.css";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
};

export const Button = ({
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`stellan-btn stellan-btn-${variant} stellan-btn-${size}`}
      {...props}
    />
  );
};
