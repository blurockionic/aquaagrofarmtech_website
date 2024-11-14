import ImageGallery from "../../components/gallery/ImageGallary";
import ProjectGallery from "../../components/gallery/ProjectGallery";
import React from "react";

const Gallery = () => {
  return (
    <div className="px-10 py-16">
      <ProjectGallery />
      <ImageGallery />
    </div>
  );
};

export default Gallery;
