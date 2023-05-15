"use client"
import { Table } from "flowbite-react"


export default function Table4() {
    return (
        <>


<Table>
  <Table.Head>
    <Table.HeadCell>
    S.No.
    </Table.HeadCell>
    <Table.HeadCell>
    Types of student visa
    </Table.HeadCell>
    <Table.HeadCell>
    Description
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      1
      </Table.Cell>
      <Table.Cell>
      F-1 Student Visa
      </Table.Cell>
      <Table.Cell>
      to study at an accredited US college or university or to study English at an English language institute
      </Table.Cell>
     
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      2
      </Table.Cell>
      <Table.Cell>
      J Exchange Visa
      </Table.Cell>
      <Table.Cell>
    	for participation in an exchange program, including high school and university study
      </Table.Cell>
   
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
    3
      </Table.Cell>
      <Table.Cell>
      M Student Visa
      </Table.Cell>
      <Table.Cell>
      for non-academic or vocational study or training in the US
      </Table.Cell>  
    </Table.Row>

  </Table.Body>
</Table>

</>
    )
}