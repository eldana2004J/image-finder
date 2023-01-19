import React from "react";

export default function ({ webformatURL, largeImageURL, showModal }) {
  return (
    <div>
      <li onClick={() => showModal(largeImageURL)} className="ImageGalleryItem">
        <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
      </li>
    </div>
  );
}
