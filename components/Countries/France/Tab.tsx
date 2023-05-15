"use client"
import { Tabs , Card  } from "flowbite-react";

import { FcReading , FcQuestions} from "react-icons/fc";
export default function Tab() {
    return (
        <>
      

          <Card>
        <Tabs.Group aria-label="Tabs with icons"   style="pills">
              
        <Tabs.Item  title="Study In France"  icon={FcReading }  >

        <div className="p-3 mt-6 bg-white border max-h-screen  overflow-auto">

 <h1 className="text-red-400 text-md"><b>What Makes France as the Best Education Destination</b></h1>
 <p className="text-slate-500">
 France promotes higher education with its 82 state universities, and five Catholic universities. This apart the country hosts 
 many private "institutes", that award degrees. France has a dual system for higher education : "Universités" and "Grandes Ecoles". 
 The "Grandes Ecoles" system, concerns mostly science and business studies. For medical and law studies universities develop 
 selection systems for the course. 
 <br/>>
 According to recherche.gouv.fr under ministry for research and new technologies, French government encourages education and research 
 in fields like biomedical, agricultural-alimentary and environmental applications. Besides the Ministry promotes incentivized 
 initiatives in areas like: scientific computing of high power (university computing and research in applications of quantum physics, 
 meteorology, geology, bio-computing, etc.), computer security, masses of data, grid computing etc. There are many education 
 consultants aiding students for higher education in France.      
 <br/>
 Education is almost free at all levels (tuition as low as $200 a year except for private schools and business schools. Government offers 
 scholarships to 26% of the university students.             
 </p><br/>

 <h1 className="text-red-400 text-md"><b>How Do I Choose a University?</b></h1>
 <p className="text-slate-500">
 France’s strong academic and artistic tradition continues in the modern day; there are few countries which invest as much in 
 research and education. Global university rankings reflect this; a total of 39 French universities are included in the QS World 
 University Rankings® 2016-2017, of which 10 are within the global top 250. The nation’s two leading universities, Ecole Normale 
 Supérieure, Paris and Ecole Polytechnique ParisTech, both make the world's top 55 at 33rd and joint 53rd respectively, cementing 
 their reputations as two of Europe’s and the world’s leading institutions.
 <br/>
 Some universities also offer online study programmes. Every university has an internship referral system and a career services office
 that inform students of available internships and job opportunities.
 </p>

 <h1 className="text-red-400 text-md"><b>Eligibility to Study</b></h1>
 <p className="text-slate-500">
 One needs to apply for a long-stay visa if the duration of stay is for a period of more than 90 days.It can take up to two 
 months for the approval of your Visa application.
 <br/>
 A copy of your birth certificate is needed while applying in a French university. Display a certified translation showing the birthplace of 
 both of your parents. There must be proof of sufficient funds to cover the education expenses.
 <br/>
 For student long stay in France, the Visa fee is 50 Euros or INR equilvalent in current forex rate. Before you can work on earning a 
 degree in any subject in France, you first need to apply for admissions at the college or university.
 </p>
 <h1 className="text-red-400 text-md"><b>Proof of Financial Resources</b></h1>
 <p className="text-slate-500">
 It is very important to provide documents proving your admission to a university with the documented proof of sufficient funds to 
 live in France for a year in the form of a bank statement or pay slips. In case you opted for a student loan to cover your stay 
 in France, furnish relevant documents.
 </p>

 <h1 className="text-red-400 text-md"><b>Scholarships for France Education</b></h1>
 
 <ul  className="text-slate-500 list-disc list-inside">
  <li>French Embassy in India along with French companies award scholarships totalling up to 7.1 crore INR for
     more than 300 meritorious aspiring students.</li>
  <li>Eiffel Excellence Scholarship is granted for Master’s courses with an allowance of €1,181. For PhD courses
     the allowance is €1,400.</li>
  <li>Ile-de-France Masters Scholarship is to pursue a Master degree at Universities in the Paris region (Ile-de-France). 
    The scholarships allowance is €10,500 for 10 months with accommodation at Cité Universitaire in Paris.</li>
  <li>Erasmus Mundus Scholarship is for programs in France Erasmus Mundus Master Courses and PhD Courses conducted in France.</li>
  <li>Ampere Scholarships of Excellence at ENS de Lyon is to enrol in its Masters programs in the Exact Sciences, humanities, arts, 
    and social sciences. The scholarships cover €1000/month for a duration of 12 months that can be renewed on conditions.</li>
  <li>École Polytechnique Foundation Excellence Scholarship and Financial Support Program is for meritorious international students 
    to pursue Ingénieur Polytechnicien Program.</li>
  <li>INSEAD MBA Scholarships can be need-based and non-need based where grants ranging from $5,000 to $25,000 are allowed.</li>
  <li>Université de Lyon Masters Scholarship is available for meritorious international students to join a Master’s degree 
    programmes offered at the Université of de Lyon. The scholarship ranges from €400 – €800 monthly.</li>
  <li>Grenoble Institute of Technology Foundation Scholarship is for international students for international master program at 
    Grenoble INP. An allowance of 5000 euros per semester is granted under this.</li>
  <li>Emily Boutmy Scholarships at Sciences Po University offer scholarships ranging from €5,000 to €16,000 for two years of 
    postgraduate study. If the course is for three years under graduate study, the scholarship ranges from €3,000 to €12,300.</li>
<li>HEC Paris MBA Scholarship is merit-based, need-based or specific criteria based where grants ranging from €6,000 to €24,000.</li>
 <li>École Normale Supérieure International Selection scholarship in science or humanities is to follow a two or three-year course 
  at the ENS. 30 meritorious students receive a monthly stipend of approximately 1,000 Euros with accommodation on campus.</li>
 
 
 </ul>

 <h1 className="text-red-400 text-md"><b>Student Accommodation in France</b></h1>
 
 <ul  className="text-slate-500 list-disc list-inside">
<li>French Universities offer accommodation (both rooms and studios) at €120 per month outside Paris. Other option is choosing private 
  residences where you need to negotiate a better deal.</li>
<li>Résidences Estudines offer facilities in thirty major French towns, where the cost will be around €450 and €800 - www.estudines.fr.</li>
<li>Check ADELE (Association pour le Développement Économique du Logement Étudiant) www.adele.org for student accommodation 
  provided in more than 100 French towns.</li>
<li>CLEF (Centre de Logement pour Etudiants de France), the Center for student accommodation in France offers accommodation in Grenoble 
  (Montesquieu and Saint Exépury), Rouen (La varende) and in Evreux (Charles Péguy). Check out the rents at www.logetudes.com</li>
</ul>


</div> 


        </Tabs.Item>

        <Tabs.Item  title="Why France"  icon={FcQuestions}  >

        <div className="p-3 mt-6 bg-white border max-h-screen  overflow-auto">                  
        <h1 className="text-red-400 text-md"><b>Why France Education?</b></h1>
        <p className="text-slate-500">
        France is a major part of powerful Europian troika – England, France, and German. France is distingished for its rich 
        cultural heritage and intellectual superiority.
            <br/><br/>
            A global centre of technology, engineering, art, science, and philosophy France is a developed country the world's ninth 
            largest and the EU's second largest economy in terms of purchasing power parity. The growing strategic partnership 
            between India and France is opening up opportunities to aspiring careerists to make France as an overseas education 
            destination for recognition. India-France space cooperation, strategic defense partnership, and JVs between Indian and 
            two countries" according to French defence minister Jean-Yves Le Drian. This will give a huge fillip to “Make in India” 
            in defence, engineering and other allied sectors.
            <br/><br/>
            Besides, the French wines and spirits have admirers across the world. Tourists flow between the countries throw up 
            opportunities in travel and hospitality segment. In France, 77% of all electricity production comes from nuclear energy. 
            This shows the scope of career in nuclear science. All these enhances the scope of overseas career and education 
            aspirants in India to make France as a destination.
        </p>

        <h1 className="text-red-400 text-md"><b>Life in France</b></h1>
        <p className="text-slate-500">
        Although hedonistic to the core, the French love to talk about actuality, travelling, arts, politics. The French have a 
        sense of collective responsibility in the form of sharing a great deal of its earnings as taxes. Your job is not your 
        identity. To them family and social life is primary over career. The French view food as a way to build trust and 
        relationships. At office, you will be looked down if you lunch at your desk. They go out to have lunch with a group of 
        colleagues.
        <br/><br/>
        Students enjoy lower prices and special assistance in many aspects of daily life—advantages that can markedly improve their 
        quality of life. The health care system is modern and accessible; public transportation is efficient and affordable; rent 
        subsidies are widely available. In addition to access to low-cost restaurants, students pay discounted prices at museums 
        and athletic events.<br/>
        National Health Care or 'Sécurité Sociale' is considered as a major achievement in France. Even if one's cancer or a heart 
        surgery cost 100.000 US$, the patient does not pay anything In France one dates one person at time as multi-dating is looked 
        down. They travel more and their culture is omnipresent. </p><br/>

        <h1 className="text-red-400 text-md"><b>Climate in France</b></h1>
        <p className="text-slate-500">
        During winter it is very cold. Snow falls can be seen in the mountainous regions like the Alps, Pyrenees and Auvergne during 
        winter. It's the peak of summer during July and August of every year. Mild winters and hot summers are usual in French 
        riviera and in the South West of France. An occasional strong, cold, dry, north-to-northwesterly wind blows along the Rhône 
        Valley.
        </p>
        <h1 className="text-red-400 text-md"><b>Suppoting Your Education</b></h1>
        <p className="text-slate-500">
        Working in France during your studies: International students are entitled to work part time upto 20 hours a week off campus. 
        French legislation now authorizes foreign students to work a maximum of 964 hours per year. In France, there is a guaranteed 
        minimum salary, which is € 8.71 gross per hour.
        <br/>
        International students have rights to work in France of course with a student residency permit (carte de séjour d'étudiant) 
        For that, you must be enrolled in a recognized institution and must carry the passport and work documents that contains 
        information like timings of your work etc.
        <br/>
        Babysitting, hotel jobs like waiter, bell boys fetches €5-6/hour plus tips. Check through the classfields and apply for 
        suitable positions. Known part-time jobs include: foreign language teaching, telemarketing, software testing, software 
        coding etc. Working in retail showrooms is another option.
        <br/>
        </p>
        <h1 className="text-red-400 text-md"><b>Cost of living In France</b></h1>
        <p className="text-slate-500">
        Cost of living in France is 198.30% higher than in India. Rent in France is 277.60% higher than in India. Source: wwww.numbeo.com.
        <br/>
        If you’re renting an apartment, you will have to pay for the maintenance of the building and other facilities. The charge 
        covers such things as staircase cleaning, concierge charges, elevator repair, water, etc. The average cost in Paris for 
        monthly maintenance charges is €25 ($29.75) per square meter per year (€2.32 [$2.76] per square foot). Source: 
        https://internationalliving.com 
        </p>
        

</div>
</Tabs.Item>
</Tabs.Group>
</Card>


</>
    )
  }
















  