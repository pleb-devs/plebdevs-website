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

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-15T19:00:00-06:00'); // 7PM Central Time

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>PlebDevs</title>
        <meta name="description" content="Join PlebDevs to kickstart your development journey!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bgContainer}>
        <div className={styles.timer}>
          <h1>Launching soon!</h1>
          <p style={{ textAlign: 'center' }}>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
        </div>
      </div>
    </>
  )
}
