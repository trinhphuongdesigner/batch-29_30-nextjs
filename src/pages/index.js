import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/HomePage.module.css'
import HeadMeta from '@/components/HeadMeta'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import Main from '@/components/Layout/Main'
import AboutComponent from '@/components/about'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <HeadMeta
        title="Trang thương mại uy tín nhất việt nam"
      />

      {/* <Header /> */}

      <AboutComponent />

      <h1>helo</h1>


      {/* <Main /> */}

      {/* <Footer /> */}
    </>
  )
}
