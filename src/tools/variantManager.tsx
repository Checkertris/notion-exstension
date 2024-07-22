import { cn, VariantProps, Variants } from "~/services/shadcn/lib/utils";
export { cn, VariantProps, Variants, cva } from "~/services/shadcn/lib/utils";

export class VariantManager<V extends Variants> {
  variants: V;
  props: VariantProps<V>;

  constructor(variants: V) {
    this.variants = variants;
  }

  get() {
    return cn(this.variants(this.props));
  }
}
