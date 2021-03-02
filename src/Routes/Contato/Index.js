import React from 'react'
import {
    Container,
    BoxContato,
    InfoContato,
    WrapBanner
} from "./ContatoElements"
import { Layout } from "../../Componentes/Layout/Layout"
import { Row, Col } from "react-bootstrap"
import { IoMdContact } from "react-icons/io"
import { AiFillPhone } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { CgMail } from "react-icons/cg"

export const ContatoRoute = () => {
    return (
        <Container>
            <WrapBanner>
                <div class="parallax"></div>
                <div className="innertxt">
                    <Layout>
                        <h1>Entre em contato</h1>
                    </Layout>
                </div>
            </WrapBanner>
            <Layout>
                <Row>
                    <Col sm={12} md={7}>
                        <BoxContato>
                            <form>
                                <h1>Fale conosco</h1>
                                <p>Fale com o Great Ideas, basta preencher os campos abaixo: </p>

                                <label htmlFor="name">Nome:*</label>
                                <input type="text" name="name" id="name" />

                                <label htmlFor="email">E-mail:*</label>
                                <input type="email" name="email" id="email" />

                                <label htmlFor="etelefone">Telefone</label>
                                <input type="tel" name="telefone" id="telefone" />

                                <label htmlFor="mensagem">Mensagem:*</label>
                                <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>

                                <p className="p-bottom">* preenchimento obrigatório</p>

                                <button type="submit">Enviar</button>

                            </form>
                        </BoxContato>
                    </Col>

                    <Col sm={12} md={5}>
                        <InfoContato>
                            <IoMdContact className="icone-info-contato" />

                            <h3>Contato</h3>
                            <p><AiFillPhone className="icone-contato" />(99) 98144-4269</p>
                            <p><AiFillPhone className="icone-contato" />+5565981677770</p>
                            <p><AiOutlineWhatsApp className="icone-contato" />Whatsapp (Comercial)</p>
                            <p><CgMail className="icone-contato" />greatideas@gmail.com</p>

                        </InfoContato>

                    </Col>
                </Row>
            </Layout>
        </Container>
    )
}
