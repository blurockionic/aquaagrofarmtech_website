import Image from "next/image";
import img1 from "/public/images/gallery/gallery_1.png";
import img2 from "/public/images/gallery/gallery_2.png";
import img3 from "/public/images/gallery/gallery_3.png";

const ImageGallery = () => {
  const images = [img1, img2, img3, img1, img2, img3];

  return (
    <div className="w-full  h-full px-8 sm:px-16 mt-28  flex flex-col justify-start items-start gap-20">
      {/* Title Section */}
      <div className="w-full h-auto flex flex-col justify-start items-center gap-2.5">
        <div className="flex flex-col justify-start items-center gap-6 mt-16">
          <h1 className="w-full text-center text-orange-500 text-4xl sm:text-5xl font-bold leading-tight">
            Image Gallery
          </h1>
          <p className="w-full text-center text-black text-base sm:text-lg font-normal leading-7">
            Explore glimpses of our amazing projects
          </p>
        </div>
      </div>

      {/* Horizontal Scrollable Image Grid */}
      <div className="w-full flex overflow-x-scroll scrollbar-hide space-x-4">
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[319px] h-[240px]">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={319}
              height={400}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
