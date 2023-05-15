"use client"
import { Table } from "flowbite-react"


export default function Table1() {
    return (
        <>
<div className="m-10">
<h1 className="text-red-500 text-md mb-3 text-xl text-center "><b>TOEFL iBT Test Sections</b></h1>
<Table >
  <Table.Head className="bg-gradient-to-r from-blue-500 to-pink-500 text-white">
    <Table.HeadCell>
    Section
    </Table.HeadCell>
    <Table.HeadCell>
    Time Limit
    </Table.HeadCell>
    <Table.HeadCell>
    Questions
    </Table.HeadCell>
    <Table.HeadCell>
    Tasks
    </Table.HeadCell>
  </Table.Head>

  <Table.Body className="divide-y">
    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Reading
      </Table.Cell>
      <Table.Cell>
    	60–80 minutes
      </Table.Cell>
      <Table.Cell>
      36–56 questions
      </Table.Cell>
      <Table.Cell>
      Read 3 or 4 passages from academic texts and answer questions.
      </Table.Cell>
     
    </Table.Row>
    <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Listening
      </Table.Cell>
      <Table.Cell>
      60–90 minutes
      </Table.Cell>
      <Table.Cell>
      34–51 questions
      </Table.Cell>
      <Table.Cell>
      Listen to lectures, classroom discussions and conversations, then answer questions.
      </Table.Cell>
   
    </Table.Row>
    <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Break
      </Table.Cell>
      <Table.Cell>
      10 minutes
      </Table.Cell>
      <Table.Cell>
    -
      </Table.Cell>  
      <Table.Cell>
     -
      </Table.Cell>
    </Table.Row>

    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Speaking
      </Table.Cell>
      <Table.Cell>
      20 minutes
      </Table.Cell>
      <Table.Cell>
      6 tasks
      </Table.Cell>
      <Table.Cell>
      Express an opinion on a familiar topic; speak based on reading and listening tasks.
      </Table.Cell>
    </Table.Row>

    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Writing
      </Table.Cell>
      <Table.Cell>
      50 minutes
      </Table.Cell>
      <Table.Cell>
      2 tasks
      </Table.Cell>
      <Table.Cell>
      Write essay responses based on reading and listening tasks; support an opinion in writing.
      </Table.Cell>
    </Table.Row>


  </Table.Body>
</Table>
</div>
</>
    )
}