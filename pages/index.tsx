import Head from 'next/head'
import Header from '@/components/screens/header'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/screens/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Iván&apos;s NextJS component playground</title>
        <meta name="description" content="Iván&apos;s NextJS component playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Header titleCardText="Iván&apos;s TypeScript modular template"/>
      <div className={styles.center}>
      </div>
      <Footer/>
      </main>
    </>
  )
}
