import { createContext, useState, useEffect  } from "react";
import {
  arrayMove,
} from "@dnd-kit/sortable";
import { unsplashConfig } from '../imageConfig'
import axios from "axios";

const ImageContext = createContext();

function Provider ({ children }) {

    const fetchImages = async () => {
        try {
          const response = await axios.get(
            `${unsplashConfig.apiUrl}/photos/random/?count=12&orientation=portrait`,
            {
              headers: {
                Authorization: `Client-ID ${unsplashConfig.accessKey}`,
              },
            }
          );
      
          return response.data;
        } catch (error) {
          console.error('Error fetching images from Unsplash:', error);
          return [];
        }
      };

      const [images, setImages] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const getImages = async () => {
          const imageData = await fetchImages();
          setImages(imageData);
          setLoading(false);
        };
    
        getImages();
      }, []);
    
      const onDragEnd = (event) => {
        const { active, over } = event;
        if (active.id === over.id) {
          return;
        }
        setImages((images) => {
          const oldIndex = images.findIndex((image) => image.id === active.id);
          const newIndex = images.findIndex((image) => image.id === over.id);
          return arrayMove(images, oldIndex, newIndex);
        });
      };

      const searchImages = (term) =>{
        const searchedImages = images.filter(image => {
          return image.user.first_name.toLowerCase().includes(term.toLowerCase());
        })
        setImages(searchedImages)
      }
      

    const value = {
       fetchImages,
       images,
       loading,
       onDragEnd,
       searchImages,
    }


    return (
        <ImageContext.Provider value={value}>
            {children}
        </ImageContext.Provider>
    )
}

export {Provider}

export default ImageContext;