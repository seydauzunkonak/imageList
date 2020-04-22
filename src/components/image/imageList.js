import React from "react";
import "./imageList.css";
import Image from "./image";

// props içerisnden images çekme
const ImageList = ({ images }) => {
  // hazırlanmış images
  const preparedImageslist = images.map((image) => {
    return <Image key={image.id} image={image} />;
  });
  return <div className="image-list-container"> {preparedImageslist} </div>;
};
export default ImageList;
