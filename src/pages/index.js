import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { FaDiscord, FaGithub, FaExternalLinkAlt } from 'react-icons/fa' // Assuming you're using react-icons for icons

export default function Home() {
  return (
    <>
      <Head>
        <title>PlebDevs - Learn Development</title>
        <meta name="description" content="Join PlebDevs to kickstart your development journey!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>PlebDevs</h1>
          <p className={styles.subtitle}>Begin Your Journey in Development</p>
        </section>

        {/* Pitch Area */}
        <section className={styles.pitch}>
          <p>Join a growing community of developers and start learning with our curated courses.</p>
          <div className={styles.courses}>
            <div className={styles.course}>
              <h3>Course 1</h3>
              <p>Introduction to Web Development</p>
              <button className={styles.button}>Learn More</button>
            </div>
            <div className={styles.course}>
              <h3>Course 2</h3>
              <p>Advanced JavaScript Techniques</p>
              <button className={styles.button}>Learn More</button>
            </div>
          </div>
        </section>

        {/* PlebDevs Community Section */}
        <section className={styles.community}>
          <h2>Join the PlebDevs Community</h2>
          <FaDiscord size={50} />
          <p>Connect with other learners and developers on Discord.</p>
        </section>

        {/* Workshops Section */}
        <section className={styles.workshops}>
          <h2>Workshops</h2>
          <div className={styles.workshopThumbnail}>
            <img src="/workshop-placeholder.jpg" alt="Workshop Thumbnail" />
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <FaGithub size={30} />
          <FaExternalLinkAlt size={30} />
          {/* Icons for GitHub, X.com, and Nostr */}
          <p>Find us on GitHub, X.com, and Nostr</p>
        </footer>
      </div>
    </>
  )
}
