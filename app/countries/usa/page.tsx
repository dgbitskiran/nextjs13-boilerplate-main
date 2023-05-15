

import { Inter } from 'next/font/google'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Fullpage from '../../../components/Countries/Usa/Fullpage'
import { FooterBrand } from 'flowbite-react/lib/esm/components/Footer/FooterBrand'

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
