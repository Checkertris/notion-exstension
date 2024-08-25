import GalleryItemProps from "./galleryItemProps";
import { BentoGridItem } from "~/services/aceternity/bento";
import { cn } from "~/services/shadcn/lib/utils";
import { icon } from "~/constants";
import { replaceUnderscore } from "~/tools/utils";

const hSingle = "h-[6rem] min-h-[6rem]";
const hSpread = "";

const ItemHeader = (props: { icon: icon }) => (
  <div className={cn(hSingle, hSpread, "place-content-center items-center flex flex-1 w-full rounded-xl bg-gradient-to-br from-blue-300 to-blue-200")}>
    <div className="group-hover/bento:translate-x-2 group-hover/bento:rotate-6 transition duration-200">
      <props.icon size={50} className={cn("text-white")}></props.icon>
    </div>
  </div>
);

const single = "max-w-80";
const spread = "sm:snap-center sm:w-64 sm:inline-block";

const GalleryItem = (props: GalleryItemProps & { name: string }) => (
  <BentoGridItem className={cn(single, spread, "border border-zinc-200 shadow")} header={<ItemHeader icon={props.icon} />} key={props.name} title={replaceUnderscore(props.name)} description={props.description} />
);

export default GalleryItem;
