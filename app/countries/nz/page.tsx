

import { Inter } from 'next/font/google'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Fullpage from '../../../components/Countries/Nz/Fullpage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
  <Navbar/>
<br/>
<Fullpage/>
  <Footer/>

</>
  )
}
