import styled from 'styled-components'

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

    h1{
        margin: 30px 0;
        color: ${props => props.theme.secundary_color};
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
            background:  ${props => props.theme.ternary_color};;
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
            margin-top: 60px;
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
    width: 90%;
    height: 400px;
    background: ${props => props.theme.secundary_color};
    border-radius: 5px;
    margin: 20px auto;
    padding: 0 10px;

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