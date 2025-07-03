import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SANKAR J </span>
            from <span className="purple"> Madurai, Tamil Nadu, India.</span>
            <br />
            I am currently Fresher in software developer and searching for a Job.
            <br />
            I have completed in D.ECE(Electronic Communication & Engineering) @2023 and i Completed in Full Stack DotNet With ISO Certification.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "We don't like things that are beautiful.What we like seems beautiful to US!"{" "}
          </p>
          <footer className="blockquote-footer">Sankar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
