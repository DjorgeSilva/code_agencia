import React from 'react'
import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import facebookIcon from "../../img/facebook.png"
import instagramIcon from "../../img/instagram.png"
import twitterIcon from "../../img/twitter.png"
import whatsappIcon from "../../img/whatsapp.png"

import {
    Container,
    Links,
} from "./FooterElements"

export const Footer = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={2} className="Coluna">
                    <h4>A Agência</h4>
                    <nav>
                        <ul>
                            <li><Links to="/" style={{ textDecoration: "none"}}>Inicio</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Quem somos</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Serviços</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Portfólio</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Contato</Links></li>
                        </ul>
                    </nav>
                </Col>

                <Col sm={12} md={3} className="Coluna">
                    <h4>Soluções</h4>
                    <nav>
                        <ul>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Criação de sites</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Blogs Personalizados</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>LLojas Virtuais</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>SEO - Otimização de sites</Links></li>
                            <li><Links to="/" style={{ textDecoration: "none" }}>Google Ads</Links></li>
                        </ul>
                    </nav>
                </Col>

                <Col sm={12} md={2} className="Coluna endereco">
                    <h4 style={{ marginBottom: "25px" }}>Contato</h4>
                    <p>greatideas@gmail.com.br</p>
                    <p>+5565981677770</p>
                    <p>+556521290041</p>
                    <p>Avenida Erico FilhoSala 14-A, Jd Italia, Cuiabá-MT</p>
                </Col>

                <Col sm={12} md={2} className="Coluna endereco">
                    <h4 style={{ marginBottom: "25px", textAlign: "center" }}>Rede Social</h4>
                    <nav className="nav_rede_social">
                        <ul>
                            <li><Link><img src={facebookIcon} alt="" /></Link></li>
                            <li><Link><img src={instagramIcon} alt="" /></Link></li>
                            <li><Link><img src={twitterIcon} alt="" /></Link></li>
                            <li><Link><img src={whatsappIcon} alt="" /></Link></li>
                        </ul>
                    </nav>
                </Col>

                <Col sm={12} className="Coluna">
                    <hr />
                    <h6>DESENVOLVIDO POR AGÊNCIA GREAT IDEAS © 2020 |  ALL RIGHTS RESERVED</h6>
                </Col>
            </Row>
        </Container>
    )
}
