"use client";
import {Card } from "flowbite-react";
import Slider from "react-slick";


export default function Mbbs() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide:0,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll:1
            }
          }
        ]
      };
    return (
      <>




{/* Free Education */}
<div >

<div className=" grid grid-cols-1  ">

<h1 className="text-red-500 text-md  text-2xl text-center "><b>MBBS IN ABROAD</b></h1>

<div className=" place-items-center text-center ">
<Slider {...settings} className="m-5">
          


<div>
    <div className="flex flex-col items-center m-5  ">
    <a href="/countries/usa">
    <img className="rounded-lg" src="/photos/round/usa.png"  alt="Bonnie image"  />
    <h5 ><b>MBBS In USA</b> </h5> </a>
</div>
</div>

<div>
    <div className="flex flex-col items-center m-5  ">
    <a href="/countries/ukrain">
    <img className="rounded-lg" src="/photos/round/ukr.png"  alt="Bonnie image"  />
    <h5 ><b>MBBS In Ukrain</b> </h5> </a>
</div>
</div>

<div>
    <div className="flex flex-col items-center m-5 ">
    <a href="/countries/uk">
    <img  className="rounded-lg" src="/photos/round/uk.png"  alt="Bonnie image"  />
    <h5><b>MBBS In UK</b> </h5> </a>
</div>
</div>

<div>
    <div className="flex flex-col items-center m-5 ">
    <a href="/countries/canada">
    <img  className="rounded-lg" src="/photos/round/russia.png"  alt="Bonnie image"  />
    <h5><b>MBBS In Russia</b> </h5> </a>
</div>
</div>

<div>
    <div className="flex flex-col items-center m-5 ">
    <a href="/countries/france">
    <img  className="rounded-lg" src="/photos/round/pol.png"  alt="Bonnie image"  />
    <h5><b>MBBS In Poland</b> </h5> </a>
</div>
</div>

<div>
    <div className="flex flex-col items-center m-5 ">
    <a href="/countries/italy">
    <img  className="rounded-lg" src="/photos/round/geo.png"  alt="Bonnie image"  />
     <h5><b>MBBS In Georgia</b> </h5> </a>
</div>
</div>

<div>
    <div className="flex flex-col items-center m-5 ">
    <img  className="rounded-lg" src="/photos/round/swedan.png"  alt="Bonnie image"  />
    <h5><b>MBBS In Swedan</b> </h5>  
</div>
</div>






</Slider>
</div>
<div className=" grid lg:grid-cols-2 md:grid-cols-1 m-5 ">


<div className=" text-slate-500 m-5" >
<p>p2pOverseas is responsible for helping you get admitted to the top universities across the world.
   Many students dream of enrolling names for MBA or MBBS courses abroad. If you are one of them, we can guide you on the right path. 
   International education will pave the way for your future aspirations, and thus you should prepare from now for more significant achievements.
    We are partnered with several colleges, universities, and medical institutions globally, so you can contact us to discuss further steps.</p>
</div>

<img  src="/photos/mbbs/smb.png"  alt="MBBS"  />
</div>
</div>

</div>



</>
    )
  }