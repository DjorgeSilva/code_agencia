import React from 'react'
import { Container } from "../../Componentes/Layout/Container"
import { Slider } from "../../Componentes/Slider/Slider"
import {
    Info,
    InfoIMG,
    InfoTxt,
    InfoSite,
    InfoItem,
} from "./HomeElements"
import infoIMG from "../../img/info-bg.jpg"
import infosite1 from "../../img/infosite1.webp"
import infosite2 from "../../img/infosite2.webp"
import infosite3 from "../../img/infosite3.webp"
import infosite4 from "../../img/infosite4.webp"
import { Layout } from "../../Componentes/Layout/Layout"
import { Row, Col } from "react-bootstrap"

export const Home = () => {
    return (
        <Container>
            <Slider />

            <Info>
                <Layout>
                    <Row sm={12} md={7}>
                        <Col>
                            <InfoIMG>
                                <img src={infoIMG} alt="" />
                            </InfoIMG>
                        </Col>

                        <Col sm={12} md={5}>
                            <InfoTxt>
                                <h1>Agência de sites completa</h1>
                                <p><i class="fas fa-check"></i>Desenvolvimento de sites limpos e modernos</p>
                                <p><i class="fas fa-check"></i>Sites profissionais e responsivéis</p>
                                <p><i class="fas fa-check"></i>Aqui você investe na criação do seu site e ponto.</p>
                                <p><i class="fas fa-check"></i>Marketing diital para o seu site bombar na internet</p>

                                <button>Quanto custa um site? Solicite um orçamento</button>
                            </InfoTxt>
                        </Col>
                    </Row>
                </Layout>
            </Info>

            <InfoSite>
                <Layout>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <InfoItem>
                                <img src={infosite1} alt="" />
                                <h1>Blogs</h1>
                                <h2>Personalizados e responsivos</h2>
                                <p>tenha o seu blog personalizado, com um visual profissional, áreas de anúncios para banners, e muito mais.</p>
                            </InfoItem>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <InfoItem>
                                <img src={infosite2} alt="" />
                                <h1>E-commerce</h1>
                                <h2>Lojas Virtuais</h2>
                                <p>Venda seus produtos onlne, de forma fácil e rápido. Faça a gestão de seus produtos, entregas e meios de pagamento.</p>
                            </InfoItem>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <InfoItem>
                                <img src={infosite3} alt="" />
                                <h1>SEO</h1>
                                <h2>Otimização de sites</h2>
                                <p>Conquiste mais clientes. Faça o seu site ser acessaddo com a otimização de sites e apareça bem posicionada no Google.</p>
                            </InfoItem>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <InfoItem>
                                <img src={infosite4} alt="" />
                                <h1>Google ADS</h1>
                                <h2>Links patrocionados</h2>
                                <p>Com os anúncios no Google Ads o seu site pode aparecer em primeiro nas buscas e gerar muitos negócios.</p>
                            </InfoItem>
                        </Col>
                    </Row>
                </Layout>
            </InfoSite>
        </Container>
    )
}
