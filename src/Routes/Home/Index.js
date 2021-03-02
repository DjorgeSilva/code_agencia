import React from 'react'
import { Container } from "../../Componentes/Layout/Container"
import { Slider } from "../../Componentes/Slider/Slider"
import { Accordion, Card, Button } from 'react-bootstrap'
import {
    Info,
    InfoIMG,
    InfoTxt,
    InfoSite,
    InfoItem,
    About,
    AboutIMG,
    Funciona,
    ItemFunciona,
    Perguntas,
} from "./HomeElements"
import infoIMG from "../../img/info-bg.jpg"
import infosite1 from "../../img/infosite1.webp"
import infosite2 from "../../img/infosite2.webp"
import infosite3 from "../../img/infosite3.webp"
import infosite4 from "../../img/infosite4.webp"
import about from "../../img/about.jpg"
import funciona1 from "../../img/funciona1.png"
import funciona2 from "../../img/funciona2.png"
import funciona3 from "../../img/funciona3.png"
import { Layout } from "../../Componentes/Layout/Layout"
import { Row, Col } from "react-bootstrap"
import {Contato} from "../../Componentes/Contato/Index"

export const Home = () => {
    return (
        <>
        <Container>
            <Slider />

            <About>
                <Layout>
                    <Row>
                        <Col sm={12} md={5}>
                            <InfoTxt>
                                <h1>Great Ideas - Agência Web</h1>
                                <p>A Great Ideas é uma empresa que gosta do que faz, o foco principal está no desenvolvimento de sites. Uma agência web completa, localizada próxima a Avenida Paulista, em São Paulo - SP, atendendo a todo o Brasil. Pensou: Criação de sites ? Está no lugar certo!</p>
                                <p>Com campanhas de Google Ads e otimização de sites com SEO atraia novos clientes. Conheça as soluções de webmarketing que podem tornar o seu site muito mais acessado!</p>
                            </InfoTxt>
                        </Col>

                        <Col>
                            <AboutIMG>
                                <img src={about} alt="About great ideas" />
                            </AboutIMG>
                        </Col>
                    </Row>
                </Layout>
            </About>

            <Funciona>
                <Layout>
                    <h6>Criação de sites</h6>
                    <h1><span>Como</span> Funciona<span>?</span></h1>

                    <Row>

                        <Col sm={12} md={4}>
                            <ItemFunciona>
                                <img src={funciona1} alt="como funciona great ideas" />
                                <h5>Escolha o tipo de site</h5>
                                <p>Site institucional, e-commerce ou catálogo?<span>Qual site é o ideal para você?</span></p>
                            </ItemFunciona>
                        </Col>

                        <Col sm={12} md={4}>
                            <ItemFunciona>
                                <img src={funciona3} alt="como funciona great ideas" />
                                <h5>Fritas acompanha?</h5>
                                <p>Escolha se quer adicionais para seu site.<span> Blog, Chat Online, Multi-idioma e mais!</span></p>
                            </ItemFunciona>
                        </Col>

                        <Col sm={12} md={4}>
                            <ItemFunciona>
                                <img src={funciona2} alt="como funciona great ideas" />
                                <h5>OK! Pronto para decolar</h5>
                                <p>Emissão de contrato, briefing e mãos na massa!<span> Em poucos dias um site novinho em folha!</span></p>
                            </ItemFunciona>
                        </Col>

                    </Row>
                </Layout>
            </Funciona>

            <Info>
                <Layout>
                    <Row sm={12} md={7}>
                        <Col>
                            <InfoIMG>
                                <img src={infoIMG} alt="Imagem Informações Great Ideas" />
                            </InfoIMG>
                        </Col>

                        <Col sm={12} md={5}>
                            <InfoTxt>
                                <h1>Agência de sites completa</h1>
                                <p><i class="fas fa-check"></i>Desenvolvimento de sites limpos e modernos</p>
                                <p><i class="fas fa-check"></i>Sites profissionais e responsivéis</p>
                                <p><i class="fas fa-check"></i>Aqui você investe na criação do seu site e ponto.</p>
                                <p><i class="fas fa-check"></i>Marketing digital para o seu site bombar na internet</p>

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
                                <img src={infosite1} alt="Blogs no Great Ideas" />
                                <h1>Blogs</h1>
                                <h2>Personalizados e responsivos</h2>
                                <p>tenha o seu blog personalizado, com um visual profissional, áreas de anúncios para banners, e muito mais.</p>
                            </InfoItem>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <InfoItem>
                                <img src={infosite2} alt="E-commerce no Great Ideas" />
                                <h1>E-commerce</h1>
                                <h2>Lojas Virtuais</h2>
                                <p>Venda seus produtos onlne, de forma fácil e rápido. Faça a gestão de seus produtos, entregas e meios de pagamento.</p>
                            </InfoItem>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <InfoItem>
                                <img src={infosite3} alt="SEO no Great Ideas" />
                                <h1>SEO</h1>
                                <h2>Otimização de sites</h2>
                                <p>Conquiste mais clientes. Faça o seu site ser acessaddo com a otimização de sites e apareça bem posicionada no Google.</p>
                            </InfoItem>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            <InfoItem>
                                <img src={infosite4} alt="Google ADS no Great Ideas" />
                                <h1>Google ADS</h1>
                                <h2>Links patrocionados</h2>
                                <p>Com os anúncios no Google Ads o seu site pode aparecer em primeiro nas buscas e gerar muitos negócios.</p>
                            </InfoItem>
                        </Col>
                    </Row>
                </Layout>
            </InfoSite>

            <Perguntas>
                <Layout>
                    <h6>Criação de sites</h6>
                    <h1>Perguntas<span> Frequentes</span></h1>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <p>Meu site aparecerá no Google?</p>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>Sim, está incluso em nosso trabalho de desenvolvimento de sites cadastrar seu site no Google e otimizar ele de acordo com as boas práticas de SEO.</p>
                                    <p>Um site não fica na primeira página do Google se não seguir alguns parâmetros impostos pelo próprio Google na hora da criação. E nós estudamos e acompanhamos isso diariamente para poder executar as melhores práticas após criar seu site.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>


                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <p>Quais tipos de sites vocês desenvolvem?</p>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p>Somos uma empresa de criação de sites WordPress especializada em WordPress e temos 3 tipos de site: Site por assinatura, site de pagamento único e site de vendas online (e-commerce).</p>
                                    <p>O site por assinatura é uma opção de pagamento mensal para quem precisa de uma solução completa de site, hospedagem e suporte sem ter grandes custos iniciais. </p>
                                    <p>O site de pagamento único é o site que não há mensalidades atreladas com a UpSites, você pagará apenas uma única vez e o site será seu. Nossos astronautas tem a missão de criar layouts incríveis, sob medida, pensando no seu negócio. </p>
                                    <p>A criação de loja virtual é o tipo de site para quem quer vender pela internet. Desenvolvemos um layout exclusivo também, e construímos uma verdadeira máquina de vendas online para você.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>


                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    <p>Quais funcionalidades adicionais vocês oferecem?</p>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>Temos mais adicionais do que você pode imaginar em nosso trabalho de criação de sites! Chat online, Blog, Site multi-idioma, Sistema de cursos online, Integração com e-mail marketing, Pagamento digital, Área de membros e muitas outras funcionalidades sob medida.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>


                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    <p>Quais são as etapas para ter a criação de um site profissional?</p>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <p>Resumidamente, o processo para a criação de sites em WordPress é bem simples. Você solicitará o contato de nossa equipe clicando aqui, fará o pagamento e preencherá o briefing e em poucos dias você receberá seu site para aprovação.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>


                        <Card>
                            <Card.Header >
                                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                    <p>Qual a forma de pagamento?</p>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <p>Nós praticamente financiamos o site para você. Aceitamos pagamentos parcelados via boleto bancário sem juros, para te dar maior segurança e condição para desenvolver o site.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>


                        <Card>
                            <Card.Header >
                                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                    <p>Site One Page é bom para minha empresa?</p>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    <p>Em criação de websites, o site one page é um tipo de layout feito para exibir todo o conteúdo em apenas uma página, com seções bem definidas e conectadas. Por ser leve, dinâmico e funcional o site one page é uma solução de desenvolvimento web muito moderna, que vem sendo bastante procurada.</p>
                                    <p>Você pode até adicionar outras páginas ao site, mas o “núcleo”, isto é, as principais informações, são exibidas em uma única página.</p>
                                    <p>Por só ter uma página o site é muito rápido e tem uma performance excelente, principalmente no mobile.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>


                        <Card>
                            <Card.Header >
                                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                                    <p>Que segurança eu tenho ao contratar um site?</p>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    <p>Antes de iniciar o trabalho de desenvolvimento web você receberá um contrato para assinatura digital (com validade jurídica) onde você terá prazos, valores, direitos e obrigações referentes ao serviço de criação de websites.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>


                        <Card>
                            <Card.Header >
                                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                                    <p>Que informações preciso enviar para o meu site ser criado?</p>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                    <p>Após assinar um contrato conosco, você receberá por email um briefing (questionário) aonde você poderá detalhar suas preferências e enviar seus textos. A criação de sites em WordPress é feita somente após entendermos a fundo o seu projeto e seus objetivos.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>


                        <Card>
                            <Card.Header >
                                <Accordion.Toggle as={Button} variant="link" eventKey="8">
                                    <p>Meu site vai funcionar em smartphone e tablet?</p>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="8">
                                <Card.Body>
                                    <p>Sim, todos os nossos sites são resonsivos, ou seja, são criadas 3 versões diferentes: PC, Tablet e Smartphone. Desta forma, o usuário terá a melhor experiência independente do dispositivo que estiver utilizando para acessar o site.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>


                        <Card>
                            <Card.Header >
                                <Accordion.Toggle as={Button} variant="link" eventKey="9">
                                    <p>Qual será meu canal de contato durante o processo de criação do site?</p>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="9">
                                <Card.Body>
                                    <p>Após a contratação do desenvolvimento de site WordPress você poderá acompanhar e tirar suas dúvidas em nossos canais exclusivos de atendimento via telefone, chat online ou e-mail.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                    </Accordion>

                    <button type="button" className="orcamento-btn">Peça um orçamento</button>
                </Layout>
            </Perguntas>
        </Container>
        <Contato />
        </>
    )
}
