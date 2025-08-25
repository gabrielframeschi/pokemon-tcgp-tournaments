import { cn } from "@/lib/utils";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = (props: IProps) => {
  return (
    <div
      className={cn(
        "flex items-center bg-white p-6 rounded-lg shadow-2xl",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
