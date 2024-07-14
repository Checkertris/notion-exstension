import GalleryGridProps from "./galleryGridProps";
import GalleryItem from ".";
import { cn } from "~/services/shadcn/lib/utils";
import { CardHeader } from "~/services/shadcn/components/ui/card";

const single = "justify-center";
const spread = "sm:pb-8 sm:grid-flow-col sm:snap-x sm:snap-mandatory sm:overflow-x-scroll sm:scroll sm:whitespace-nowrap sm:scroll-smooth no-scrollbar";

function GalleryGrid(props: GalleryGridProps) {
  return (
    <div className="p-3 overflow-x-scroll ">
      {Object.entries(props).map(([groupKey, group]) => (
        <div key={cn(groupKey, "-p")}>
          <CardHeader key={cn(groupKey, "-head")}>
            <h4 className="scroll-m-20 text-base font-semibold tracking-normal" key={cn(groupKey, "-h4")}>
              Get Stuff Done
            </h4>
          </CardHeader>
          <div className={cn("grid gap-4", single, spread)} key={cn(groupKey, "-main")}>
            {Object.entries(group.items).map(([itemKey, item]) => (
              <GalleryItem {...item} name={itemKey} key={itemKey} />
            ))}
          </div>
          <div key={cn(groupKey, "-divider")}>
            <hr className="solid collapse sm:visible" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default GalleryGrid;
