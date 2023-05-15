"use client";
import {Avatar , Card} from "flowbite-react";

export default function whyp2p() {
    return (
      <>


<div className="md:container md:mx-auto  ">

<h1 className="text-red-500 text-md mb-3 text-xl text-center "><b>Why Choose p2p Overseasfor Your Coaching Preps?</b></h1>
<h5 className="text-gray-500 text-md mb-3 text-md text-center "><b>We offer the best learning experience to our students</b></h5>
<div className=" grid lg:grid-cols-5   m-10 gap-5 ">


<div>
  <Card className="bg-gradient-to-r from-red-200 to-blue-300">
    <div className="flex flex-col items-center pb-2">
      <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src="/photos/coaching/dvd.png" alt="Course DVD" />
      <h5 className=" text-xl font-medium text-gray-900 dark:text-white">
      Free Class Power DVD & Study Material
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      Get Course Power DVD Worth ₹7500 which includes Audio Lectures, 30+ eBook, 130+ Tests & More.
      </span>
    </div>
  </Card>
</div>


<div>
<Card className="bg-gradient-to-r from-blue-200 to-yellow-200">
    <div className="flex flex-col items-center pb-6">
      <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src="/photos/coaching/moc.png" alt="Course DVD" />
      <h5 className=" text-xl font-medium text-gray-900 dark:text-white">
      30 Mock Tests & Free Official Guide (OG)
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      We Take Mock Tests as per Latest Pattern with Instant Doubt Clearance.
      </span>
    </div>
  </Card>
</div>


<div >
<Card className="bg-gradient-to-r from-green-200 to-blue-300">
    <div className="flex flex-col items-center pb-10">
      <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src="/photos/coaching/ass.png" alt="Course DVD" />
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">
      Assistance with Application Process
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      We Offer the Highest Number of Lecture Hours to Our Students.
      </span>
    </div>
  </Card>
</div>



<div>
<Card className="bg-gradient-to-r from-red-200 to-gray-200">
    <div className="flex flex-col items-center pb-10">
      <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src="/photos/coaching/time.png" alt="Course DVD" />
      <h5 className=" text-xl font-medium text-gray-900 dark:text-white">
      85 Hours of GRE Lectures
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      We Offer the Highest Number of Lecture Hours to Our Students.
      </span>
    </div>
  </Card>
</div>


<div >
<Card className="bg-gradient-to-r from-red-200 to-yellow-200">
    <div className="flex flex-col items-center pb-10">
      <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src="/photos/coaching/pt.png" alt="Course DVD" />
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">
      Personal Training Option Available
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
      We Offer Personal Attention & Solve All the Doubts During Our Lectures.
      </span>
    </div>
  </Card>
</div>

</div>
</div>


</>
    )
  }