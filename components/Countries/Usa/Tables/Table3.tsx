"use client"
import { Table } from "flowbite-react"


export default function Table3() {
    return (
        <>


<Table>
  <Table.Head>
    <Table.HeadCell>
    Intake
    </Table.HeadCell>
    <Table.HeadCell>
    Duration
    </Table.HeadCell>

  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Fall Term
      </Table.Cell>
      <Table.Cell>
      From August to December
      </Table.Cell>
    </Table.Row>

    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Spring Term
      </Table.Cell>
      <Table.Cell>
      From January to April
      </Table.Cell>
   
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Summer Term
      </Table.Cell>
      <Table.Cell>
      From May to August
      </Table.Cell>  
    </Table.Row>

  </Table.Body>
</Table>

</>
    )
}