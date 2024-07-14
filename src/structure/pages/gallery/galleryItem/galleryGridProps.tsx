import GalleryItemProps from "./galleryItemProps";

interface GridGroupProps {
  description: string;
  items: Record<string, GalleryItemProps>;
}

type GalleryGridProps = Record<string, GridGroupProps>;

export default GalleryGridProps;
