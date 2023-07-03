import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/mylogo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/devansh-dubey-47748913b/"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://www.facebook.com/devansh.dubey.750983/"><img src={navIcon2} alt="Facebook" /></a>
                <a href="https://www.instagram.com/devansh._.dd/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2023. Devansh Dubey</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
