import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Inter } from 'next/font/google'
import Content from '../../components/about/Content'
import Footer from '../../components/Footer'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
<Navbar/>

<Content/>

<Footer/>


</>
  )
}
