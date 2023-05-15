"use client"
import { Table } from "flowbite-react"


export default function Table1() {
    return (
        <>
<div className=" grid lg:grid-cols-2 m-10 gap-5 ">
<div>
<img  src="/photos/coaching/iltes2.png"alt="France" className="rounded-xl" /> 

</div>


<div>
<h1 className="text-red-500 text-md mb-3 text-xl text-center "><b>IELTS TIME SECTION</b></h1>
<Table >
  <Table.Head className="bg-gradient-to-r from-blue-500 to-pink-500 text-white">
    <Table.HeadCell>
    Section
    </Table.HeadCell>
    <Table.HeadCell>
    Time Limit
    </Table.HeadCell>
    
  </Table.Head>

  <Table.Body className="divide-y">
    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Reading
      </Table.Cell>
      <Table.Cell>
    	60 minutes
      </Table.Cell>
  

     
    </Table.Row>
    <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Listening
      </Table.Cell>
      <Table.Cell>
      30 minutes
      </Table.Cell>
      </Table.Row>
    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Speaking
      </Table.Cell>
      <Table.Cell>
      10-15 minutes
      </Table.Cell>
      </Table.Row>
    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Writing
      </Table.Cell>
      <Table.Cell>
      60 minutes
      </Table.Cell>
   
    </Table.Row>


  </Table.Body>
</Table>
</div>



</div>
</>
    )
}