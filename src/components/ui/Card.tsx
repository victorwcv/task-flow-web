import type { ComponentProps } from "react";
import "./Card.css";

type CardProps = ComponentProps<"div">;

export const Card = ({ ...props }: CardProps) => {
  return <div className="stellan-card" {...props} />;
};
