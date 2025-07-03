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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title=" To-Do_List"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with HTML5 , CSS3 , JavaScript , react.js . Have features which allows user for realtime Updating, Add , Delete  as well as supports reactions on messages."
              ghLink="https://github.com/sankarsathya/To-Do_List"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SnapShot"
              description="Snapshot testing involves rendering a React component, serializing its output (usually JSXconverted to JSON), and saving this as a snapshot file."
              ghLink="https://github.com/sankarsathya/SnapShot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
