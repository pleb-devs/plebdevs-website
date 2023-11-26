import styles from "@/styles/Home.module.css";
import { Col } from "react-bootstrap";
import Image from 'next/image';

const WorkshopItem = ({ workshop }) => {
  // remove "PlebDevs Workshop:" from title
  const workshopTitle = workshop.snippet.title.replace(
    /^PlebDevs Workshop:/,
    ""
  );

  const thumbnail = workshop.snippet.thumbnails.medium;

  return (
    <Col
      as="a"
      className={styles.workshopThumbnail}
      href={`https://www.youtube.com/watch?v=${workshop.snippet.resourceId.videoId}`}
    >
      <div>
        <Image
          src={thumbnail.url}
          alt={workshop.snippet.title}
          width={thumbnail.width}  // Replace with the actual width of the thumbnail
          height={thumbnail.height} // Replace with the actual height of the thumbnail
          layout='responsive'
        />
        <h4 className={styles.workshopVideoTitle}>
          {workshopTitle || workshop.snippet.title}
        </h4>
      </div>
    </Col>
  );
};

export default WorkshopItem;
