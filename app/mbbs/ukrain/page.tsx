import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Ukrain from '@/components/Mbbs/Ukrain'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Ukrain/>

<Footer/>


</>
  )
}
