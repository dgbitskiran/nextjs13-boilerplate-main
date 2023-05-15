"use client"
import { Avatar, Card} from "flowbite-react";


export default function Footer() {
    return (
      <>

{/* Footer*/}
<footer className="footer p-10 bg-blue-900 text-base-content class=flex justify-center sr-only sm:not-sr-only ">
 
{/*Large  Screen footer Start*/}

<div className="grid lg:grid-cols-4 lg:gap-20 md:grid-cols-4 md:p-5 text-white">



<div>
<Card className="bg-white">
<img src="/photos/logo.png"className=" h-20"alt="p2plogo"/>
</Card>

<ul className="mt-5 ">
<li><a className="link link-hover">Services</a></li>
<li><a className="link link-hover">Contact Us</a></li>
<li><a className="link link-hover">Registration</a></li>
<li><a className="link link-hover">Why Study Abroad</a></li>
<li><a className="link link-hover">Where To Study Abroad</a></li>
<li><a className="link link-hover">Testmonials</a></li>
<li><a className="link link-hover">UG Studies</a></li>
<li><a className="link link-hover">Post Graduation</a></li>
<li><a className="link link-hover">Masters</a></li>
<li><a className="link link-hover">Popular Courses</a></li>
</ul>
</div>

<div>
  <ul>
    <span className="footer-title">Study Destinations</span> 
    <li><a className="link link-hover">Study in UK</a> </li>
    <li><a className="link link-hover">Study in USA</a> </li>
    <li><a className="link link-hover">Study in Canada</a> </li>
    <li><a className="link link-hover">Study in Australia</a></li>
    <li><a className="link link-hover">Study in Newzealand</a></li>
    <li><a className="link link-hover">Study in Singapore</a></li>
    <li><a className="link link-hover">Study in Ireland</a></li>
    <li><a className="link link-hover">Study in France</a></li>
    <li><a className="link link-hover">Study in Germany</a></li>
    <li><a className="link link-hover">Study in Switzerland</a></li>
    <li><a className="link link-hover">Study in Dubai</a></li>
    <li><a className="link link-hover">Study in Spain</a></li>
    <li><a className="link link-hover">Study in Malaysia</a></li>
    <li><a className="link link-hover">Study in Russia</a></li>
    <li><a className="link link-hover">Study in Italy</a></li>  
    </ul>
  </div> 

  <div>
  <ul>
    <span className="footer-title ">Useful Links</span> 
    <li><a className="link link-hover">University Application Forms</a> </li>
    <li><a className="link link-hover">Cost Of Study</a> </li>
    <li><a className="link link-hover">Why Study in UK</a> </li>
    <li><a className="link link-hover">Write A Query / FAQ's</a> </li>
    <li><a className="link link-hover">Study Abroad Resources</a> </li>
    <li><a className="link link-hover">E-Brochure Download</a> </li>
    <li><a className="link link-hover">Study Destinations</a> </li>
    <li><a className="link link-hover">Student Scholarships</a> </li>
    <li><a className="link link-hover">New Age Courses</a> </li>
    <li><a className="link link-hover">Engineering</a> </li>
    <li><a className="link link-hover">Study MBBS Abroad</a> </li>
    <li><a className="link link-hover">Study Abroad Programs</a> </li>
    <li><a className="link link-hover">University Visits</a> </li>
    <li><a className="link link-hover">Media & Press</a> </li>
    <li><a className="link link-hover">Even</a>   </li>
    </ul>
  </div> 

  <div>
  <ul>
    <span className="footer-title">Student Services</span> 
    <li><a className="link link-hover">Test Preparation / Training</a> </li>
    <li><a className="link link-hover">Selecting Right University</a> </li>
    <li><a className="link link-hover">Visa Guidance</a> </li>
    <li><a className="link link-hover">Admission Guidance</a> </li>
    <li><a className="link link-hover">Career Counselling</a> </li>
    <li><a className="link link-hover">Academic Planning</a> </li>
    <li><a className="link link-hover">Scholarship Guidance</a> </li>
    <li><a className="link link-hover">Finance Guidance</a> </li>
    <li><a className="link link-hover">Travel Assistance</a> </li>
    <li><a className="link link-hover">Forex Assistance</a> </li>
    <li><a className="link link-hover">Make a Forex Payment</a> </li>
    <li><a className="link link-hover">Pre-Departure Guidance</a> </li>
    <li><a className="link link-hover">Post Landing Assistance</a> </li>
    <li><a className="link link-hover">Student Registration</a> </li>
    <li><a className="link link-hover">Online Paymen</a></li>
    </ul>


</div>
 </div>


</footer>       

<footer className="footer px-10 py-10 border-t bg-blue-900 text-base-content border-base-300 justify-center">

  
<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 sr-only sm:not-sr-only">

<div className="card w-full h-full bg-gradient-to-r from-green-400  to-blue-400  text-white ">
<Avatar className="  rounded-full text-white text-lg"
  img="/photos/socialmedia/cons.png"
  size="lg">
 <h2>Expert Guidence.</h2> 
</Avatar>
<p className="text-white text-center">21 Years of Education Consulting Excellence.</p>
</div>


<div className="card w-full h-full bg-gradient-to-r from-yellow-400  to-pink-400 text-white ">
<Avatar className="rounded-full text-white text-lg"
  img="/photos/socialmedia/support.png"
  size="lg">
 <h2>24/7 customer support.</h2> 
</Avatar>
<p className="text-white text-center">Qualified professionals in the field of overseas education.</p>
</div>


<div className="card w-full h-full bg-gradient-to-r from-red-400  to-gray-400  text-white ">
<Avatar className="rounded-full text-white text-lg"
  img="/photos/socialmedia/visa.png"
  size="lg">
 <h2 >Highest visa success rate.</h2> 
</Avatar>
<p className="text-white text-center">We have best track record when it comes to student visas.</p>
</div>


<div className="card w-full h-full bg-gradient-to-r from-green-400  to-yellow-400 text-white ">
<Avatar className=" rounded-full text-white text-lg"
  img="/photos/socialmedia/pay.png"
  size="lg">
 <h2>Secure online payment.</h2> 
</Avatar>
<p className="text-white text-center">Online Student Registration with UPI Payment Option</p>
</div>


</div> 


{/*Large Screen End footer*/}

{/*-------------------------------------------------*/}

{/*small Screen Footer Features */}
<div className="grid grid-cols-1 lg:hidden md:hidden">
  
<Avatar className="  rounded-full text-white text-lg"
  img="/photos/socialmedia/cons.png"
  size="lg">
 <h2>Expert Guidence.</h2> 
</Avatar>

<Avatar className="rounded-full text-white text-lg"
  img="/photos/socialmedia/support.png"
  size="lg">
 <h2>24/7 customer support.</h2> 
</Avatar>

<Avatar className="rounded-full text-white text-lg"
  img="/photos/socialmedia/visa.png"
  size="lg">
 <h2 >Highest visa success rate.</h2> 
</Avatar>

<Avatar className=" rounded-full text-white text-lg"
  img="/photos/socialmedia/pay.png"
  size="lg">
    
 <h2>Secure online payment.</h2> 
</Avatar>

<h2 className="text-white text-md  bg-blue-800 rounded-full p-2 "><b>GET SOCIAL MEDIA </b></h2>
<div className="grid grid-cols-4 gap-4  item-center md:gap-10">
<Avatar className="  rounded-full text-white text-lg  "
  img="/photos/socialmedia/fb.png" alt="p2plogo"
  size="sm">
   
</Avatar>

<Avatar className="rounded-full text-white text-lg"
  img="/photos/socialmedia/tw.png" alt="p2plogo"
  size="sm">
   
</Avatar>

<Avatar className="rounded-full text-white text-lg"
  img="/photos/socialmedia/insta.png" alt="p2plogo"
  size="sm">
      
</Avatar>
</div>
</div>

{/*small Screen Footer Features*/}
</footer>
{/*Footer End*/}




</>
    )
}