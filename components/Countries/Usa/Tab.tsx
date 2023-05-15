"use client"
import { Tabs , Card  } from "flowbite-react";
import Table1 from "./Tables/Table1";
import Table2 from "./Tables/Table2";
import Table3 from "./Tables/Table3";
import Table4 from "./Tables/Table4";
import Table5 from "./Tables/Table5";
import Table6 from "./Tables/Table6";
import Table7 from "./Tables/Table7";

import { FcReading , FcQuestions} from "react-icons/fc";
export default function Tab() {
    return (
        <>
      

          <Card>
        <Tabs.Group aria-label="Tabs with icons"   style="pills">
              
        <Tabs.Item  title="Study In USA"  icon={FcReading }  >

        <div className="p-3 mt-6 bg-white border max-h-screen  overflow-auto">

                            <h1 className="text-red-400 text-md"><b>Education system in the USA:</b></h1>
                            <p className="text-slate-500">Let’s find out how the American education system works
                            <br/> 
                            Home to the maximum number of international students, the US provides a diverse range of courses for all study levels. Here’s a rundown on the education system of the US.
                            </p>
                            <h1 className="text-red-400 text-md"><b>Study levels in the US:</b></h1>
                            <ul  className="text-slate-500 list-disc list-inside">
                            <li>Elementary school</li>
                            <li>Middle school/Junior high school</li>
                            <li>High school</li>
                            <li>Higher education</li>
                            </ul>

                            <h1 className="text-red-400 text-md"><b>Here's an overview of the qualifications available in the US: </b></h1><br/> 
                            <Table1/><br/>
                            <h1 className="text-red-400 text-md"><b>Types of institutions</b></h1>
                            <p className="text-slate-500">
                            There are various types of institutions in the US that provide quality education. These can be categorised into:
                            </p><br/>

                            <h1 className="text-red-400 text-md"><b>Colleges</b></h1>
                            <p className="text-slate-500">
                            Smaller than the universities, colleges generally provide undergraduate degrees. Community colleges, an affordable study 
                            option in the US, offer two-year associate degrees after which you can continue your studies in the
                            university for another two years to gain an undergraduate degree.
                            </p><br/>

                            <h1 className="text-red-400 text-md"><b>Universities</b></h1>
                            <p className="text-slate-500">
                            Offer research-based masters, doctoral and post-doctoral degrees. There are mainly two types of universities in the US:
                            </p>
                            <ul  className="text-slate-500 list-disc list-inside">
                              <li>Public universities: Mostly state universities, established and run by the state government</li>
                              <li>Private universities: A mix of profit and not-for-profit supported by tuition fee and donations; approximately 20% of students attend private universities</li>
                            </ul><br/>
                            <h1 className="text-red-400 text-md"><b>Universities may further be categorised into:</b></h1>
                            <Table2/><br/>
                            <h1 className="text-red-400 text-md"><b>Fee structure</b></h1>
                            <p className="text-slate-500">
                            Tuition fee solely depends on the type of qualification and university or college you choose. Courses in 
                            medicine and engineering are likely to be more expensive. As with most other countries, MBA programs are 
                            often the most expensive. The tuition fee spent annually can range anywhere between US$ 10,000 and US$55,000.
                            <br/><br/>
                            Here’s a comprehensive guide for all Indian students who want to study in the USA
                            <br/><br/>
                            Home to diverse ethnicities, highest number of top ranked universities, and picturesque landscapes, the USA is truly a land of
                             opportunities. Choosing to study in the USA offers you the wonderful avenue of growing academically, 
                             culturally and socially.
                            </p>
                            <h1 className="text-red-400 text-md"><b>Know all about the intakes available in the USA</b></h1>
                            <Table3/><br/>
                            <p className="text-slate-500">*Intakes vary basis institution and your program. Please speak with your p2p counsellor for more information.</p>
                            <h1 className="text-red-400 text-md"><b>Student visa requirements for the US</b></h1>
                            <p className="text-slate-500">The US Government offers three different student visa types:</p>
                            <Table4/><br/>
                            <p className="text-slate-500">*For detailed information, please visit the US Government’s Department of State website.</p>
                            <h1 className="text-red-400 text-md">How much will it cost to study in the US?</h1>
                            <Table5/><br/>


</div> 


        </Tabs.Item>

        <Tabs.Item  title="Why USA"  icon={FcQuestions}  >

        <div className="p-3 mt-6 bg-white border max-h-screen  overflow-auto">                  
        <h1 className="text-red-400 text-lg"><b>Why USA Education? </b></h1>
        <h1 className="text-red-400 text-md"><b>Know why Indian students love studying in the US!</b></h1>
        <p className="text-slate-500">
        The United States of America (USA) hosts the most number of international students in the world. Quality education, unique 
        curriculum, multicultural environment, and abundant opportunities are just some of the reasons why many Indian students want 
        to study in the US.
            <br/><br/>
           <b> Here are top 5 reasons why studying in the US could be the best decision of your life:</b>
        </p>
        <h1 className="text-red-400 text-md"><b>1. Academic excellence</b></h1>
        <p className="text-slate-500">
        The US boasts of some of the finest universities, a lot of which consistently rank in the world university rankings. 
        American institutions are also known to have high academic standards, follow rigorous practices to maintain quality and are 
        well-supported to be able to offer excellent education to its students. As per the QS World Ranking 2021. 33 of the top 100 
        universities are from the US. Similarly, Times Higher Education Ranking has also ranked seven of the American universities 
        in its top 10 list of universities.
        </p>

        <h1 className="text-red-400 text-md"><b>2. Flexible education system</b></h1>
        <p className="text-slate-500">
        American universities and colleges offer a myriad of courses and programs to choose from. You have the freedom to not only 
        select the course content, but also the structure. At the undergraduate level, you have the liberty to pursue different 
        courses before they you declare your major at the end of the second year. This helps to explore your subject interest and 
        then decide without much hurry. Similarly, for your graduate studies, you can choose your preference and when you progress 
        for your dissertation, you can focus on the ideas you want to emphasise upon.
        </p>
        <h1 className="text-red-400 text-md"><b>3. Excellent support system for international students</b></h1>
        <p className="text-slate-500">
        American universities understand the struggles of international students and therefore conduct regular orientation programs, 
        workshops and trainings to offer assistance. In fact, the international student office helps students like you to get 
        accustomed to a new kind of lifestyle – whether it is an academic query, cultural or social, the staff will be there to 
        assist you round the clock.
        </p>

        <h1 className="text-red-400 text-md"><b>4. Cultural diversity</b></h1>
        <p className="text-slate-500">
        The US is a melting pot of different cultures, races and ethnicities. Its diverse environment ensures that there is 
        acceptance among all communities and there is no room for any sort of discrimination. You’ll be learning with students from 
        different regions of the world thereby making it a rich and stimulating education experience. Growing in the midst of 
        diversity will provide you with strong personality traits and skills that will be valuable in the international market. 
        These days employers prefer students with a multi-cultural background, which you would get a great taste of in the US. A one 
        of a kind international exposure, the US will help you explore variety of cuisines, customs, festivals and art too.
        </p>

        <h1 className="text-red-400 text-md"><b>5. Lively and vibrant campus life</b></h1>
        <p className="text-slate-500">
        It’s a known fact that campus life of the US is matchless. Irrespective of the university you study in, you will find 
        yourself in the midst of new cultural experiences and the American way of life. Embrace it and open yourself up to new ideas 
        and new people.
        </p><br/>

        <h1 className="text-red-400 text-md"><b>Fun facts about USA</b></h1>
        <Table6/><br/>
        <h1 className="text-red-400 text-lg"><b>Student visa requirements for the US</b></h1>
        <h1 className="text-red-400 text-md"><b>Applying for a US student visa? Here’s help!</b></h1>  
        <p className="text-slate-500">
        The US Government provides an opportunity to all Indian students to study in the country but as a prerequisite, you’ll have 
        to obtain a student visa first. The visa you need will depend on your age and the type of study you wish to pursue in the US. 
        Here’s an overview of the types of study visas and their application requirements:
        <br/>
        <b>The US Government offers three different student visa types:</b>
        </p>
        <Table4/><br/>
        <p className="text-slate-500">
        *For detailed information, please visit the US Government’s Department of State website.
        <br/><br/>
        As a primary step, you must first apply and be accepted by a US school or university that is certified by the Student and 
        Exchange Visitor Program (SEVP). Once accepted, you will receive a Form I-20 from the institution's international student 
        office, which is a paper record of your information in the database called the Student and Exchange Visitor Information 
        System (SEVIS).
        </p>
        <h1 className="text-red-400 text-md"><b>Documents required for a US student visa</b></h1>  
        <p className="text-slate-500"> <b>When applying for your student visa for the US, you will generally need:</b></p>
        <ul  className="text-slate-500 list-disc list-inside">
        <li>A valid passport that is valid for at least six months beyond your period of stay in the US (unless exempt by country specific agreements)</li>  
        <li>Acceptance at a SEVP approved school and your Form I-20</li>
        <li>Application fee payment for the SEVIS</li>
        <li>Non-immigrant visa application and the Form DS-160 confirmation page</li>
        <li>Your photograph in the requested format, and number</li>
        <b> Some additional documents that might be required include:</b>
        <li>Academic preparation documents such as transcripts, diplomas, degrees or certificates</li>
        <li>Evidence that you have sufficient funds to maintain your living expenses throughout the period of your stay in the US. This may includ 
          <br/>
          1.Bank statements
          <br/>
          2.Financial undertaking by a sponsor to cover your accommodation and living costs
          <br/>
          3.A scholarship program
          </li>
          <li>Evidence that you will leave the US once you have completed your course of study. This can be in the form of an air ticket out of the US to your home country</li>
        </ul>

        <p className="text-slate-500">
        You may also have to appear for a personal interview at the US embassy or consulate. 
        <br/><br/>
        *Please note that these are the basic requirements, speak with your p2p counsellor for a detailed list of documents required for visa processing
        </p>
        <h1 className="text-red-400 text-md"><b>F-1 Student visa</b></h1>
        <p className="text-slate-500">
        Most students who wish to pursue their studies overseas opt for the F-1 Student Visa. There are three major steps to its procedure, being:
        </p>
        <Table7/><br/>
        <p className="text-slate-500">
       <b> P.S: You can move to the US only 30 days before the start date of your program.</b>
        </p>
        <h1 className="text-red-400 text-md"><b>Applying for your visa online</b></h1>  
        <p className="text-slate-500">
        You’ll have to apply for your student visa application online using the US Embassy and Consulates India website. You can 
        apply up to 120 days before your intended date of program’s start date. Remember, your application date is the date when 
        your application fee is paid.
        </p><br/>

        <h1 className="text-red-400 text-md"><b>How can IDP help with visa applications?</b></h1>  
        <p className="text-slate-500">
        If you’re an IDP student with an offer letter from any of our partner institutions in the US, we can advise you on how to go about the entire process. 
        We’ll make sure you are fully informed on the latest visa requirements and conditions; also help you prepare the right documents 
        for your submission. <br/><br/>
        Our team of experts will direct you to the official websites and to authorised immigration representatives to ensure you have the latest applications forms
         and guidance. To reduce the hassle, we can also help to certify, translate and courier your documents. 
        </p><br/>

        <h1 className="text-red-400 text-md"><b>Visa fee</b></h1>  
        <p className="text-slate-500">
        As an applicant from outside the US, you will have to pay US$160 as an application visa fee 
        (do check the latest fee when applying here). <br/><br/>

        There is now a US$350 SEVIS fee on F and M visa applications and US$220 on most of the J Visa applications, this includes the cost of the computer system 
        which is used to record your stay in the United States (SEVIS).
        </p><br/>

        <h1 className="text-red-400 text-md"><b>English language requirements</b></h1>  
        <p className="text-slate-500">
        To gain your US student visa, you’ll have to provide evidence of proficiency in the English language. This usually means passing a secure English language test to be able
         to prove your communication and correspondence skills. <br/><br/>

         The International English Language Testing System (IELTS) is the world’s most popular high-stakes English language proficiency test for study, work and migration, with more 
         than three million tests taken in the past year. The IELTS results are recognised by more than 10,000 organisations, including educational institutions, employers, professional associations and governments, in 140 countries around the world.
        <br/><br/>
        US educational institutions require a minimum IELTS score of 6.5 band. 
        </p><br/>

        <h1 className="text-red-400 text-md"><b>When you first arrive in the US, you must:</b></h1>  
        <ul  className="text-slate-500 list-disc list-inside">
          <li>Contact your designated school official on a priority basis</li>
          <li>Contact your designated school official again, no later than the program start date listed on your Form I-20 </li>
        </ul>

        <h1 className="text-red-400 text-md"><b>Making sure your visa remains valid</b></h1>  
        <p className="text-slate-500"> Once you get your visa, there are several things you need to do to ensure it remains valid, including:
        </p>
        <ul  className="text-slate-500 list-disc list-inside">
          <li>Fulfilling the purpose for why the Department of State issued the visa</li>
          <li>Following the regulations associated with that purpose</li>
        </ul>

        <h1 className="text-red-400 text-md"><b>While studying in the US, you will need to observe the following rules:</b></h1>  
        <ul  className="text-slate-500 list-disc list-inside">
          <li>You must attend and pass all of your classes. If you are finding your studies too difficult, you should speak with your designated school official (DSO) immediately</li>
          <li>If you think you will be unable to complete your program by the end date listed on your Form I-20, you must talk to your DSO about requesting a possible program extension</li>
          <li>You must take a full course of study each term. If you cannot study full-time, contact your DSO immediately</li>
          <li>You cannot drop below a full course of study without consulting with your DSO</li>
          
          <p className="text-slate-500">
          You can always contact us for a free counselling session and we can guide you on how to go about the entire visa application process.
          </p>
        </ul>

        <h1 className="text-red-400 text-md"><b>The IDP advantage</b></h1>  
        <ul  className="text-slate-500 list-disc list-inside">
          <li>A global leader in international education services</li>
          <li>Australian Securities Exchange listed company </li>
          <li>120+offices in over 30 countries</li>
          <li>Partner to over 700 leading education institutions</li>
          <li>900 + expert education counsellors</li>
          <li>One student placed every 14 minutes</li>
          <li>Placed students into more than 500,000 courses</li>
        </ul>

        <h1 className="text-red-400 text-md"><b>Get expert guidance on</b></h1>  
        <ul  className="text-slate-500 list-disc list-inside">
          <li>Choosing the right course and university</li>
          <li>Scholarships, grants and bursaries </li>
          <li>Application submission and fee waivers</li>
          <li>Offer acceptance and tuition fee payment</li>
          <li>Visa information and assistance</li>
          <li>Pre-departure orientation</li>
        </ul>







</div>
</Tabs.Item>
</Tabs.Group>
</Card>



</>
    )
  }
















  