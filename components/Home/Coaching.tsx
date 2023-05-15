"use client";
import {Dropdown, Carousel} from "flowbite-react";



export default function Coaching() {
    return (
      <>




{/* Free Education */}
<div className="bg-[url('/photos/bg2.png')] rounded-md">

<h1 className="text-red-500 text-md  text-2xl text-center mt-5 "><b>Online Coaching</b></h1>

<div className=" grid lg:grid-cols-2 grid-cols-1 ">


<div className=" text-slate-200 m-5 textcenter" >
<p >p2p Overseas, we believe in didactic teaching where our focus is not only limited to broadening IELTS knowledge among students but also focusing on their language and overall development that will help them stand confidently in foreign educational institutions.
  We provide the best learning experience to students may it be online or in-person.</p>
  <br/>
  <Dropdown
  label="Students obtaining for online studies"
  dismissOnClick={false}
>
  <Dropdown.Item>
  Regular batches
  </Dropdown.Item>
  <Dropdown.Item>
  Prompt checking
  </Dropdown.Item>
  <Dropdown.Item>
  Weekly speaking sessions
  </Dropdown.Item>
  <Dropdown.Item>
  Grammar assistance
  </Dropdown.Item>
  <Dropdown.Item>
  Module workshops
  </Dropdown.Item>
  <Dropdown.Item>
  A personal teacher-student touch
  </Dropdown.Item>
  <Dropdown.Item>
  Different activities to enhance learning
  </Dropdown.Item>
  <Dropdown.Item>
  Guidance about performance growth
  </Dropdown.Item>
  <Dropdown.Item>
  An abundance of practice material
  </Dropdown.Item>
  <Dropdown.Item>
  Individual performance management
  </Dropdown.Item>
</Dropdown>



</div>


<div className="h-56 sm:h-80 xl:h-80 2xl:h-[22rem] m-5 " >
  <Carousel slide={true}>
  <img src="/photos/coaching/gre.png"alt="..." />
  <img src="/photos/coaching/gmat.png"alt="..." />
  <img src="/photos/coaching/ielts.png"alt="..." />
  <img src="/photos/coaching/tofel.png"alt="..." />
  <img src="/photos/coaching/sat.png"alt="..." />
  <img src="/photos/coaching/pte.png"alt="..." />
  </Carousel>
</div>




</div>
</div>


</>
    )
  }