import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Simran Saini</span> from{" "}
            <span className="purple">Jalandhar, Punjab, India</span>.
            <br />
            I'm a passionate <span className="purple">
              Graphic Designer
            </span>{" "}
            and fresher ready to embark on my creative journey.
            <br />I completed my{" "}
            <span className="purple">B.A from Doaba College</span> in 2024,
            along with a{" "}
            <span className="purple">Diploma in Computer Animation (DCA)</span>{" "}
            with 78% marks.
            <br />I also completed a 6-month{" "}
            <span className="purple">
              Graphic Designing Course from TECH CADD
            </span>{" "}
            with an impressive 92% marks.
            <br />
            <br />
            Outside of designing, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Creativity 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Design Techniques ✨
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create designs that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Simran Saini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
