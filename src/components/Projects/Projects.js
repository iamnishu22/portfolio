import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
  <Col md={5} className="project-card">
    <ProjectCard
      imgPath={chatify}
      isBlog={false}
      title="Chat App"
      description="Developed a chat application with support for both individual and group chats. Implemented functionalities like group creation, user avatars, real-time messaging, and the ability to change chat wallpapers for a personalized experience. Built with Firebase Firestore."
      ghLink="https://github.com/iamnishu22/chatapp"
    />
  </Col>

  <Col md={5} className="project-card">
    <ProjectCard
      imgPath={bitsOfCode}
      isBlog={false}
      title="Faktary-E-Solutions"
      description="Designed and developed a professional IT website for a company, featuring a modern UI, responsive design, and optimized performance. Integrated essential functionalities to enhance user experience and ensure seamless navigation."
      demoLink="https://www.faktaryesolutions.com/"
    />
  </Col>

  <Col md={5} className="project-card">
    <ProjectCard
      imgPath={leaf}
      isBlog={false}
      title="Neutrino International"
      description="Developed a dynamic website for Neutrino International, specializing in advertisement and event management. The platform features a modern UI, responsive design, and optimized performance to effectively showcase services. Integrated essential functionalities for seamless event bookings, promotions, and user engagement.."
      demoLink="https://neutrinointernational.co/"
    />
  </Col>

  <Col md={5} className="project-card">
    <ProjectCard
      imgPath={suicide}
      isBlog={false}
      title="Nageshwar Shipping"
      description="Created a user-friendly website for Nageshwar Shipping. The site helps customers track shipments, explore services, and navigate easily. Designed to make shipping smooth and efficient with a clean and modern look.."
      ghLink="https://nageshwarshipping.com/"
    />
  </Col>
</Row>

      </Container>
    </Container>
  );
}

export default Projects;
