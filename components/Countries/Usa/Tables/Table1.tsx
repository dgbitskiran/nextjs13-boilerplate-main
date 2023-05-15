"use client"
import { Table } from "flowbite-react"


export default function Table1() {
    return (
        <>


<Table>
  <Table.Head>
    <Table.HeadCell>
     Qualification
    </Table.HeadCell>
    <Table.HeadCell>
     Duration
    </Table.HeadCell>
    <Table.HeadCell>
    Description
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Associate degree
      </Table.Cell>
      <Table.Cell>
      2 years
      </Table.Cell>
      <Table.Cell>
      Job oriented programs that allow a graduate to launch a career, it is also equivalent to first two years of a 4-year bachelor's degree
      </Table.Cell>
     
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Bachelor's degree	
      </Table.Cell>
      <Table.Cell>
      3 - 4 years
      </Table.Cell>
      <Table.Cell>
      Undergraduate degree that includes core courses, major, minor and elective. The four years are known as Freshman, Sophomore, Junior and Senior.
      </Table.Cell>
   
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Master's degree (Professional)
      </Table.Cell>
      <Table.Cell>
      1 to 3 years
      </Table.Cell>
      <Table.Cell>
      Leads students from first degree to particular profession; duration depends on field of study
      </Table.Cell>  
    </Table.Row>

    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Master's degree (Academic)
      </Table.Cell>
      <Table.Cell>
      2 years
      </Table.Cell>
      <Table.Cell>
      Generally awarded in traditional disciplines of humanities, arts, and science; may lead students to doctoral programs
      </Table.Cell>
    </Table.Row>

    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Doctorate or PhD
      </Table.Cell>
      <Table.Cell>
      5 to 8 years
      </Table.Cell>
      <Table.Cell>
      Completed under the supervision of faculty advisor, PhD is awarded on completion of dissertation and successful 
      defence before a panel of faculty members
      </Table.Cell>
    </Table.Row>

  </Table.Body>
</Table>

</>
    )
}