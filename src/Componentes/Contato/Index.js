import React from 'react'
import {
    Container,
} from "./ContatoElements"
import { Layout } from "../Layout/Layout"
import { FaWhatsapp } from "react-icons/fa"
import {Link} from "react-router-dom"

export const Contato = () => {
    return (
        <Container>
            <div class="parallax"></div>
            <div className="innertxt">
                <Layout>
                    <h1>Orçamento rápido e adequado ao seu projeto! Converse ainda hoje com um especialista.</h1>
                    <p> Converse com especialistas de destaque entre as melhores agências de sites do Brasil.  Contrate uma Agência com expertise de anos no mercado, pare de investir na velha maneira de fazer publicidade e venha para o Great Ideas.</p>
                    <Link style={{textDecoration: "none"}} to="/contato">
                        <button type="button"><FaWhatsapp className="icone-whatsapp" />Link direto no whatsapp</button>
                    </Link>
                </Layout>
            </div>
        </Container>
    )
}
