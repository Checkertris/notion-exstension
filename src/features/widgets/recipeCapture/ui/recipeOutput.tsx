// import { useFormManagerContext } from "~/features/formManager";
// import { RecipeCaptureFormManagerProps } from "../types";
// import { QuickBulletList } from "~/components/quickComponents";
// import { QuickParagraph } from "~/components/quickComponents";
// import { cn } from "~/services/shadcn/lib/utils";

// const RecipeOutput = () => {
//   const {
//     form: { watch },
//   } = useFormManagerContext<RecipeCaptureFormManagerProps>();

//   return watch("ingredients")?.map(({ heading, ingredients }, index) => (
//     <>
//       {heading && <QuickParagraph key={cn(index, "-h")}>{heading}</QuickParagraph>}
//       <QuickBulletList key={cn(index, "-b")} lines={ingredients?.map((ingredient) => ingredient.original)} />
//     </>
//   ));
// };

// export default RecipeOutput;
