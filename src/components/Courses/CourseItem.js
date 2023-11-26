import Image from 'next/image';
import styles from "@/styles/Home.module.css";
import { Row, Col } from 'react-bootstrap';

const CourseItem = ({ courseDetails }) => {
    console.log(courseDetails)
    return (
        <Col sm={12} md={12} lg={5} className={`${styles.course} mb-3`}>
            <h3>{courseDetails.title}</h3>
            <Image
                src={`/images/${courseDetails.thumbnail}`}
                alt={`${courseDetails.title} thumbnail`}
                width={500}
                height={300}
                layout='responsive'
                style={{borderRadius: '2px', marginBottom: 25}}
            />
            <p>{courseDetails.description}</p>
            <Row className="justify-content-center">
                <Col as='a' href={courseDetails.udemy} target="_blank">
                    <button className={styles.button}>Udemy</button>
                    <p>${courseDetails.priceUSD}</p>
                </Col>
                <Col as='a' href={courseDetails.emeralize} target="_blank">
                    <button className={styles.button}>Emeralize</button>
                    <p>丰 {(courseDetails.priceSats).toLocaleString()}</p>
                </Col>
            </Row>
        </Col>
    )
}

export default CourseItem;
