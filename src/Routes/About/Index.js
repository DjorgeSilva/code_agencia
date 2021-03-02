import React from 'react'
import {
    Container,
    WrapBanner,
    Main,
    ItemMain
} from "./AboutElements"
import { Col, Row } from "react-bootstrap"
import { Layout } from "../../Componentes/Layout/Layout"
import infosite1 from "../../img/infosite1.webp"
import infosite2 from "../../img/infosite2.webp"
import infosite3 from "../../img/infosite3.webp"
import infosite4 from "../../img/infosite4.webp"
import infosite5 from "../../img/infosite5.webp"
import {Contato} from "../../Componentes/Contato/Index"

export const About = () => {
    return (
        <>
        <Container>
            <WrapBanner>
                <div class="parallax"></div>
                <div className="innertxt">
                    <Layout>
                        <h1>O que fazemos?</h1>
                    </Layout>
                </div>
            </WrapBanner>

            <Main>
                <Layout>
                    <Row>

                        <Col sm={12}>
                            <ItemMain>
                                <div>
                                    <img src={infosite5} alt="como funciona great ideas" />
                                </div>
                                <div>
                                    <h5>Criação de Sites</h5>
                                    <h6>Sites institucionais e administráveis</h6>
                                    <p><span>Great Ideas Agência Web</span>, trabalha com <span>desenvolvimento de sites</span> profissionais e administravéis, e também, outros tipos de sistes.</p>
                                </div>
                            </ItemMain>
                        </Col>

                        <Col sm={12} >
                            <ItemMain>
                            <div>
                                    <img src={infosite2} alt="como funciona great ideas" />
                                </div>
                                <div>
                                    <h5>E-commerce</h5>
                                    <h6>Lojas Virtuais</h6>
                                    <p>A agência entra com o seu conhecimento e parceria com a Loja Integrada, uma plataforma pronta para e-commerce e muito estável para que se tenha uma ótima experiência de compra pelos seus clientes.</p>
                                </div>
                            </ItemMain>
                        </Col>

                        <Col sm={12} >
                            <ItemMain>
                            <div>
                                    <img src={infosite3} alt="como funciona great ideas" />
                                </div>
                                <div>
                                    <h5>Blogs Personalizados</h5>
                                    <h6>Visual profissional</h6>
                                    <p>A agência é especializada na criação de <span>blogs personalizados, </span> com uma equipe de designers e programadores que irá trabalhar para deixar o seu <span>Blog</span> com um aspecto único e diferenciado. Um design e um layout próprio, exclusivo!</p>
                                </div>
                            </ItemMain>
                        </Col>

                        <Col sm={12} >
                            <ItemMain>
                            <div>
                                 <img src={infosite4} alt="como funciona great ideas" />
                                </div>
                                <div>
                                    <h5>SEO</h5>
                                    <h6>Otimização de sites</h6>
                                    <p>Com as melhores práticas em SEO e desenvolvimento de um site, Great Ideas trabalha a <span>otimização de sites</span> tornando possivél aumentar o ranking/posicionamento nos resultados da busca orgânica do Google, Yahoo e outros buscadores.</p>
                                </div>
                            </ItemMain>
                        </Col>

                        <Col sm={12} style={{marginBottom: "60px"}}>
                            <ItemMain>
                            <div>
                                 <img src={infosite1} alt="como funciona great ideas" />
                                </div>
                                <div>
                                    <h5>Google Ads</h5>
                                    <h6>Google Adwards e Links patrocionados</h6>
                                    <p>A agência desenvolve <span>campanhas de Goolgle Adwards</span> e é certificada como Google Partner para otimizar suas campanhas do Google. Sem dúvida uma forma muito rápida e mais imediatista de colocar o seu site e produto à vista de potenciais clientes.</p>
                                </div>
                            </ItemMain>
                        </Col>

                    </Row>

                </Layout>
            </Main>
        </Container>
        <Contato/>
        </>
    )
}
