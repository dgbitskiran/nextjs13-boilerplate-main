"use client"
import { Carousel } from "flowbite-react";


export default function Slider() {
    return (
      <>
      
<div className="h-56 sm:h-64 xl:h-80 2xl:h-[38rem]">
  <Carousel slide={false}>

  <img src="/photos/canada/8.png"alt="canada" />

  <img src="/photos/canada/1.png"alt="canada" />

  <img src="/photos/canada/2.png"alt="canada" />
    
  </Carousel>
</div>


      
      </>
    )
}