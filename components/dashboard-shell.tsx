import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DashBoardShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function DashBoardShell({
  children,
  className,
  ...props
}: DashBoardShellProps) {
  return (
    <div className={cn("grid items-center gap-8", className)} {...props}>
      {children}
    </div>
  );
}
