import styled from "styled-components"
import contatoIMG from "../../img/contato-banner.jpg"
 

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 200px;
`

export const WrapBanner = styled.div`
    width: 100%;
    height: 70vh;
    margin-bottom: 100px;

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
        top: -350px;

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

export const BoxContato = styled.div`
    width: 100%;
    height: fit-content;

    form{
        width: 100%;
        height: fit-content;
        background: #fff;
        border-radius: 5px;
        padding: 20px 15px;
        padding-bottom: 130px;
    

        h1{
            font-size: clamp(2rem, 2.5vw, 3.5rem);
            color: #95347E;
            text-align: center;
        }
        p{
            font-size: clamp(1rem, 2.5vw, 1.2rem); 
            text-align: center;
            margin-bottom: 20px;
        }
        label{
            width: 100%;
            width: block;
            margin: 10px 0;
            font-weight: 500;
        }
        input{
            width: 100%;
            height: 40px;
            outline-color: #95347E;
            padding: 0 15px;
        }
        textarea{
            width: 100%;
            outline-color: #95347E;
            padding:15px;
        }

        .p-bottom{
           float: left;
           color: #95347E;
           font-weight: 500;
        }

        button{
            padding: 10px 45px;
            margin: 20px 0;
            float: right;
            border: 2px solid ${props => props.theme.primary_color};
            border-radius: 5px;
            background: #95347E;
            color: #fff;
            font-weight: bold;

            &:hover{
                background: #fff;
                color: #95347E;
            }
        }

    }

    @media (min-width: 1100px){
        width: 90%;
    }
`

export const InfoContato = styled.div`
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    background: #95347E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 10px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    

    .icone-info-contato{
        font-size: 5rem;
    }

    h3{
        font-size: clamp(2rem, 2.5vw, 3rem);
        margin: 30px 0;
    }

    p{
        font-size: clamp(1rem, 2.5vw, 1.2em);

        .icone-contato{
            margin-right: 10px;
            font-size: 1.2rem;
        }
    }

    @media (max-width: 750px){
        margin-top: 40px;
    }
`