import GalleryGrid from "./galleryItem/galleryGrid";
import { galleryGridInfo } from "./galleryGridInfo";

const Gallery = () => {
  return <GalleryGrid {...galleryGridInfo}></GalleryGrid>;
};

export default Gallery;
