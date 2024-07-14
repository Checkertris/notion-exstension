import { cn } from "~/services/shadcn/lib/utils";

export const QuickBulletList = ({ lines }: { lines: string[] }) => {
  return (
    <ul className="list-disc leading-6">
      {lines?.map((element, index) => (
        <li key={cn(index, "-p")}>{element}</li>
      ))}
    </ul>
  );
};

export const QuickParagraph = (props: { children }) => {
  return <p className="leading-6">{props.children}</p>;
};
