"use client";
import {Dropdown, Card} from "flowbite-react";



export default function Studyabroad() {
    return (
      <>




{/* Free Education  lg, md device */}


<div className=" sr-only sm:not-sr-only rounded-md  ">
<h1 className="text-white text-md  text-2xl text-center  m-5"><b>STUDY IN ABROAD</b></h1>
<div className="grid lg:grid-cols-4 md:grid-cols-2 place-items-center gap-5 m-5">


<div className="max-w-sm">
  <Card imgSrc="photos/studyabroad/usa.png">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    STUDY USA
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    CONTENT
    </p>
  </Card>
</div>

<div className="max-w-sm">
  <Card imgSrc="photos/studyabroad/uk.png">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    STUDY UNITED KINGDOM
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    CONTENT
    </p>
  </Card>
</div>


<div className="max-w-sm">
  <Card imgSrc="photos/studyabroad/canada.png">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    STUDY CANADA
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    CONTENT
    </p>
  </Card>
</div>


<div className="max-w-sm">
  <Card imgSrc="photos/studyabroad/aus.png">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    STUDY AUSTRALIA
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
   CONTENT
    </p>
  </Card>
</div>




</div>




</div>




{/* STUDY ABROAD  small device  */}


<div className="max-w-sm m-3 lg:hidden md:hidden ">
  <Card className="bg-sky-200">
    <div className="mb-4 flex items-center justify-between">
      <h5 className="text-xl font-bold leading-none text-gray-900 text-center">
      STUDY ABROAD
      </h5>
     
    </div>
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                STUDY ABROAD
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              single line comment about country
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <a href="#">MoreInfo</a>
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              STUDY ABROAD
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              single line comment about country
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <a href="#">MoreInfo</a>
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael image"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              STUDY ABROAD
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              single line comment about country
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <a href="#">MoreInfo</a>
            </div>
          </div>
        </li>
     
        <li className="pt-3 pb-0 sm:pt-4">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Thomas image"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              STUDY ABROAD
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                single line comment about country
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <a href="#">MoreInfo</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Card>
</div>



</>
    )
  }