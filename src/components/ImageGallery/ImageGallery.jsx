import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
const ImageGallery = ({ images, showModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map((item) => (
        <ImageGalleryItem key={item.id} {...item} showModal={showModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
