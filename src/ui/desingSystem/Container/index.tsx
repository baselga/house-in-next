import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function Container({ children, className = "", ...rest }: ContainerProps) {
  return (
    <div className={`w-full max-w-7xl px-4 mx-auto ${className}`} {...rest}>
      {children}
    </div>
  );
}
export default Container;
