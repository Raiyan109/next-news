import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Toolbar } from '../components/Toolbar'
import styles from '../styles/Home.module.css'
import bg from '../public/images/pexels-gabriel-peter-696644.jpg'

export default function Home() {
  return (
    <>
      <div className='page-container'>

        <Toolbar />
        <div className={styles.main}
          style={{
            backgroundImage: `url(${bg.src})`,
            width: '100%',
            height: '100%',
          }}
        >
          <h1>Next.js News App</h1>
          <h3>Your one stop shop for the latest news articles</h3>
        </div>
        <Footer />
      </div>
    </>
  )
}
