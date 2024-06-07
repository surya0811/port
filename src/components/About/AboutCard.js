import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Surya Vemparala </span>
            from <span className="purple"> Andhra pradesh, India.</span>
            <br />
            I have sucessfully completed my undergraduation at Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya.
            <br />
            Bachelor of <span className="purple"> Computer Science And Engineering </span> at SCSVMV, Chennai Tamilnadu.
            
            <br />
            <br />
            Apart from coding, other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Badminton and Carroms
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Endeavor to create solutions that have a meaningful impact!"{" "}
          </p>
          <footer className="blockquote-footer">Surya Vemparala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
