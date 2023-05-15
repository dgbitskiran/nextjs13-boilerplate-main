"use client";
import Whyp2p from "../Whyp2p";
import Table1 from "./Table1";
import Table2 from "./Table2";
export default function Content() {
    return (

      <> <br/>
<div className="md:container md:mx-auto  ">

<h1 className="text-red-500 text-md mb-3 text-4xl text-center "><b>GRE Coaching</b></h1>
<p className="text-slate-500 ">Graduate record Examinations or the GRE is a mandatory test to be taken by students desirous of 
getting admission to any masters level program in the USA (other than a business related program-MBA/Management). 
The GRE is also accepted / required by some universities</p>

<div className=" grid lg:grid-cols-2   m-10  ">
<div className="m-10">
<h1 className="text-red-500 text-md mb-3 text-xl text-center "><b>ABOUT THE GRE</b></h1>
<p className="text-slate-500 ">
The GRE is a multiple-choice, multi-stage test that measures verbal reasoning, quantitative reasoning, critical thinking and 
analytical writing skills. It has been designed in a way so as to calculate the student's intellectual and logical abilities, 
adapting to performance of students based on previous quantitative/ verbal ability sections. The test allows its takers to skip 
questions within a section, go back and change answers and have the flexibility to choose which questions within a section they 
want to answer first.
<br/><br/>
The GRE is developed and administered by testmaker ETS to provide graduate and business schools with common measures for 
comparing applicants’ qualifications and preparedness for graduate-level academic work. Graduate school and business school 
admissions committees look at your GRE score, along with your academic record and supporting materials, to assess your readiness 
for the rigors of graduate academic study.
<br/><br/>
What’s the takeaway? A high score on the GRE will have a direct, positive impact on your graduate or business school application.
</p>

<h1 className="text-red-500 text-md mb-3 text-xl text-center "><b>WHAT IS ON THE GRE?</b></h1>
<p className="text-slate-500 ">
The GRE exam measures your command of basic arithmetic, algebra, geometry, and data analysis as well as college-level vocabulary. 
More importantly, it measures your ability to analyze and evaluate written material, think critically, and solve problems. Learn 
more about what's on the GRE  
</p>


<div>
<img src="/photos/coaching/gre1.png"alt="..." />
</div>


</div>


<div>
<div>
<img src="/photos/coaching/gre.png"alt="Gmat" />
</div>







  <div className="m-10">
  <h1 className="text-red-500 text-md mb-3 text-xl text-center "><b>WHAT'S TESTED ON THE GRE?</b></h1>
  
<p className="text-slate-500 " >
What’s tested on the GRE? The GRE measures your command of basic arithmetic, algebra, geometry, and data analysis, as well as 
college-level vocabulary. More importantly, it measures your ability to analyze and evaluate written material, think critically, 
and solve problems.
<br/>
There are three total sections on the GRE and some test-takers face an unscored experimental or research section. You’ll tackle 80 
scored questions on the GRE and two scored Analytical Writing tasks. If you are given a research or experimental section on your 
GRE test date, you may have to complete an additional 20 questions that won’t affect your total score.
</p>


</div>
<h1 className="text-red-500 text-md mb-3 text-md text-center "><b>GRE General Test Scoring Methodology</b></h1>
<Table2/>
</div>
</div>
</div>


<div className="m-10">
<h1 className="text-red-500 text-md mb-3 text-md text-center "><b>Structure of the GRE General Test</b></h1>
<Table1/>
</div>
<br/>

<div>
<Whyp2p/> 
</div>

<div>
<p className="text-slate-500 " >
The Analytical Writing section will always precede all other test sections. The Verbal Reasoning, Quantitative 
Reasoning and Experimental Section (the latter of which is not scored but which can be either Verbal or Quantitative) may 
appear in any order. An identified Research Section that is not scored may also be included in the test, but will always appear at 
the end.</p>



</div><br/>





</>
    )
  }