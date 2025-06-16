import { useState } from "react";
import image1 from "../../assets/images/arid-bright-clouds-46160.jpg";
import image2 from "../../assets/images/blue-clouds-daylight-813847.jpg";
import image3 from "../../assets/images/blue-sky-cloudiness-clouds-449751.jpg";
import image4 from "../../assets/images/blue-sky-clouds-crop-1227513.jpg";
const ImageSlideShow = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrectIndex] = useState(0);
  const changeImage = (direction) => {
    if (direction === "next") {
      setCurrectIndex((currentIndex + 1) % images.length);
    } else {
      setCurrectIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-fit">
        <div className="">
          <button
            className="m-3 p-4 bg-gray-600 hover:bg-black text-white"
            onClick={() => {
              changeImage("prev");
            }}
          >
            Previous
          </button>
        </div>
        <div className="h-[300px] w-[300px] bg-gray-500">
          <img
            className="h-full w-full object-cover duration-500"
            src={images[currentIndex]}
            alt=""
          />
        </div>
        <div className="">
          <button
            className="m-3 p-4 bg-gray-600 hover:bg-black text-white"
            onClick={() => {
              changeImage("next");
            }}
          >
            Next
          </button>
        </div>
      </div>
      <div>{currentIndex + 1} out of 4</div>
    </>
  );
};

export default ImageSlideShow;
