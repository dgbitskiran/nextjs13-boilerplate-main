
import { Inter } from 'next/font/google'

import Footer from '../components/Footer'
import Content from '../components/Content'
import Navbar from '../components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
  <Navbar/>
<br/>

<Content/>
<br/>
 <Footer/>


</>
  )
}
