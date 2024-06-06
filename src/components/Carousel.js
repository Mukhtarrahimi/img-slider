import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function Carousel({
  children: images,
  autoImages = false,
  autoImagesInterval = 6000,
}) {
  const [curentImg, setCurentImg] = useState(0);
  const prev = () => {
    setCurentImg((curentImg) =>
      curentImg === 0 ? images.length - 1 : curentImg - 1
    );
  };
  const next = () => {
    setCurentImg((curentImg) =>
      curentImg === images.length - 1 ? 0 : curentImg + 1
    );
  };
  useEffect(() => {
    if (!autoImages) return;
    const imagesInterval = setInterval(next, autoImagesInterval);
    return () => {
      clearInterval(imagesInterval);
    };
  }, []);
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${curentImg * 100}%)` }}
      >
        {images}
      </div>
      <div className="buttons absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="bg-white/30 text-gray-900 text-3xl cursor-pointer rounded-full p-1"
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={next}
          className="bg-white/30 text-gray-900 text-3xl cursor-pointer rounded-full p-1"
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
      <div className="absolute bottom-3 left-4">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              className={`transition-all w-2 h-2 rounded-full bg-white ${
                curentImg === i ? "p-1.5" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
