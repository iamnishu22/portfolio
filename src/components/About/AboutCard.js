import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nisha Rathod </span>
            from <span className="purple"> Maharashtra, Mumbai.</span>
            <br />
            I am currently an employee as a web developer at Faktary-E-solution.
            <br />
            I have completed BSc (IT) in Information technology from Shankar Narayan College of Arts & Commerce.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "code is never finished, only improved upon.!"{" "}
          </p>
          <footer className="blockquote-footer">Nisha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
