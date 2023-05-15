import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Arminia from '@/components/Mbbs/Arminia'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Arminia/>

<Footer/>


</>
  )
}
