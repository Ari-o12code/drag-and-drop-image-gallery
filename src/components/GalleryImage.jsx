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

  console.log(image)

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      >
      <img src={image.urls.small} alt={image.alt_description} />
      <p className="image-tag">{image.user.first_name}</p>
    </div>
  )
}

export default GalleryImage
