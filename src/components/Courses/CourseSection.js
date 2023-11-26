import styles from "@/styles/Home.module.css";
import { Row, Container } from "react-bootstrap";
import courses from "../../data/courses";
import CourseItem from "./CourseItem";

const CourseSection = () => {
  return (
    <Container>
      <Row>
        <Row className="mb-3" style={{ textAlign: "center" }}>
          <h2>Courses</h2>
        </Row>
        <Container>
          <Row className="justify-content-around">
            {courses.map((course, idx) => (
              <CourseItem courseDetails={course} key={idx} />
            ))}
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default CourseSection;
