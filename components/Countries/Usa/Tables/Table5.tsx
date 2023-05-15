"use client"
import { Table } from "flowbite-react"


export default function Table5() {
    return (
        <>


<Table>
  <Table.Head>
    <Table.HeadCell>
    School
    </Table.HeadCell>
    <Table.HeadCell>
    Tuition fees in USD (indicative)
    </Table.HeadCell>

  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      English language studies
      </Table.Cell>
      <Table.Cell>
      $700 to $2,000 a month
      </Table.Cell>
    </Table.Row>

    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Community colleges  
      </Table.Cell>
      <Table.Cell>
      $6,000 to $20,000 per year
      </Table.Cell>
   
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Undergraduate
      bachelor degree
      </Table.Cell>
      <Table.Cell>
      $20,000 to $40,000 per year
      </Table.Cell>  
    </Table.Row>

   
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Graduate programs
      </Table.Cell>
      <Table.Cell>
      $20,000 to $45,000 per year
      </Table.Cell>  
    </Table.Row>


    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Doctoral degree
      </Table.Cell>
      <Table.Cell>
      $28,000 to $55,000 per year
      </Table.Cell>  
    </Table.Row>

  </Table.Body>
</Table>

</>
    )
}