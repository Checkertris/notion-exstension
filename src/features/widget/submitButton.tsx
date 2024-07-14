import { Button } from "~/services/shadcn/components/ui/button";

export const SubmitButton = () => {
  return (
    <div className="grid w-full items-end gap-6 pt-3 px-2">
      <div className="justify-self-end">
        <Button>Submit</Button>
      </div>
    </div>
  );
};
