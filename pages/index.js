import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { matrix } from '../data/matrix.js'
import { useState, useEffect } from 'react'
import Accordion from '@/components/Accordion/index.js'

export default function Home() {

  const [totalCredits, setTotalCredits] = useState(0);
  const [data, setData] = useState([...matrix.courses]);

  var title = process.env.NEXT_PUBLIC_TITLE;

  useEffect(() => {
    var x = 0;

    data.map((i)=> {
      x += i.credits
    })

    setTotalCredits(x);
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <h1>{title}</h1>
        {
          data && data.map((info, index) => {
            return (
              <Accordion key={index} term={info.term} code={info.code} title={info.title} credits={info.credits} description={info.description}/>
            )
          })
        }

        {totalCredits.toFixed(1)}
        
      </main>
    </>
  )
}
