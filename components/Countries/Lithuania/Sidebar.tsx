"use client"
import { Card, Accordion} from "flowbite-react"


export default function Sidebar() {
    return (
      <>
      
<Card className="items-center text-center w-full m-5">

<Accordion   alwaysOpen={false} >
  <Accordion.Panel>
    <Accordion.Title className="text-red-800">
        Videos
      </Accordion.Title>
      <Accordion.Content >
      <iframe className="w-full mb-5"src="https://www.youtube.com/embed/1XOhtuio4lQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <iframe className="w-full mb-5"src="https://www.youtube.com/embed/j5HKGz61Xao" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <iframe className="w-full mb-5"src="https://www.youtube.com/embed/FrXOkrJHIgc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        </Accordion.Content>
        </Accordion.Panel>

       
  <Accordion.Panel className="w-full" >
    <Accordion.Title className="text-red-800 ">
        Gallery
      </Accordion.Title>
      <Accordion.Content>
      <img  src="/photos/uk/uk1.png" alt="USA" className="rounded-xl " />   <br/>
      <img   src="/photos/uk/uk2.png" alt="USA" className="rounded-xl " /> 
        </Accordion.Content>
        </Accordion.Panel>
      

      
  <Accordion.Panel className="w-full">
    <Accordion.Title className="text-red-800 ">
        Courses
      </Accordion.Title>
      <Accordion.Content >
      <ul className="list-disc  text-slate-500  text-left">
    <li>All Engineering Streams</li>
    <li>Science & Technology</li>
    <li> BBA, BBM/MBA</li>
    <li> Fashion Studies</li>
    <li>Chemistry/Physics/Mathematics</li>
    <li> Health Care Management/Medicine</li>
    <li> Veternary/Agriculture</li>
    <li> Hotel Management/Tourism</li>
    <li> Fine Arts / Law</li>
    <li> PhD</li>
</ul>
        </Accordion.Content>
        </Accordion.Panel>
        </Accordion>

  
        </Card>
        </>
    )
}