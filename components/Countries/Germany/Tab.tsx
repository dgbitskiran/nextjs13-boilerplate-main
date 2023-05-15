"use client"
import { Tabs , Card  } from "flowbite-react";

import { FcReading , FcQuestions} from "react-icons/fc";
export default function Tab() {
    return (
        <>
      
          <Card>
        <Tabs.Group aria-label="Tabs with icons"   style="pills">
              
        <Tabs.Item  title="STUDY IN GERMANY"  icon={FcReading }  >

        <div className="p-3 mt-6 bg-white border max-h-screen  overflow-auto">

 <h1 className="text-red-400 text-md"><b>Unfold your potential in the land of ideas </b></h1>
<p className="text-slate-500">Germany is regarded as land of ideas. Germany consists of 16 states while the capital and 
 largest city is Berlin. With around 8.2 crores inhabitants, it is the most populous member state and the largest economy 
in the European Union. Germany is one of the major political powers of the European continent 
and a technological leader in many fields. The currency of Germany is Euro.
                            
 </p><br/>
 <h1 className="text-red-400 text-md"><b>Highlights</b></h1>
<ul  className="text-slate-500 list-disc list-inside">
<li>Germany has been named as the most supportive country for overseas students in the year 2011, 
  according to a survey conducted by British Council’s Global Gauge survey.</li>
<li>Between 2010 and 2013 German government is spending EUR 12 billion on education and research.</li>
<li>Germany has 47 universities among top 500 universities of the world in a recent ranking list compiled by Webometrics.</li>
<li>Germany has 14 universities among top 200 universities of the world in a recent ranking list compiled by Times Higher Education.</li>
<li>Germany ranked at 2nd place in Research & Development and has produced 102 noble laureates of the 
total 840 noble prizes issued till date.</li>
 </ul>
 <h1 className="text-red-400 text-md"><b>Features</b></h1>
 <ul  className="text-slate-500 list-disc list-inside">
<li>German universities are state; industry and public funded and offer the most cost 
  effective study options with no or nominal tuition fee.</li>
<li>Admissions in Germany are highly competitive as 250000 International students come to Germany for studies every year.</li>
<li>The degrees awarded by German universities are recognized all over the world with high global acceptance among industries 
  and academic institutions.</li>
<li>The standard of higher education in Germany is very high and education system ensures that student gains practical knowledge 
  and skills to address the challenges in industry and in R&D.</li>
<li>Studying in Germany often includes interaction with industry as German universities design Master program in collaboration with 
  companies operating in the same sector.</li>
<li>Close cooperation between German universities and industry benefits student to pursue internships in the industry which may lead to 
  further employment opportunities.</li>
<li>During studies, International students are allowed to work part-time for maximum of 20 hours per week and 
  90 days in a calendar year.</li>
<li>After completion of studies, International students have the right to stay in Germany up to 18 months.</li>
<li>Visa process is hassle-free with minimum required documents.</li>
<li>IELTS or TOEFL would be a prerequisite for admission as well as for visa.</li>
 </ul>

                            
                            
  
</div> 


        </Tabs.Item>

        <Tabs.Item  title="Why Australia"  icon={FcQuestions}  >

        <div className="p-3 mt-6 bg-white border max-h-screen  overflow-auto">                  
        <h1 className="text-red-400 text-md"><b>Employment & Job Market</b></h1>
        <ul  className="text-slate-500 list-disc list-inside">
        <li>According to latest Economic forecast, German economy is forecast to grow 3.3% in 
            2011 and employment is expected to expand by 4,90,000.</li>
        <li>Of the Fortune global 500 companies, 37 are headquartered in Germany.</li>
        <li>Germany is India’s most important EU business partner especially for Machinery, Automobiles, 
          Chemical, Electric products as well as IT.</li>
          <li>Some of the globally acclaimed companies from Germany are SAP Labs, Allianz, Adidas, Bosch, 
            Daimler-Benz, Audi, Bayer, Siemens, Volkswagen, E.ON, Deutsche Bank, Porsche, BMW, Lufthansa, Henkel, BASF and RWE.</li>

        </ul>

        <h1 className="text-red-400 text-md"><b>Language</b></h1>
        <ul  className="text-slate-500 list-disc list-inside">
        <li>Learning a foreign language is compulsory throughout Germany in secondary schools and often this language is English. 
          Every German below the age of 50 possesses the ability to converse in English.</li>
        <li>According to a list of countries by English-speaking population published by Wikipedia, 60% of Germans are fluent at \
          speaking English where as only 15% of Indians have fluency at English.</li>
        <li>About 85% of faculty members working at German higher education institutions possess the ability 
        to teach and converse in English.</li>
        <li>Most of the international Master programmes offered by German Universities will be taught exclusively in English.</li>
        <li>Many German universities offer free-of-charge language courses to International students.</li>
        </ul>
       

</div>
</Tabs.Item>
</Tabs.Group>
</Card>






</>
    )
  }
















  