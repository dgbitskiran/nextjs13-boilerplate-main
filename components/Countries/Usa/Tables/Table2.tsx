"use client"
import { Table } from "flowbite-react"


export default function Table2  () {
    return (
        <>


<Table>
  <Table.Head>
    <Table.HeadCell>
    Type of university
    </Table.HeadCell>
    <Table.HeadCell>
    Description
    </Table.HeadCell>

  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Ivy League
      </Table.Cell>
      <Table.Cell>
      Ivy League, which is actually a sports conference of eight private colleges in the Northeast includes some of the oldest 
      American institutions. These are perceived to be some of the most 
      esteemed places to study and therefore extremely competitive for admissions.
      </Table.Cell>
    </Table.Row>

    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Public Ivies
      </Table.Cell>
      <Table.Cell>
      Group of over 30 state-funded or public universities in the US. Although this is not an official classification of universities, 
      these universities have earned their reputation and are considered prestigious and academically rigorous. 
      Education costs are slightly lower than the Ivy League universities.
      </Table.Cell>
   
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Liberal Arts Philosophy
      </Table.Cell>
      <Table.Cell>
      This philosophy promotes a well-rounded academic education that develops the overall thought process of students. The courses 
      begin with a wide variety of courses in humanities, languages, arts and the social sciences before specialising in a particular field. The primary focus for faculty is on undergraduate teaching rather than research, with a small student population and high student to faculty ratio.
      </Table.Cell>  
    </Table.Row>

    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Specialist institutions
      </Table.Cell>
      <Table.Cell>
      universities and institutes that specialise in providing degrees in a certain field such a degrees in music, visual and applied arts, etc.
      </Table.Cell>
    </Table.Row>

    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Land Grant Colleges and Universities
      </Table.Cell>
      <Table.Cell>
      Large, publicly-funded universities
      </Table.Cell>
    </Table.Row>

    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Research Intensive Institutions
      </Table.Cell>
      <Table.Cell>
      Universities offering the highest level of research and are a good starting point for students seeking doctoral degree.
      </Table.Cell>
    </Table.Row>


  </Table.Body>
</Table>

</>
    )
}