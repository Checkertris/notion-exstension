import { quickFieldProps } from "./props/quickFieldProps";
import { Input } from "~/services/shadcn/components/ui/input";
import { Textarea } from "~/services/shadcn/components/ui/textArea";
import { cn } from "~/services/shadcn/lib/utils";

export interface quickTextFieldProps extends quickFieldProps<string> {
  mode?: "onBlur" | "onChange";
}

export interface quickTextAreaProps extends quickTextFieldProps {
  resize?: "true" | "false";
}

const QuickTextInput = (props: { type: "text" | "textArea" } & quickTextAreaProps): JSX.Element => {
  const Text = props.type == "text" ? Input : Textarea;

  switch (props.mode) {
    case "onBlur":
      return <Text {...props} onBlur={(event) => props.onChange(event.target.value)} onChange={null} />;
    case "onChange":
      return <Text {...props} onChange={(event) => props.onChange(event.target.value)} />;
  }
};

export const QuickTextField = ({ className, ...props }: quickTextFieldProps) => {
  return <QuickTextInput type="text" className={cn(className)} {...props} />;
};

export const QuickTextArea = (props: quickTextAreaProps): JSX.Element => {
  const className = cn(props.resize == "false" && "resize-none shadow-sm", props.className);
  return <QuickTextInput type="textArea" className={className} {...props} />;
};
