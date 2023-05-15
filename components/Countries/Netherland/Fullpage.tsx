"use client"
import Tab from "./Tab"
import Topunivercity from "./Topunivercity"
import Sidebar from "./Sidebar"
import Slider from "./Slider"
import Sidebar1 from "../Sidebar1"


export default function Fullpage() {
    return (
        <>
<div className="md:container md:mx-auto">

<Slider/>  

<div className=" grid lg:grid-cols-4 m-10  ">
<div className="grid col-span-3  touch-auto bg-base-100  m-5 ">.

     
<Tab/>
<br/>

<Topunivercity/>
</div>

<div>
<Sidebar1/>
<br/>
<Sidebar/>
</div>


 </div>
 </div>


        </>
    )
}
