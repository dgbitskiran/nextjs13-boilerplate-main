"use client"
import { Table } from "flowbite-react"


export default function Table7() {
    return (
        <>


<Table>
  <Table.Head>
    <Table.HeadCell>
    Steps
    </Table.HeadCell>
    <Table.HeadCell>
   Process
    </Table.HeadCell>
    <Table.HeadCell>
    Description
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Step 1
      </Table.Cell>
      <Table.Cell>
      
Step 1	SEVIS fee and I-20 form collection
      </Table.Cell>
      <Table.Cell>
      Once you pay the SEVIS fee, you are given an I-20 form from your new school or college. Duly fill the form and bring along for your F-1 interview.
      </Table.Cell>
     
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Step 2
      </Table.Cell>
      <Table.Cell>
      VISA fee and form collection
      </Table.Cell>
      <Table.Cell>
    	Pay your visa fee at the designated bank and collect the visa form. Duly fill the form and bring along for your interview.
      </Table.Cell>
   
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Step 3
      </Table.Cell>
      <Table.Cell>
      VISA interview
      </Table.Cell>
      <Table.Cell>
      Schedule a visa interview with the US embassy in your country. The waiting time may vary depending on the visa type. Once you complete the interview successfully, you’ll receive your visa 120 days in advance.
      </Table.Cell>  
    </Table.Row>

  </Table.Body>
</Table>

</>
    )
}