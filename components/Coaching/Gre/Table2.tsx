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
    Score Scale
    </Table.HeadCell>

  </Table.Head>

  <Table.Body className="divide-y">
    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Verbal Reasoning
      </Table.Cell>
      <Table.Cell>
      130 - 170 scale, in 1 point increments
      </Table.Cell>

     
    </Table.Row>
    <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Quantitative Reasoning
      </Table.Cell>
      <Table.Cell>
      130 - 170 scale, in 1 point increments
      </Table.Cell>

   
    </Table.Row>
    <Table.Row className="dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Analytical Writing
      </Table.Cell>
      <Table.Cell>
      0-6 score level, in half-point increments
      </Table.Cell>
    </Table.Row>

  </Table.Body>
</Table>

</>
    )
}