import { useContext } from "react"
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ImageContext from '../context/image'
import GalleryImage from "./GalleryImage"

const GalleryList = () => {
  const { images, loading, onDragEnd } = useContext(ImageContext)


  return (
    <div className="image-gallery">
     {loading ? (
        <p>Loading...</p>
      ) : (
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={images} strategy={verticalListSortingStrategy}>
            {images.map((image) => (
              <div className="image" key={image.id}>
                <GalleryImage image={image} />
              </div>
            ))}
          </SortableContext>
        </DndContext>
      )}
    </div>
  )
}

export default GalleryList
