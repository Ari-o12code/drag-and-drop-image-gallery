import {
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const GalleryImage = ({image}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: image.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="image-card-container"
      >
      <img className="image-card" src={image.urls.small} alt={image.alt_description} />
      <div className="image-tag">{image.user.first_name}</div>
    </div>
  )
}

export default GalleryImage
