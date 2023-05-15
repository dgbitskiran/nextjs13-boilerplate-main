import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card , Avatar} from "flowbite-react";
import Slider from "react-slick"


export default function Flagslider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide:0,
    margin:10,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      }
    ]
  };
    return (
 
<div className="grid grid-cols-1  ">
<Slider {...settings} className="sr-only sm:not-sr-only  ">
        
<div>
<Card className=" bg-[url('/photos/flags/bg.png')]"
horizontal={true} 
imgSrc="/photos/flags/nz.png" >
 <h2 className="card-subtitle ">Study In</h2>
<h2 className="card-title">AUSTRALIA</h2>
<button className="btn btn-primary item-center"><a href="/countries/australia"> View Now </a></button>
</Card>
</div>

<div>
<Card className=" bg-[url('/photos/flags/bg.png')]"
horizontal={true}
imgSrc="/photos/flags/cadana.png" >
 <h2 className="card-subtitle">Study In </h2>
<h2 className="card-title">Canada</h2>
<button className="btn btn-primary"><a href="/countries/canada"> View Now </a></button>
</Card>
</div>


<div>
<Card className=" bg-[url('/photos/flags/bg.png')]"
horizontal={true}
imgSrc="/photos/flags/france.png" >
 <h2 className="card-subtitle">Study In </h2>
<h2 className="card-title">FRANCE</h2>
<button className="btn btn-primary"><a href="/countries/france"> View Now </a></button>
</Card>
</div>


<div>
<Card className=" bg-[url('/photos/flags/bg.png')]"
horizontal={true}
imgSrc="/photos/flags/italy.png" >
 <h2 className="card-subtitle">Study In </h2>
<h2 className="card-title">ITALY</h2>
<button className="btn btn-primary"><a href="/countries/italy"> View Now </a></button>
</Card>
</div>

<div>
<Card className=" bg-[url('/photos/flags/bg.png')]"
horizontal={true}
imgSrc="/photos/flags/nz.png" >
 <h2 className="card-subtitle">Study In </h2>
<h2 className="card-title">NEWZELAND</h2>
<button className="btn btn-primary"><a href="/countries/nz"> View Now </a></button>
</Card>
</div>

<div >
<Card className=" bg-[url('/photos/flags/bg.png')]" 
horizontal={true}
imgSrc="/photos/flags/russia.png" >
 <h2 className="card-subtitle">Study In </h2>
<h2 className="card-title">RUSSIA</h2>
<button className="btn btn-primary"><a href="/mbbs/russia"> View Now </a></button>
</Card>
</div>


<div>
<Card className=" bg-[url('/photos/flags/bg.png')]"
horizontal={true}
imgSrc="/photos/flags/uk.png">
 <h2 className="card-subtitle ">Study In </h2>
<h2 className="card-title ">U K</h2>
<button className="btn btn-primary"><a href="/countries/uk"> View Now </a></button>
</Card>
</div>


</Slider>

{/* small Screen Flag Slider */}

<div className="md:hidden lg:hidden">

<Slider {...settings} >

<div >
<Avatar className="rounded-full text-white text-md "
  img="/photos/flags/nz.png" alt="Newzealand"
  size="xl">
<h2 className="card-subtitle">Study In</h2>
<h2 className="card-title">Australia</h2>
<button className="btn btn-primary"><a href="/mbbs/australia"> View Now </a></button>
</Avatar>
</div>

<div>
<Avatar className="rounded-full text-white text-md"
  img="/photos/flags/cadana.png" alt="canada"
  size="xl">
<h2 className="card-subtitle">Study In</h2>
<h2 className="card-title">CANADA</h2>
<button className="btn btn-primary"><a href="/mbbs/canada"> View Now </a></button>
</Avatar>
</div>

<div>
<Avatar className="rounded-full text-white text-md"
  img="/photos/flags/france.png" alt="France"
  size="xl">
<h2 className="card-subtitle">Study In</h2>
<h2 className="card-title">FRANCE</h2>
<button className="btn btn-primary"><a href="/mbbs/france"> View Now </a></button>
</Avatar>
</div>

<div>
<Avatar className="rounded-full text-white text-md"
  img="/photos/flags/italy.png" alt="Italy"
  size="xl">
<h2 className="card-subtitle">Study In</h2>
<h2 className="card-title">ITALY</h2>
<button className="btn btn-primary"><a href="/mbbs/italy"> View Now </a></button>
</Avatar>
</div>

<div>
<Avatar className="rounded-full text-white text-md"
  img="/photos/flags/nz.png" alt="NEWzealand"
  size="xl">
<h2 className="card-subtitle">Study In</h2>
 <h2 className="card-title">NEW ZEALAND</h2>
<button className="btn btn-primary"><a href="/mbbs/nz"> View Now </a></button>
</Avatar>
</div>


<div>
<Avatar className="rounded-full text-white text-md"
  img="/photos/flags/russia.png" alt="russia"
  size="xl">
<h2 className="card-subtitle">Study In</h2>
<h2 className="card-title">RUSSIA</h2>
<button className="btn btn-primary"><a href="/mbbs/russia"> View Now </a></button>
</Avatar>
</div>

<div>
<Avatar className="rounded-full text-white  text-md"
  img="/photos/flags/uk.png" alt="Uk"
  size="xl">
<h2 className="card-subtitle">Study In</h2>
<h2 className="card-title">UK</h2>
<button className="btn btn-primary"><a href="/mbbs/uk"> View Now </a></button>
</Avatar>
</div>

</Slider>

</div>
</div>

 
    );
  }
