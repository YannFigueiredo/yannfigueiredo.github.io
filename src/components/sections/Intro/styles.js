import styled from "styled-components"
import bgIntro from "../../../asserts/images/bg-intro.png"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 470px;
    background-image: url(${bgIntro});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    h1 {
        font-weight: 700;
        font-size: 2.95em;
        text-transform: uppercase;
    }

    span {
        font-weight: 700;
        font-size: 1.5em;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-weight: 700;
            font-size: 2.5em;
            text-transform: uppercase;
            text-align: center;
        }
        
        span {
            font-weight: 700;
            font-size: 1em;
            text-align: center;
        }
    }

    @media screen and (max-width: 992px) {
        #intro{
            background-size: cover;
        }
    }
`

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 15px;

    a {
        width: 65px;
        height: 65px;
        padding: 12px;
        border: 2px solid white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all linear .4s;
    }

    svg{
        fill: white;
        margin: auto;
        transition: all linear .5s;
    }

    .link-linkedin:hover{
        background: white;
    }

    .link-linkedin:hover svg{
        fill: rgb(10, 102, 194);
    }

    .link-github:hover{
        background: white;
    }

    .link-github:hover svg{
        fill: black;
    }

    .link-resume:hover{
        background: white;
    }

    .link-resume:hover svg{
        fill: red;
    }

    .link-email:hover{
        background: white;
    }

    .link-email:hover svg{
        fill: rgb(248, 156, 31);
    }

    @media screen and (max-width: 768px) {
        a {
            width: 55px;
            height: 55px;
            padding: 12px;
        }
    }
`