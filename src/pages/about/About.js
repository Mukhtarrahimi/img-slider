import React from 'react'
import Navbar from '../../components/Navbar'
function About() {
  return (
    <div className="about">
      <Navbar/>
      <div className='px-8 md:px-12 lg:px-16 flex flex-col items-center justify-center mt-10'>
      <h1 className='text-2xl md:text-4xl text-blue-700'>about page</h1>
      <p className='pt-6 text-gray-800 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio ut labore necessitatibus doloribus quod magni beatae corporis, in porro deserunt sequi minus. Voluptatum doloribus cupiditate fugiat officiis totam sit.</p>
    </div>
    </div>
  )
}

export default About
