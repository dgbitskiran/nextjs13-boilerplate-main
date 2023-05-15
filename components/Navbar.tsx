"use client"
import { Accordion , Card, Avatar} from "flowbite-react"
import Header from "./Header"
export default function Navbar() {
  return (
    <>    
{/*Nave Bar */} 
{/*---------------------------------------------------------------------------------------------------*/} 
{/*Logo and 22 years Banners Start , 22years banner hidden small screen */} 

<Header/>



{/*Logo and 22 years Banners end */} 
{/*------------------------------------------------------------------------------------------------------  */} 
{/*Small Device  */} 

 <div className="navbar bg-blue-800 rounded-lg">
<div className="navbar-start  ">   
  <div className="dropdown ">
    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15" fill="red" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     Menu
     
    </label>

      <ul tabIndex={0} className="  menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-70 font-medium w-80" >
      
      <li className="text-white bg-blue-800"><a>ABOUT US</a></li>
      <li className="text-white bg-blue-800"><a href="#">HOME</a></li>

      <Accordion   alwaysOpen={false} className="text-white">

      <Accordion.Panel>
      <Accordion.Title className="bg-blue-800">
        STUDY ABROAD
      </Accordion.Title>
      <Accordion.Content className="bg-blue-400 p-2" >
      <ul>
          <li><a href="/countries/usa">Study In USA</a></li>
          <li><a href="/countries/canada">Study In Canada</a></li>
          <li><a href="/countries/usa">Study In Australia</a></li>
          <li><a href="/countries/usa">Study In Newzealand</a></li>
          <li><a href="/countries/uk">Study In UK</a></li>
        </ul>
        </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
      <Accordion.Title className=" bg-blue-800">
        STUDY EUROPE
      </Accordion.Title>
      <Accordion.Content className="bg-blue-400 p-2">
      <ul>
      <li><a href="/countries/germany">Study In Germany</a></li>
        <li><a href="/countries/france">Study In France</a></li>
        <li><a href="/countries/sweden">Study In Sweden</a></li>
        <li><a href="/countries/italy">Study In Italy</a></li>
        <li><a href="/countries/norway">Study In Norway</a></li>
        <li><a href="/countries/belgium">Study In Belgium</a></li>
        <li><a href="/countries/netherland">Study In Netherland</a></li>
        <li><a href="/countries/switzerland">Study In Switzerland</a></li>
        <li><a href="/countries/finland">Study In Finland</a></li>
        <li><a href="/countries/poland">Study In Poland</a></li>
        <li><a href="/countries/latvia">Study In Latvia</a></li>
        <li><a href="/countries/lithuania">Study In Lithuania</a></li>
        <li><a href="/countries/malta">Study In Malta</a></li>
        <li><a href="/countries/hungary">Study In Hungary</a></li>
         
        </ul>
        </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
      <Accordion.Title className=" bg-blue-800">
        STUDY EUROPE
      </Accordion.Title>
      <Accordion.Content className="bg-blue-400 p-2">
      <ul>
          <li><a  href="/coaching/gre">GRE</a></li>
          <li><a  href="/coaching/gmat">GMAT</a></li>
          <li><a  href="/coaching/ielts">IELTS</a></li>
          <li><a  href="/coaching/tofel">TOFEL</a></li>
          <li><a  href="/coaching/sat">SAT</a></li>
          <li><a  href="/coaching/pte">PTE</a></li>
        </ul>
        </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
      <Accordion.Title className=" bg-blue-800">
        STUDY MBBS
      </Accordion.Title>
      <Accordion.Content className="bg-blue-400 p-2">
      <ul>
          <li><a href="/coaching/russia">MBBS In Russia</a></li>
          <li><a href="/coaching/europe">MBBS In Europe</a></li>
          <li><a href="/coaching/georgia">MBBS In Georgia</a></li>
          <li><a href="/coaching/ukrain">MBBS In Ukraine</a></li>
          <li><a href="/coaching/kyrgyzstan">MBBS In Kyrgyzstan</a></li>
          <li><a href="/coaching/arminia">MBBS In Arminia</a></li>
        </ul>
        </Accordion.Content>
        </Accordion.Panel>
        </Accordion>
      <li className="text-white bg-blue-800"><a>REGISTRATION</a></li>
  
      <li className="text-white bg-blue-800"><a href="/services">SERVICES</a></li>
      </ul>
      

      </div>
      </div>

 {/*  22years banner only Small Screen Start*/}

<div className="lg:hidden md:hidden ">
<a href="#">
<Avatar className="rounded-full text-white text-md "
  img="/photos/22years/121.png" alt="Facebook"
  size="">
</Avatar></a>
</div>

{/*Small Screen  22years banner End*/}
{/*-----------------------------------------------------------*/}    
{/*Md Screen only Social Media Icons Start*/}

<div className="lg:hidden sr-only sm:not-sr-only ">

<div className="grid grid-cols-3  gap-1 ">
<a href="#">
<Avatar className="rounded-full text-white text-md "
  img="/photos/socialmedia/fb.png" alt="Facebook"
  size="sm">
    <h2>Facebook</h2>
</Avatar></a>

<a href="#">
<Avatar className="rounded-full text-white text-md"
  img="/photos/socialmedia/tw.png" alt="Twiter"
  size="sm">
   <h2>Twiter</h2>
</Avatar></a>

<a href="#">
<Avatar className="rounded-full text-white text-md"
  img="/photos/socialmedia/insta.png" alt="Instagramm"
  size="sm">
       <h2>Instagram</h2>
</Avatar></a>

</div>
</div>
{/*Md Screen only Social Media Icons End*/}
{/*-------------------------------------------------------------------------------------------------------------*/}    
{/*Large Device Nav  Bar Start */} 

<div className="navbar-center hidden lg:flex text-white z-40 ">

  <ul className="menu menu-horizontal px-1 font-medium  ">
  
  <li className="hover:bg-white hover:text-sky-800 rounded-lg "><a href="/about">ABOUT US</a></li>
  <li className="hover:bg-white hover:text-sky-800 rounded-lg "><a href="/services"> SERVICES</a></li>

      <li className="hover:bg-white hover:text-sky-800 rounded-lg ">
      <a className="justify-between">
      STUDY ABROAD
      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
      </a>
     
      <ul className=" bg-blue-800 text-white">
        <li><a href="/countries/usa">Study In USA</a></li>
        <li><a href="/countries/canada">Study In Canada</a></li>
        <li><a href="/countries/australia">Study In Australia</a></li>
        <li><a href="/countries/nz">Study In Newzealand</a></li>
        <li><a href="/countries/uk">Study In United Kingdom</a></li>
      </ul>
      </li>   
      <li className="hover:bg-white hover:text-sky-800 rounded-lg ">
        
      <a className="justify-between">
      STUDY EUROPE

      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
      </a>

      <ul className=" bg-blue-800 text-white">

        <li><a href="/countries/germany">Study In Germany</a></li>
        <li><a href="/countries/france">Study In France</a></li>
        <li><a href="/countries/sweden">Study In Sweden</a></li>
        <li><a href="/countries/italy">Study In Italy</a></li>
        <li><a href="/countries/norway">Study In Norway</a></li>
        <li><a href="/countries/belgium">Study In Belgium</a></li>
        <li><a href="/countries/netherland">Study In Netherland</a></li>
        <li><a href="/countries/switzerland">Study In Switzerland</a></li>
        <li><a href="/countries/finland">Study In Finland</a></li>
        <li><a href="/countries/poland">Study In Poland</a></li>
        <li><a href="/countries/latvia">Study In Latvia</a></li>
        <li><a href="/countries/lithuania">Study In Lithuania</a></li>
        <li><a href="/countries/malta">Study In Malta</a></li>
        <li><a href="/countries/hungary">Study In Hungary</a></li>
       
        
      </ul>
      </li>   

      <li className="hover:bg-white hover:text-sky-800 rounded-lg ">
      <a className="justify-between">
      STUDY MBBS
      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
      </a>
      <ul className=" bg-blue-800 text-white">
        <li><a href="/mbbs/russia">MBBS In Russia</a></li>
        <li><a href="/mbbs/europe">MBBS In Europe</a></li>
        <li><a href="/mbbs/georgia">MBBS In Georgia</a></li>
        <li><a href="/mbbs/ukrain">MBBS In Ukraine</a></li>
        <li><a href="/mbbs/kyrgyzstan">MBBS In Kyrgyzstan</a></li>
        <li><a href="/mbbs/arminia">MBBS In Arminia</a></li>
      </ul>
      </li>   

      <li className="hover:bg-white hover:text-sky-800 rounded-lg ">
      <a className="justify-between">
      COACHING
      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
      </a>
      <ul className=" bg-blue-800 text-white">
        <li> <a  href="/coaching/gre"> GRE </a> </li>
        <li> <a  href="/coaching/gmat"> GMAT </a> </li>
        <li> <a  href="/coaching/ielts"> IELTS </a> </li>
        <li> <a  href="/coaching/tofel"> TOFEL </a> </li>
        <li> <a  href="/coaching/sat"> SAT </a> </li>
        <li> <a  href="/coaching/pte"> PTE </a> </li>
      </ul>
      </li> 

      <li className="hover:bg-white hover:text-sky-800 rounded-lg "><a>REGISTRATION</a></li>

      <li className="hover:bg-white hover:text-sky-800 rounded-lg "><a>HOME</a></li>

  </ul>
</div>
{/*Large Device Nav  Bar End */} 
{/*-------------------------------------------------------------------------------------- */} 
</div>
{/*Navbar End */} 

    </>
  )
}



