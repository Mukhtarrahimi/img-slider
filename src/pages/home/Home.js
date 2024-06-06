import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";

// all images import
import img1 from "../../assest/img/1.jpg";
import img2 from "../../assest/img/2.jpg";
import img3 from "../../assest/img/3.jpg";
import img4 from "../../assest/img/4.jpg";
import img5 from "../../assest/img/5.jpg";
let images = [img1, img2, img3, img4, img5];

function Home() {
  return (
    <div>
      <Navbar />
      <div className="slider w-full">
        <Carousel autoImages = {true} autoImagesInterval={5000}>
          {images.map((image) => (
            <img src={image} alt="" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
