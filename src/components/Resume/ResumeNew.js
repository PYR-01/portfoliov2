import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={process.env.PUBLIC_URL + "/Simran Saini Resume.jpg"}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row
          className="resume"
          style={{ justifyContent: "center", marginTop: "30px" }}
        >
          <Col md={8} style={{ paddingBottom: "50px" }}>
            <img
              src={process.env.PUBLIC_URL + "/Simran Saini Resume.jpg"}
              alt="Simran Saini Resume"
              style={{
                width: "100%",
                maxWidth: "800px",
                border: "2px solid #c770f0",
                borderRadius: "10px",   
              }}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={process.env.PUBLIC_URL + "/Simran Saini Resume.jpg"}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
