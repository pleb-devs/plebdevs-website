import styles from "@/styles/Home.module.css";
import { Row } from 'react-bootstrap';
import courses from '../../data/courses';
import CourseItem from "./CourseItem";

const CourseSection = () => {
    return (
        <Row className={`mb-5 ${styles.courses}`}>
            <Row className="mb-3" style={{ "textAlign": 'center' }}>
                <h2>Courses</h2>
            </Row>
            <Row>
                {
                    courses.map((course, idx) => <CourseItem courseDetails={course} key={idx} />)
                }
            </Row>
        </Row>
    )
}

export default CourseSection;