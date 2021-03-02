import styled from "styled-components"
import servico_banner from "../../img/servico-banner.jpg"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    
`

export const WrapBanner = styled.div`
    width: 100%;
    height: 70vh;

    .parallax {
        background-image: url(${servico_banner});
        min-height: 70vh; 
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        }

    .innertxt{
        width: 100%;
        height: fit-content;
        position: relative;
        top: -300px;

        h1{
            width: fit-content;
            height: fit-content;
            padding: 10px;
            font-size: clamp(2rem, 2.5vw, 3rem);
            text-align: center;
            background-color: ${props => props.theme.ternary_color};
            color:  #95347E;
            font-weight: bold;
    }


        @media (max-width: 750px){
            top: -310px
        }
    }
`

export const Main = styled.div`
    width: 100%;
    height: fit-content;
`

export const ItemMain = styled.div`
    width: 100%;
    height: fit-content;

    margin: 0 auto;
    margin-top: 100px;
    border-radius: 5px;
    padding: 20px;
    p{
        font-size: clamp(1rem, 2.5vw, 1.3rem);
        color: ${props => props.theme.secundary_color};
    }

    h1{
        font-size: clamp(2.5rem, 2.5vw, 3rem);
        text-align: center;
        margin: 50px 0;
        color: ${props => props.theme.ternary_color};
    }


`