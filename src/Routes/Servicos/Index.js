import React from 'react'
import {
    Container,
    WrapBanner,
    Main,
    ItemMain
} from "./ServicosElements"
import { Col, Row } from "react-bootstrap"
import { Layout } from "../../Componentes/Layout/Layout"
import {Contato} from "../../Componentes/Contato/Index"

export const Servico = () => {
    return (
        <>
        <Container>
            <WrapBanner>
                <div class="parallax"></div>
                <div className="innertxt">
                    <Layout>
                        <h1>Agência Web</h1>
                    </Layout>
                </div>
            </WrapBanner>

            <Main>
                <Layout>
                    <Row>

                        <Col sm={12}>
                            <ItemMain>
                                <div>

                                    <p>Great Ideas é uma Agência web completa em São Paulo - SP, localizada no coração comercial da cidade, na região da Avenida Paulista, e que nasceu em 2003 com o propósito de fornecer serviços voltados a internet. A ideia de ter cada projeto como único, através de briefings bem elaborados e o entendimento do negócio de nosso cliente. Uma agência focada na criação de sites e ferramentas de webmarketing que tornem o seu site rentável para o seu negócio e atraente para a internet e os seus potenciais clientes.</p>

                                    <p>Nos preocupamos na relação Custo x Benefício, para acelerar o retorno de seu investimento na internet, até porque, muitas pessoas neste exato momento estão procurando pelos seus serviços na web.</p>

                                    <p>Além da criação de sites e da criação de blogs personalizados, o que nos torna uma agência Web completa é o nosso leque de Serviços voltados para o seu site, como Consultoria em Google Ads (Links patrocinados) e SEO - Otimização de sites.</p>

                                    <p>Em 2018 a Superix iniciou as suas atividades na Europa (Portugal), atuando principalmente com criação de sites em Portugal.</p>
                                </div>

                                <h1>Teremos o maior prazer em fazer parte do sucesso de sua empresa.</h1>
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
