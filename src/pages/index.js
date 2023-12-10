import Head from "next/head";
import React, { useState, useEffect } from "react"
import styles from "@/styles/Home.module.css";
import { FaDiscord, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiOstrich } from "react-icons/gi";
import WorkshopSection from "@/components/Workshops/WorkshopSection";
import CourseSection from "@/components/Courses/CourseSection";
import { Col, Row, Container, Button } from "react-bootstrap";

export default function Home() {

  function useWindowSize() {
    const [size, setSize] = useState({ width: undefined, height: undefined });

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return size;
  }

  const size = useWindowSize();
  const isSmallScreen = size.width <= 768;

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
        <Container as='section'>
          <Row className={`align-items-center justify-content-around mb-3 ${styles.pitch}`}>
            <Col md={5} style={isSmallScreen ? { height: '180px' } : { height: 'auto' }} className="mb-3 mb-sm-3 mb-md-0">
              <p>PlebDevs is a Bitcoin/Lightning App developer community focused on education, collaboration, and building hard skills.</p>
            </Col>
            <Col md={5} style={isSmallScreen ? { height: '180px' } : { height: 'auto' }}>
              <p>Join a growing community of developers/hackers and start learning with our courses, workshops, and 1:1 help.</p>
            </Col>
          </Row>
        </Container>



        <section>
          <CourseSection />
        </section>

        {/* PlebDevs Community Section */}
        <section className={styles.community}>
          <h2>Join the PlebDevs Community</h2>
          <p style={{ fontSize: "2.5rem" }}>
            {isSmallScreen ? '🤝👩‍💻🤝🧑‍💻🤝👨‍💻🤝' : '🤝👩‍💻🤝🧑‍💻🤝👨‍💻🤝👩‍💻🤝🧑‍💻🤝👨‍💻🤝👩‍💻🤝🧑‍💻🤝👨‍💻🤝'}
          </p>
          <p>Connect with other plebdevs on Discord and get 1:1 help</p>
          <Button size="lg" className={styles.discordButton} href="https://discord.gg/t4NkDKRCK8" target="_blank">
            <FaDiscord /> Join
          </Button>
        </section>

        <section>
          <WorkshopSection />
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <a href="https://github.com/pleb-devs" target="_blank"><FaGithub size={30} /></a>
          <a href="https://twitter.com/plebdevs" target="_blank"><FaSquareXTwitter size={30} /></a>
          <a href="https://primal.net/p/npub17v7g49shev2lwp0uwrx5v88ad6hj970zfse74wkes9jguhkx7aqsgjwsvj" target="_blank"><GiOstrich size={30} style={{ color: '#2F1041' }} /></a>
          {/* Icons for GitHub, X.com, and Nostr */}
          <p>Find us on GitHub / X / Nostr</p>
        </footer>
      </div>
    </>
  )
}
