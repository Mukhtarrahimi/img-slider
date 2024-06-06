import React from 'react'
import Navbar from '../../components/Navbar'

// all images import 
import img1 from '../../assest/img/1 (1).jpg'
import img2 from '../../assest/img/1 (2).jpg'
import img3 from '../../assest/img/1 (3).jpg'
import img4 from '../../assest/img/1 (4).jpg'
import img5 from '../../assest/img/1 (5).jpg'
import img6 from '../../assest/img/1 (6).jpg'
import img7 from '../../assest/img/1 (7).jpg'
import img8 from '../../assest/img/1 (8).jpg'

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="slider">
        <img src={img1} alt="" />
      </div>
    </div>
  )
}

export default Home
