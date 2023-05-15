
"use client"
import { Card,} from "flowbite-react"


export default function Sidebar1() {
    return (
      <>
      

<div>
<Card className="items-center text-center  m-5 w-full">
<h1 className="text-red-500 text-md mb-3 text-4xl "><b>WHY P2P?</b></h1>
<div className=" grid lg:grid-cols-2  lg:gap-10 ">

<img  src="/photos/iconphots/uni.png" alt="France" className="rounded-xl" /> 
<h1 className="text-lg ..."><strong>500+</strong> Universities</h1>

<img  src="/photos/iconphots/clog.png" alt="France" className="rounded-xl" />
<h1 className="text-lg ..."><strong>1512+</strong> <br/>Colleges</h1>

<img  src="/photos/iconphots/cour.png" alt="France" className="rounded-xl" />
<h1 className="text-lg ..."><strong>132+</strong> Courses</h1>

<img  src="/photos/iconphots/stude.png" alt="France" className="rounded-xl" />
<h1 className="text-lg ..."><strong>20000+</strong><br/>StudentsPlaced</h1>
 
  </div>
</Card>

</div>
</>
    )
}