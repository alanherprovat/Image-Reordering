import React, { useState } from "react";
import "./Styles.css";
import ImageUploader from "./components/imageUploader";
import ImageGallery from "./components/ImageGallery";
import Nav from "./components/Nav";
import initialImages from "./initialImages";

function App() {
  const [images, setImages] = React.useState(initialImages);
  const [selectedImages, setSelectedImages] = useState([]);
  const [featureImageId, setFeatureImageId] = useState("1");

  const handleImageUpload = (dataUrl) => {
    const newImage = {
      id: (images.length + 1).toString(),
      src: dataUrl,
      alt: "Uploaded image",
    };
    setImages((prevImages) => [...prevImages, newImage]);
  };

  const moveImage = React.useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];
      clonedCards.splice(hoverIndex, 0, removedItem);
      setFeatureImageId(clonedCards[0].id);
      return clonedCards;
    });
  }, []);

  const toggleSelect = (imageId) => {
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.includes(imageId)) {
        return prevSelectedImages.filter((id) => id !== imageId);
      } else {
        return [...prevSelectedImages, imageId];
      }
    });
  };

  const deleteSelectedImages = () => {
    setImages((prevImages) => {
      const newImages = prevImages.filter(
        (image) => !selectedImages.includes(image.id)
      );
      if (newImages.length > 0) {
        setFeatureImageId(newImages[0].id);
      }
      return newImages;
    });
    setSelectedImages([]);
  };
  return (
    <>
      <Nav
        count={selectedImages.length}
        deleteSelectedImages={deleteSelectedImages}
      />
      <main>
        {React.Children.toArray(
          images.map((image, index) => (
            <ImageGallery
              src={image.src}
              id={image.id}
              index={index}
              alter={image.alt}
              moveImage={moveImage}
              featureImageId={featureImageId}
              isSelected={selectedImages.includes(image.id)}
              onToggleSelect={() => toggleSelect(image.id)}
            />
          ))
        )}
        <ImageUploader onUpload={handleImageUpload} />
      </main>
    </>
  );
}

export default App;
