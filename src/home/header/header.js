import { Col, Container, Row } from "react-bootstrap";
import Logo from "./img/logo.png";
import './header.css'
import Image from 'react-bootstrap/Image';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="header-container">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div onClick={() => navigate('/')} className="logo-container d-flex align-items-center">
                            <Image className="logo me-3" src={Logo} />
                            <div className="logo-title-container">
                                <span className="logo-title bold">Event pool</span>
                                <div className="logo-subtitle">твоя ідеальна платформа</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="navigations-container d-flex justify-content-center">
                            <a href="">ДОДОМУ</a>
                            <a href="">ПОДІЯ</a>
                            <a href="">ДОВІДКА</a>
                            <a href="">ДОПОМОГА</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="sign-in-btn-container d-flex justify-content-between">
                            {user ? (
                                <div className="sign-in-btn-container d-flex justify-content-between">
                                    <button onClick={() => navigate('/create-event')} className="btn-grad">МОЯ ПОДІЯ</button>
                                    <button onClick={logout} className="btn-grad">ВИЙТИ</button>
                                </div>
                            ) : (
                                <div className="sign-in-btn-container d-flex justify-content-between">
                                    <button onClick={() => navigate('/register')} className="btn-grad">Зареєструватися</button>
                                    <button onClick={() => navigate('/login')} className="btn-grad">Увійти</button>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
