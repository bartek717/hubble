import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card/95 p-6 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-soft ${className}`}
    >
      {children}
    </div>
  );
}
