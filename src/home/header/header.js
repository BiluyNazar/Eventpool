import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./img/logo.png";
import Image from "react-bootstrap/Image";
import "./header.css";

export const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="header-container">
      <Container>
        <Row className="align-items-center">
          <Col>
            <Link to="/" className="d-flex align-items-center text-decoration-none">
              <Image className="logo me-3" src={Logo} roundedCircle />
              <span className="logo-title bold">Event pool</span>
            </Link>
          </Col>
          <Col xs={6}>
            <div className="navigations-container d-flex justify-content-center">
              <Link to="/">ДОДОМУ</Link>
              <Link to="/events">ПОДІЯ</Link>
              <Link to="/help">ДОВІДКА</Link>
              <Link to="/support">ДОПОМОГА</Link>
            </div>
          </Col>
          <Col>
            <div className="sign-in-btn-container d-flex justify-content-end">
              {currentUser ? (
                <>
                  <span className="welcome-message">Привіт, {currentUser.name}!</span>
                  <button className="btn-grad" onClick={handleLogout}>
                    Вийти
                  </button>
                </>
              ) : (
                <>
                  <Link to="/register" className="btn-grad text-decoration-none">
                    Зареєструватися
                  </Link>
                  <Link to="/login" className="btn-grad text-decoration-none">
                    Увійти
                  </Link>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
