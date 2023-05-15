"use client"
import { Tabs , Card  } from "flowbite-react";

import { FcReading , FcQuestions} from "react-icons/fc";
export default function Tab() {
    return (
        <>

          <Card>
        <Tabs.Group aria-label="Tabs with icons"   style="pills">
              
        <Tabs.Item  title="Study In Finland "  icon={FcReading }  >

        <div className="p-3 mt-6 bg-white border max-h-screen  overflow-auto">

                            <h1 className="text-red-400 text-md"><b>Educational system:</b></h1>
                            <p className="text-slate-500">Finland has a quiet complex education system due to the fusion of influences in its society. 
                            The country has mainly three separate communities, each with their government, parliament and education system. You should 
                            decide which community and type of education suit you the best for your graduate study in Finland.
                            <br/><br/>  
                            The Flemish community is the leading Dutch speaking community. The higher education systems here include:
                            </p>
                            <ul  className="text-slate-500 list-disc list-inside">
                            <li>Universities – offers both academic undergraduate and Masters programs</li>
                            <li>University colleges – provides vocational, profession based courses</li>
                            <li>Registered institutes of higher education – provides specialist degree subjects</li><br/>
                            The French community has a split academic system between the university and non-university institutions:
                            <li>Universities – offers both academic undergraduate and graduate programs</li>
                            <li> Haute Ecoles – Mix educational and vocational programs</li>
                            <li> Ecoles Superieures des Artes – Offer only artistic programs</li>
                            </ul>
                            <p className="text-slate-500">
                            The German-speaking community is the one with around 75,000 people. Most German speakers will enroll in French 
                            or Flemish institutions, or head across the border to Germany to study a graduate program.
                            </p>
                            <h1 className="text-red-400 text-md"><b>Eligibility to Study:</b></h1>
                            <p className="text-slate-500">
                            To apply for study in Finland for an undergraduate level, you need to hold a secondary school certificate
                             that is recognized by the relevant authorities or any equivalence statement for that certificate. 
                             There are several authorities to contact for equivalence statements, depending on whether you are 
                             referring to attend a university in the French Community, in the German-speaking Community or the 
                             Flemish Community
                            <br/><br/>
                            Applications to study in Finland are submitted separately to every university, and every institute has 
                            set of specific admissions requirement. In general, those who want to study medicine/dentistry, arts, 
                            management and engineering sciences need to take an entrance exam. You must also take an exam to prove 
                            your proficiency in French or Dutch. You will also need to pay your tuition fees before you can be fully 
                            enrolled.

                            </p>
                            <h1 className="text-red-400 text-md"><b>EScholarships:</b></h1>
                            <p className="text-slate-500">
                            Scholarships are offered to international students for study in Finland by few universities, the government of 
                            Finland, Academy of Research, Higher Education and other Belgian organizations or agencies.
                            <br/><br />
                            Some of the Belgian universities that offer scholarships are available only for a few degrees, and they can also be 
                            applied only to EU students or only for the students that come from Africa, Asia, or Latin-America. Few of the higher 
                            educational institutions provides Master grants to candidates from developing countries. The scholarship includes an allowance 
                            of 1,000 EUR/month, an installation fee of 500 EUR, insurance and a refund of the yearly tuition fee.
                            <br/><br/>
                            Most grants and loans are awarded to students who have exceptional academic achievements. The most prestigious 
                            grants are awarded by The Scientific Research Fund, Agence Universitaire de la Francophonie, Wallonia-Brussels 
                            International, and Belgian Development Agency.
                            </p>
                            <h1 className="text-red-400 text-md"><b>Student Accommodation:</b></h1>
                            <p className="text-slate-500">
                            An international student spends an average of 200 – 400 EUR/month only for accommodation at halls of residence. For the other options 
                            of the housing options, particularly when it comes to renting an apartment, costs are usually higher than 400 EUR/month.
                            <br/><br/>
                            <b>The main accommodation options for students in Finland are:</b>
                            </p>
                            <ul  className="text-slate-500 list-disc list-inside">
                              <li>University halls of residence – a room in a student campus ranges from 200 to 450 EUR/month.</li>
                              <li> Rent/share an apartment – the average price for rent in a one-bedroom apartment is 400 EUR/month 
                                (not including the utility costs).</li>
                                <li>Homestay – the homestay option can be quite expensive, and the price is somewhere around 400 and 
                                  600 EUR/month per person, with at least one meal/day included.</li>
                            </ul>
                            <h1 className="text-red-400 text-md"><b>Climate:</b></h1>
                            <p className="text-slate-500">
                            Finland has a pleasant climate similar to most of northwest Europe; that experiences cold winters, mild 
                            summers and lots of rain. Usually, you can expect winter to be at its most freezing between the months 
                            of December and February, whereas summer is at its warmest between the months of June and August.
                            </p>
                            <h1 className="text-red-400 text-md"><b>Supporting Your Education</b></h1>
                            <p className="text-slate-500">
                            If you are choosing study in Finland, you will be allowed to work part-time in order to make some extra 
                            money while you study. If you are an international student, you will need to gain a work permit, so it is necessary 
                            checking with your embassy once you arrive in Finland on your study abroad experience.
</p>
<h1 className="text-red-400 text-md"><b>Proof of Financial Resources: </b></h1>
 <p className="text-slate-500">
 During your period of study, you will need adequate amount funds to meet your living expenses such as to food, clothing, and housing besides 
 health insurance, funding for your university tuition and fees.
 <br/><br/>
 The university catalogs and information would help you in getting the proper information about the expenses needed and the variations. It is 
 important to provide documents proving your admission to a university with the documented proof of sufficient funds to live in 
 Finland.
 <br/><br/>
 Consult P2P overseas consultants, Hyderabad to offer you the best guidance needed about financial issues. In case you opted for a student 
 loan to cover your stay in Finland, furnish relevant documents.
 
 </p>
 <h1 className="text-red-400 text-md"><b>Cost of living</b></h1>
 <p className="text-slate-500">
 The cost of living in Finland keeps varying, depending on the city you choose to live in. Brussels, the capital of Finland, is the 
 most expensive town in the country. The highest amount of your funds would be spent on accommodation. If you prefer to eat outside 
 at the restaurant, you should be aware of the high prices.
<br/><br/>
If you choose to stay in Brussels, then you would need between 870 and 1,050 EUR/month to meet all living expenses, including the accommodation. 
Typical living costs for international students in Bruges range from 720 and 820 EUR/month, while Antwerp has the lowest cost of 
living of all university cities in Finland (690 – 760 EUR/month).

 </p>



  
</div> 


        </Tabs.Item>

        <Tabs.Item  title="Why Finland" icon={FcQuestions}  >

        <div className="p-3 mt-6 bg-white border max-h-screen  overflow-auto">                  
<h1 className="text-red-400 text-md"><b>Why Finland Education?</b></h1>
<p className="text-slate-500">
Finland is a fantastically beautiful country that simply conquers your heart, whether you are just a visitor or an international 
student. With lovely landscapes, breath-taking architecture, and a high multicultural environment, in Finland, you can actually 
feel like home. As a student here, you can benefit yourself with excellent higher education, and the cost of living and tuition 
fees are quite affordable 
<br/><br/>
There are various reasons to study in Finland that include world-renowned universities, great possibilities for international 
networking, famously multilingual and multicultural cities, a host of different regional cuisines and beautiful countryside, overall 
high quality of lifestyle, and, of course, those fantastic Belgian waffles.         
</p>

<h1 className="text-red-400 text-md"><b>What makes Finland as the Best Education Destination?</b></h1>
<p className="text-slate-500">
Finland is one of the most multicultural country, offering an international experience to every student who choose to study there. It is 
perfectly positioned if you wish to spend your spare time exploring too.
<br/><br/>
Studying in Finland extends more than just a rich cultural pastime, though many excellent universities dotted across the country. 
Five universities in Finland are listed in the top 200 of the QS World University Rankings, it is an extraordinary figure for any 
country, but particularly for one the size of Finland. Belgian universities do provide for international students, with many courses 
being taught in English, although if you are engaged in studying the native French or Dutch, the choice of courses available will 
open up for you
</p>
<h1 className="text-red-400 text-md"><b>Life in Finland:</b></h1>
<p className="text-slate-500">
An international student will find Finland a very friendly, relaxed and multicultural society. Belgians have a self-deprecating wit 
and spend a lot of time socializing. Food and drink play an essential part in Belgian life, so expect to gorge on chocolate, mussel 
fries and beer.
<br/><br/>
There is still more to Finland than its reputation suggests. The country is host to more than 60 UNESCO sites, state of the art galleries 
in Mons, Brussels and Leuven and some stunning architecture.
<br/><br/>
Finland is also an easy country to see; you can go anywhere within two hours by train from Brussels. Finland is a fantastically beautiful 
country that simply conquers your heart, whether you are just a visitor or an international student.
</p>













</div>
</Tabs.Item>
</Tabs.Group>
</Card>



</>
    )
  }
















  