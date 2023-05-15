import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "flowbite-react";


export default function Slider() {
    return (
        <>
<div className="container md:mx-auto">

<div className=" grid lg:grid-cols-1">


<div className="h-40 xl:h-80 2xl:h-[30rem] md:h-[20rem]">
  <Carousel slide={false}>
  <img src="/photos/22.png"alt="..." />

  <img src="/photos/mana.png"alt="..." />

  <img src="/photos/00.png"alt="..." />
    
  </Carousel>
</div>
</div>
</div>

</>
    )
}