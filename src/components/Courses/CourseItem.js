import Image from 'next/image';
import styles from "@/styles/Home.module.css";
import { Row, Col } from 'react-bootstrap';

const CourseItem = ({ courseDetails }) => {
    console.log(courseDetails)
    return (
        <Col className={`mx-5 ${styles.course}`}>
            <h3>{courseDetails.title}</h3>
            <Image
                src={`/images/${courseDetails.thumbnail}`}
                alt={`${courseDetails.title} thumbnail`}
                width={500}
                height={300}
                layout='responsive'
                style={{borderRadius: '8px', marginBottom: 25}}
            />
            <p>{courseDetails.description}</p>
            <Row className="justify-content-center">
                <Col as='a' href={courseDetails.udemy} target="_blank">
                    <button className={styles.button}>Udemy</button>
                    <p>${courseDetails.priceUSD}</p>
                </Col>
                <Col as='a' href={courseDetails.emeralize}>
                    <button className={styles.button}>Emeralize</button>
                    <p>丰 {(courseDetails.priceSats).toLocaleString()}</p>
                </Col>
            </Row>
        </Col>
    )
}

export default CourseItem;
