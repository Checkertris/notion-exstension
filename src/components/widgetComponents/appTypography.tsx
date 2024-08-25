import { cn } from "~/services/shadcn/lib/utils";

export const AppBulletList = ({ lines }: QuickBulletListProps) => {
  return (
    <ul className="list-disc leading-6">
      {lines?.map((element, index) => (
        <li key={cn(index, "-p")}>{element}</li>
      ))}
    </ul>
  );
};

export const AppParagraph = (props: QuickParagraphProps) => {
  return <p className="leading-6">{props.children}</p>;
};
