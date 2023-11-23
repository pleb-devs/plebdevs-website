import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { FaDiscord, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import WorkshopSection from "@/components/Workshops/WorkshopSection";
import CourseSection from "@/components/Courses/CourseSection";
import { Col, Row } from "react-bootstrap";

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
          <p className={styles.subtitle}>Let&apos;s level up together 🤝</p>
        </section>

        {/* Pitch Area */}
        <Row as='section' className={`flex-column align-items-center  ${styles.pitch}`}>
          <Col as='p'>PlebDevs is a Bitcoin/Lightning App developer community focused on education, collaboration, and building hard skills.</Col>
          <Col as='p'>Join a growing community of developers and start learning with our curated courses.</Col>
        </Row>

        <section>
          <CourseSection />
        </section>

        {/* PlebDevs Community Section */}
        <section className={styles.community}>
          <h2>Join the PlebDevs Community</h2>
          <a href="https://discord.com" target="_blank"><FaDiscord size={50} /></a>
          <p>Connect with other plebdevs on Discord and get 1:1 help</p>
        </section>

        <section>
          <WorkshopSection />
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <a href="https://github.com/pleb-devs" target="_blank"><FaGithub size={30} /></a>
          <FaExternalLinkAlt size={30} />
          {/* Icons for GitHub, X.com, and Nostr */}
          <p>Find us on GitHub, X.com, and Nostr</p>
        </footer>
      </div>
    </>
  )
}
