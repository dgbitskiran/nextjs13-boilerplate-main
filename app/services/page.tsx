import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Select_uni from '@/components/Services/Select_uni'
import Addmission from '@/components/Services/Addmission'
import Departure from '@/components/Services/Departure'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Select_uni/>

<Addmission/>

<Departure/>

<Footer/>


</>
  )
}
