import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import TrainingCard from "./TrainingCards";
import google from "../../Assets/Trainings/google.jpg"
import Particle from "../Particle";
const Certifications = () => {
    return (
        <Container fluid className="project-section">
          <Particle />
          <Container>
            <h1 className="project-heading">
              My Recent <strong className="purple">Certifications </strong>
            </h1>
            <p style={{ color: "white" }}>
              Here are a few Certifications I've done in my Graduation.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <TrainingCard
                  imgPath={google}
                  isBlog={false}
                  title="Goole Analytics Beginner Course"
                  description="It covers topics like understanding user behavior, setting up tracking codes, analyzing data, and measuring conversions. Learners explore metrics, traffic sources, and basic reports to optimize websites effectively. Passing an exam demonstrates proficiency in using Google Analytics for website analysis."
                //   duration="20 days of Training-2023"
                  // demoLink="https://chatify-49.web.app/"
                />
              </Col>
              </Row>
      </Container>
    </Container>
  );
}

export default Certifications