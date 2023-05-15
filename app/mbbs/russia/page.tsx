import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Mbbsrussia from '@/components/Mbbs/Mbbsrussia'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Mbbsrussia/>

<Footer/>


</>
  )
}
