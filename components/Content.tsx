"use client";
import { Carousel , Dropdown, Avatar,Card} from "flowbite-react";
import Flagslider from "./Flagslider";
import Slider from "./Slider";

import Studyabroad from "./Home/Studyabroad";
import Studyeurope from "./Home/Studyeurope";
import Mbbs from "./Home/Mbbs";
import Coaching from "./Home/Coaching";
import Testmonial from "./Testmonial";

export default function Content() {
    return (
      <>
<div className="container md:mx-auto grid grid-cols-1">


{/*Slider*/} 
<Slider/>

<br/>
<div className="bg-[url('/photos/test/bg3.png')]">
{/* country flags*/} 
<Flagslider/>

{/* Free Education */}
<Studyabroad/>
</div>
{/* Study In Europe */} 
<Studyeurope/>

{/*Study In MBBS */}

<Mbbs/>
<br/>
{/* coaching*/}
<Coaching/>

{/* testminial*/}
<Testmonial/>


{/*medium and large screen only Start*/}

<div className="  grid lg:grid-cols-6   md:grid-cols-3 place-items-center sr-only sm:not-sr-only  gap-2 ">

<div className="card w-full h-full bg-base-100 shadow-xl ">
  <div className="card-body items-center text-center">
  <a href="#" className="link link-hover  text-purple-600 ">
  <img  src="/photos/iconphots/download.png" alt="France" className="rounded-xl " />
   Downloads </a>
  </div>
</div>

<div className="card w-full h-full bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
  <a href="#" className="link link-hover  text-purple-600 ">
  <img  src="/photos/iconphots/ebrowcher.png" alt="France" className="rounded-xl " />
   E-Brouchers </a>
  </div>
</div>

<div className="card w-full h-full bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
  <a href="#" className="link link-hover  text-purple-600 ">
  <img  src="/photos/iconphots/testminial.png" alt="France" className="rounded-xl " />
  Testimonials</a>
  </div>
</div>

<div className="card w-full h-full bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
  <a href="#" className="link link-hover  text-purple-600 ">
  <img  src="/photos/iconphots/video.png" alt="France" className="rounded-xl " />
  Videos </a>
  </div>
</div>

<div className="card w-full h-full bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
  <a href="#" className="link link-hover  text-purple-600 ">
  <img  src="/photos/iconphots/counselling.png" alt="France" className="rounded-xl " />
   Counselling</a>
  </div>
</div>

<div className="card w-full h-full bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
  <a href="#" className="link link-hover  text-purple-600 ">
  <img  src="/photos/iconphots/scholarship.png" alt="France" className="rounded-xl " />
  Scholarship</a>
  </div>
</div>
</div>

{/*medium and large screen only End */}
{/*---------------------------------------------------------------------------------------------------------------------------*/}
{/* small screen only Start*/}

<Card className=" md:hidden lg:hidden  m-2">
<div className=" grid grid-cols-2    place-items-center">
  
<a href="#">
<Avatar className="rounded-full text-white text-md m-2"
img="/photos/iconphots/download.png" alt="Instagramm"
size="md">
</Avatar>
<h2 className="text-blue-500 text-md mb-3 text-xl text-center "><b>Downloads</b></h2>
</a>

<a href="#">
<Avatar className="rounded-full text-white text-md"
img="/photos/iconphots/ebrowcher.png"  alt="Instagramm" E-Brouchers
size="md">
</Avatar>
<h2 className="text-blue-500 text-md mb-3 text-xl text-center "><b>E-Brouchers</b></h2>
</a>

<a href="#">
<Avatar className="rounded-full text-white text-md"
img="/photos/iconphots/testminial.png"  alt="Instagramm"
size="md">
</Avatar>
<h2 className="text-blue-500 text-md mb-3 text-xl text-center "><b>Testimonials</b></h2>
</a>

<a href="#">
<Avatar className="rounded-full text-white text-md"
img="/photos/iconphots/video.png" alt="Instagramm" E-Brouchers
size="md">
</Avatar>
<h2 className="text-blue-500 text-md mb-3 text-xl text-center "><b>Videos</b></h2>
</a>

<a href="#">
<Avatar className="rounded-full text-white text-md"
img="/photos/iconphots/counselling.png"
size="md">
</Avatar>
<h2 className="text-blue-500 text-md mb-3 text-xl text-center "><b>Scholarship</b></h2>
</a>

<a href="#">
<Avatar className="rounded-full text-white text-md"
img="/photos/iconphots/scholarship.png" alt="Instagramm" E-Brouchers
size="md">
</Avatar>
<h2 className="text-blue-500 text-md mb-3 text-xl text-center "><b>Counselling</b></h2>
</a>

</div>
</Card>
{/* small screen only End*/}

</div>


</>
    )
  }