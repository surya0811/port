import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/travel.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/image5.jpeg";
import chatify from "../../Assets/Projects/image4.png";
import suicide from "../../Assets/Projects/asset.png";
import bitsOfCode from "../../Assets/Projects/cultural.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sculpture Console"
              description="In this project, developed a system as a search engine for finding the temple sculpture details. Using this system we can search for an image of a sculpture, the system will provide the entire sculpture details like the name of the sculpture, temple name, state, and city of the temple."
              ghLink="https://github.com/surya0811/temple-sculpture.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="scsvmv cultural portal"
              description="In this created a web portal for univerisity event  for diwali here used login authendication with google sheets API and styling as Bootstrap "
              ghLink="https://github.com/surya0811/deepotsav2023"
              demoLink="https://culturalevents.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Real Time Object Detection"
              description="In this finding the name of the particular object which is near to the web camera by mobile SSD and Caffe Model "
              ghLink="https://github.com/surya0811/real-time-object-detection"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Stay on Travel"
              description="A frontend travel website displaying places with website name as Stay on Travel "
              ghLink="https://github.com/surya0811/travel"
              demoLink="https://suryastaytravel.netlify.app/#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Asset management console"
              description="  An effective management of asset for organizations to optimize their resources and streamline operations. This abstract introduces an innovative Asset Management System built on the MERN stack, designed to efficiently manage product data."
              ghLink="https://github.com/surya0811/Assetmanagement1"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
