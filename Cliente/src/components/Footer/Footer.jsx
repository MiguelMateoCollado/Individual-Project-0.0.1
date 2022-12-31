import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
function Footer() {
  return (
    <Container
      fluid
      className="footer text-light py-xxl-5 px-xxl-5 py-lg-5 px-lg-5 px-sm-0 align-items-center justify-content-center text-align-center"
    >
      <Row className="justify-content-center ">
        <Col xxl="3" sm="12" lg="3" className="">
          <span>
            <h4 className="fs-3">MIGUEL A. MATEO </h4>
            <h6>Full Stack Developer</h6>
          </span>
          <p>
            Full Stack Web Developer Specializing in JavaScript / React.js with
            great skills in handling and creating web pages and computer
            systems, a wide knowledge about ✒️ design with a full command of
            tools like Photoshop, Illustrator.
          </p>
          <h5>TECNOLOGY</h5>
          <p>Javascript | React | Express | Redux</p>
        </Col>
        <Col
          sm="12"
          lg="3"
          xxl="3"
          className="text-center justify-content-center align-items-center d-flex "
        >
          <div>
            <h2 className="fs-1">CONTACT ME</h2>
            <div className="line"></div>
            <a
              className="fs-1 fs-1 px-3"
              href="https://www.linkedin.com/in/miguelmateojs/"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              className="fs-1 px-3 py-5 "
              href="https://github.com/MiguelMateoCollado"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <span className="fs-1 px-3 py-5">
              <ion-icon name="mail"></ion-icon>
            </span>
            <h6>miguelamc258@gmail.com</h6>
          </div>
        </Col>
        <Col lg="2" sm="12">
          <h3>SKILLS</h3>
          <p className="para">Graphic Designer</p>
          <p className="para">Front-end Developer</p>
          <p className="para">Back-end Developer</p>
        </Col>
      </Row>
    </Container>
  );
}
/*
<Row className="justify-content-center">
        <Col className=" mt-5" lg="3">
          <span>
            <h3>MIGUEL A. MATEO </h3>
            <h5>Full Stack Developer</h5>
          </span>
          <p>
            Full Stack Web Developer Specializing in JavaScript / React.js with
            great skills in handling and creating web pages and computer
            systems, a wide knowledge about ✒️ design with a full command of
            tools like Photoshop, Illustrator.
          </p>
          <h5>TECNOLOGY</h5>
          <p>Javascript | React | Express | Redux</p>
        </Col>
        <Col className=" mt-5" lg="3">
          <div className={styles.contact}>
            <h2>CONTACT ME</h2>
            <div className={styles.line}></div>
          </div>
          <div>
            <a
              className={styles.icons}
              href="https://www.linkedin.com/in/miguelmateojs/"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              className={styles.icons}
              href="https://github.com/MiguelMateoCollado"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <span className={styles.icons2}>
              <ion-icon name="mail"></ion-icon>
            </span>
          </div>
          <span>miguelamc258@gmail.com</span>
        </Col>
        <Col>
          <h3>SKILLS</h3>
          <p className={styles.para}>Graphic Designer</p>
          <p className={styles.para}>Front-end Developer</p>
          <p className={styles.para}>Back-end Developer</p>
        </Col>
      </Row>
*/
export default Footer;
