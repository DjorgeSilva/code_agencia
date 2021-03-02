import styled from "styled-components"
import contatoIMG from "../../img/about-banner.png"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    
`

export const WrapBanner = styled.div`
    width: 100%;
    height: 70vh;

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
    width: 80%;
    height: fit-content;
    background: #fff;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 5px;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 770px){
        height: 260px;
        flex-direction: row;
        
    }

    img{
        width: 100px;
        margin-right: 20px;

        
    @media (max-width: 750px){
        margin: 20px 0; 
    }
    }


    h5{
        font-size: clamp(2rem, 2.5vw, 4rem);
        color: #95347E;

        @media (max-width: 750px){
            text-align: center;
        }
   }

   h6{
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        margin-top: 10px;
        color: #696969;

        @media (max-width: 750px){
            text-align: center;
            margin: 20px 0;
        }
   }

   span{
       font-weight: 500;
   }
`