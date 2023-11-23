import styles from "@/styles/Home.module.css";
import { Row, Col } from 'react-bootstrap'

const CourseItem = ({ courseDetails }) => {
    return (
        <Col className={`mx-5 ${styles.course}`}>
            <h3>{courseDetails.title}</h3>
            <img
                src="/  public/images/PlebDevs.png"
                alt={`${courseDetails.title} thumnail`}
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