import styles from "@/styles/Home.module.css";

import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import WorkshopItem from "./WorkshopItem";

const WorkshopSection = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const getWorkshops = async () => {
      const res = await fetch("/api/youtube?q=workshops");
      const videos = await res.json();
      setWorkshops(videos.items);
    };

    getWorkshops();
  }, []);

  return (
    <section className={styles.workshops}>
      <h2>Workshops</h2>
      <Row>
        {workshops.map((workshop, idx) => (
          <WorkshopItem workshop={workshop} key={idx} />
        ))}
      </Row>
      <Row className="justify-content-center mt-4">
        <a
          href="https://www.youtube.com/playlist?list=PL22m-Ibz1G_Tkrl1_D-0PWzzL-7sc0Bx1"
          target="_blank"
          style={{width: 'fit-content'}}
        >
          <button className={styles.button}>More Workshops</button>
        </a>
      </Row>
    </section>
  );
};

export default WorkshopSection;
