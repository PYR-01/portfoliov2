import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate and creative Graphic Designer eager to begin my
              professional journey and contribute my skills to real-world
              projects. With a strong foundation in design principles,
              typography, and color theory, I'm excited to learn and grow.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Adobe Photoshop and Adobe Illustrator{" "}
                </b>
              </i>
              — bringing a fresh perspective and attention to detail to every
              project.
              <br />
              <br />
              My key areas of interest include creating
              <i>
                <b className="purple">
                  {" "}
                  Visually Engaging Designs, Brand Identity,{" "}
                </b>
              </i>
              and crafting designs that effectively communicate ideas.
              <br />
              <br />I love working on creative projects that combine
              <b className="purple"> artistic vision </b> with{" "}
              <i>
                <b className="purple">modern design principles</b> to deliver
                <b className="purple"> impactful visual solutions</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
