"use client"
import { Table } from "flowbite-react"


export default function Table1() {
    return (
        <>


<Table>
  <Table.Head className="bg-gradient-to-r from-blue-500 to-pink-500 text-white">
    <Table.HeadCell>
    Section
    </Table.HeadCell>
    <Table.HeadCell>
    Number of Questions
    </Table.HeadCell>
    <Table.HeadCell>
    Time
    </Table.HeadCell>
  </Table.Head>

  <Table.Body className="divide-y">
    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Analytical WritingAssessment(One section with two separately timed tasks)
      </Table.Cell>
      <Table.Cell>
      'Analysis of an Issue' task and 'Analysis of an argument' task
      </Table.Cell>
      <Table.Cell>
      30 minutes per task
      </Table.Cell>
     
    </Table.Row>
    <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Verbal Reasoning(Two sections)
      </Table.Cell>
      <Table.Cell>
      20 questions per section
      </Table.Cell>
      <Table.Cell>
      30 minutes per section
      </Table.Cell>
   
    </Table.Row>
    <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Quantitative Reasoning(Two sections)
      </Table.Cell>
      <Table.Cell>
      20 questions per section
      </Table.Cell>
      <Table.Cell>
      35 minutes per section
      </Table.Cell>  
    </Table.Row>

    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Experimental/Research
      </Table.Cell>
      <Table.Cell>
      Varies
      </Table.Cell>
      <Table.Cell>
      Varies
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>

</>
    )
}