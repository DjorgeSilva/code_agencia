import styled from "styled-components"
import contatoIMG from "../../img/contato.webp"

export const Container = styled.div`
    width: 100%;
    height: 70vh;
    margin: 40px auto;
    color: #fff;

    .parallax {
        background-image: url(${contatoIMG});
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
        top: -470px;


        h1{
        font-size: clamp(2rem, 2.5vw, 3rem);
        text-align: center;
    }
    p{
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        text-align: center;
        margin: 20px auto;

        @media (min-width: 750px){
            width: 90%;
        }
    }
    button{
        display: block;
        width: 35%;
        margin: 0 auto;
        padding: 10px 0;
        border: none;
        border-radius: 5px;
        text-transform: uppercase;
        font-weight: bold;
        background: #008000;
        color: #fff;

        &:hover{
            background:#fff;
            color: #008000;
        }

        .icone-whatsapp{
            font-size: 1.8rem;
            margin-right: 15px;
        }
    
        @media (min-width: 750px){
            width: 55%;
        }

        @media (min-width: 950px){
            width: 40%;
        }

        @media (max-width: 750px){
            width: 100%;
        }
    }

        @media (max-width: 750px){
            top: -490px
        }
    }
`
