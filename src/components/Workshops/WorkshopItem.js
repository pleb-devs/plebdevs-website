import styles from "@/styles/Home.module.css";
import { Col } from "react-bootstrap";

const WorkshopItem = ({ workshop }) => {
  const workshopTitle = workshop.snippet.title.replace(
    /^PlebDevs Workshop:/,
    ""
  );

  return (
    <Col
      as="a"
      className={styles.workshopThumbnail}
      href={`https://www.youtube.com/watch?v=${workshop.snippet.resourceId.videoId}`}
    >
      <div>
        <img
          src={workshop.snippet.thumbnails.medium.url}
          alt={workshop.snippet.title}
        />
        <h4 className={styles.workshopVideoTitle}>
          {workshopTitle || workshop.snippet.title}
        </h4>
      </div>
    </Col>
  );
};

export default WorkshopItem;
