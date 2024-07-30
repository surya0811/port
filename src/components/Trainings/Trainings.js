import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrainingCard from "./TrainingCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/travel.png";
import python from "../../Assets/Trainings/python.png";
import cloudcomputing from "../../Assets/Trainings/cloudcomputing.png";
import excel from "../../Assets/Trainings/excel.png";
import Certifications from "./Certifications";
function Trainings() {
  return (
    <section>
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Trainings </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Trainings I've worked in my Graduation.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <TrainingCard
              imgPath={python}
              isBlog={false}
              title="Programming with python (Internshala)"
              description="In this training,I learn how to design GUI applications with sql3lite and devolep a mini cricket players name framework."
              duration="45 days of Training-2021"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <TrainingCard
              imgPath={cloudcomputing}
              isBlog={false}
              title="Cloud Computing with AWS (Internshala)"
              description="In this training,I learn how acesses cloud management console and assigning cloud services to employee. "
              duration="30 days of training-2022"
            />
          </Col>

          <Col md={4} className="project-card">
            <TrainingCard
              imgPath={excel}
              isBlog={false}
              title="Microsoft Excel (Coursera)"
              description="It helps in engaging simple tricky works that used in excel to display the efficicent and fast data."
              duration="15 days of training-2021"             
            />
          </Col> 
        </Row>
      </Container>
    </Container>
    <Certifications/>
    </section>
  );
}

export default Trainings;
