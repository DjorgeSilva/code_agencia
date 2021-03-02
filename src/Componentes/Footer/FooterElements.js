import styled from "styled-components"
import {Link} from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: fit-content;    
    color: #fff;
    margin-top: 0;
    
    @media (min-width: 1200px){
        width: 1200px;
        margin: 0 auto;
    }
    .Coluna{
        margin: 20px 25px; 

        h4{
            font-size: 1.5rem;
            color: #67FFF0;
        }

        nav{
            width: 100%;
            height: fit-content;
            margin-top: 20px;
            ul{
                list-style:none;
                li{
                    height: 35px;
                }
            }
        }

        .nav_rede_social{
            ul{
                width: 200px;
                margin: 0 auto;
                li{
                    width: 25%;
                    display: inline-block;
                    img{
                        width: 30px;
                    }
                }
            }
        }
        p{
            cursor: pointer;
            height: 18px;
        }
        hr{
            width: 90%;
            border: 2px solid #67FFF0;
            margin: 30px 0;
        }
        h6{
            font-size: 1.2rem;
            text-align: center;
            color: #67FFF0;
            margin-bottom: 40px;
        }
    }

    .endereco{
        width: 100%;
    }
`
export const Links = styled(Link)`
    font-size: 1.2rem;
    text-align: center;
    margin-right: 15px;
    color: #fff;

    &:hover{
        color: #67FFF0;
    }
    
`
