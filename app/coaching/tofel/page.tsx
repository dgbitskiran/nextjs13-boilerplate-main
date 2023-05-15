import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Fullpage from '@/components/Coaching/Tofel/Fullpage'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Fullpage/>

<Footer/>


</>
  )
}
