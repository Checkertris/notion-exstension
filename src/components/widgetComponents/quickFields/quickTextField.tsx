import { quickFieldProps } from "@/quickFields.tsx/quickFieldProps";
import { quickTextAreaProps } from "@/quickFields/quickFieldProps";
import { Input } from "~/services/shadcn/components/ui/input";
import { Textarea } from "~/services/shadcn/components/ui/textArea";
import { cn } from "~/services/shadcn/lib/utils";



// export const AppTextField = ({ className, ...props }: quickTextFieldProps) => {
//   return <QuickTextInput type="text" className={cn(className)} {...props} />;
// };

// export const AppTextArea = (props: quickTextAreaProps): JSX.Element => {
//   const className = cn(props.resize == "false" && "resize-none shadow-sm", props.className);
//   return <QuickTextInput type="textArea" className={className} {...props} />;
// };
