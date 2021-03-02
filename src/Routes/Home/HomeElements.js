import styled from 'styled-components'



export const About = styled.div`
    width: 100%;
    height: fit-content;
    background: #000;
`

export const AboutIMG = styled.div`
    width: 100%;
    max-height: 600px;
    height: fit-content;

    img{
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;

        @media (min-width: 750px){
            margin-top: 220px;
        }

        @media (min-width: 1050px){
            margin-top: 80px;
        }
    }
`

export const Funciona = styled.div`
    width: 100%;
    height: fit-content;
    background: #000;
    margin-top: 150px;

    h6{
        color: ${props=> props.theme.secundary_color};
        text-transform: uppercase;
        font-size: clamp(1.5rem, 2.5vw, 2rem);
        text-align: center;
    }

    h1{
        color: ${props=> props.theme.ternary_color};
        text-transform: uppercase;
        font-size: clamp(2rem, 2.5vw, 3rem);
        text-align: center;
        font-weight: bolder;

        span{
            font-weight: lighter;
            color: ${props=> props.theme.secundary_color};
        }
    }
`

export const ItemFunciona = styled.div`
    width: 95%;
    height: 350px;
    background: ${props=> props.theme.secundary_color};
    border-radius: 5px;
    margin: 40px auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    &:hover{
        background: ${props => props.theme.ternary_color};
        transform: scale(1.05);
    }

    img{
        width: 80px;
    }

    h5{
        width: 90%;
        text-align: center;
        margin: 30px auto;
    }

    p{
        width: 90%;
        font-size: 1rem;
        text-align: center;
        line-height: 28px;

        span{
            font-weight: bolder;
        }
    }
`

export const Info = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    background: ${props => props.theme.primary_color};
    padding: 80px 0;

`

export const InfoTxt = styled.div`
    width: 100%;
    height: inherit;
    cursor: pointer;

    h1{
        margin: 30px 0;
        color: ${props => props.theme.ternary_color};
        font-size: clamp(2rem, 2.5vw, 3rem);
        &:hover{
            color:  ${props => props.theme.ternary_color};;
        }
    }
    p{
        color: ${props => props.theme.secundary_color};
        font-size: clamp(1.3rem, 3vw, 1.3rem);

        &:hover{
            color:  ${props => props.theme.ternary_color};;
        }

        i{
            margin-right: 10px;
        }
    }
    button{
        display: block;
        width: 90%;
        margin: 30px auto;
        padding: 15px 0;
        background: transparent;
        color: ${props => props.theme.secundary_color};
        border: 2px solid ${props => props.theme.secundary_color};
        &:hover{
            background:  ${props => props.theme.ternary_color};
            color: ${props => props.theme.primary_color};
            border: 2px solid ${props => props.theme.primary_color};
        }
    }

`

export const InfoIMG = styled.div`
    width: 100%;
    max-height: 400px;
    height: 100%;

    img{
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;

        @media (min-width: 750px){
            margin-top: 80px;
    }
    }


`

export const InfoSite = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    background: ${props => props.theme.primary_color};
    padding: 60px 0;

`
export const InfoItem = styled.div`
    cursor: pointer;
    width: 90%;
    height: 400px;
    background: ${props => props.theme.secundary_color};
    border-radius: 5px;
    margin: 20px auto;
    padding: 0 10px;

    &:hover{
        background: ${props => props.theme.ternary_color};
        transform: scale(1.05);
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        display: block;
        width: 100px;
        overflow: hidden;
        object-fit: cover;
        margin: 20px auto;

    }

    h1{
        font-size: clamp(2rem, 2vw, 1.3rem);
        text-align: center;
    }
    h2{
        font-size: clamp(1.2rem, 2vw, 1rem);
        text-align: center;
    }
    p{
        font-size: 1rem;
        text-align: center;
        line-height: 32px;
    }

    @media (min-width: 750px){
        width: 100%;
    }

`

export const Perguntas = styled.div`
    width: 100%;
    height: fit-content;
    margin: 40px auto;
    margin-bottom: 100px;

    h6{
        color: ${props=> props.theme.secundary_color};
        text-transform: uppercase;
        font-size: clamp(1.5rem, 2.5vw, 2rem);
        text-align: center;
    }
    
    h1{
        color: ${props=> props.theme.ternary_color};
        text-transform: uppercase;
        font-size: clamp(2rem, 2.5vw, 3rem);
        text-align: center;
        font-weight: bolder;
        margin-bottom: 50px;

        span{
            font-weight: lighter;
            color: ${props=> props.theme.secundary_color};
        }
    }

    p{
        text-align: left;
    }

    .orcamento-btn{
        display: block;
        width: 40%;
        margin: 30px auto;
        padding: 10px 0;
        border-radius: 5px;
        border: none;
        text-transform: uppercase;
        background: ${props=> props.theme.ternary_color};
        font-weight: 500;

        &:hover{
            background: ${props=> props.theme.secundary_color};
        }

        @media (max-width: 750px){
            width: 100%;
        }

        @media (min-width: 1150px){
            width: 30%;
        }
    }

    
`
