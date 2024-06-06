import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";

// all images import
import img1 from "../../assest/img/1 (1).jpg";
import img2 from "../../assest/img/1 (2).jpg";
import img3 from "../../assest/img/1 (3).jpg";
import img4 from "../../assest/img/1 (4).jpg";
import img5 from "../../assest/img/1 (5).jpg";
import img6 from "../../assest/img/1 (6).jpg";
import img7 from "../../assest/img/1 (7).jpg";
import img8 from "../../assest/img/1 (8).jpg";

let images = [img1, img2, img3, img4, img5, img6, img7, img8];

function Home() {
  return (
    <div>
      <Navbar />
      <div className="slider w-full ">
        <Carousel>
          {images.map((image) => (
            <img src={image} alt="" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
