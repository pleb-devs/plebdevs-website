import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { FaDiscord, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import WorkshopSection from "@/components/Workshops/WorkshopSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>PlebDevs</title>
        <meta name="description" content="Join PlebDevs to kickstart your development journey!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>PlebDevs</h1>
          <p className={styles.subtitle}>Let's level up together 🤝</p>
        </section>

        {/* Pitch Area */}
        <section className={styles.pitch}>
          <p>PlebDevs is a Bitcoin/Lightning App developer community focused on education, collaboration, and building hard skills.</p>
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
          <p>Connect with other plebdevs on Discord and get 1:1 help</p>
        </section>

        <WorkshopSection />

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
