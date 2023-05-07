import styled from "styled-components"
import bgIntro from "../../../assets/images/bg-intro.png"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 29.375rem;
    background-image: url(${bgIntro});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    h1 {
        text-transform: uppercase;
    }

    span {
        font-weight: 700;
        font-size: ${({theme}) => theme.fontSize.large};
    }

    @media screen and (max-width: 992px) {
        h1 {
            font-size: ${({theme}) => theme.fontSize.very_large};
            text-align: center;
        }
        
        span {
            font-size: ${({theme}) => theme.fontSize.base};
            text-align: center;
        }
    }

    @media screen and (max-width: 992px) {
        background-size: cover;
    }
`

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({theme}) => theme.spacing.margin.normal};
    gap: ${({theme}) => theme.spacing.between_elements.normal};

    a {
        width: 4.0625rem;
        height: 4.0625rem;
        padding: ${({theme}) => theme.spacing.padding.small};
        border: 0.125rem solid white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all linear .4s;
    }

    svg{
        fill: white;
        transition: all linear .5s;
    }

    .link-linkedin:hover{
        background: rgb(255, 255, 255);
    }

    .link-linkedin:hover svg{
        fill: rgb(10, 102, 194);
    }

    .link-github:hover{
        background: rgb(255, 255, 255);
    }

    .link-github:hover svg{
        fill: rgb(0, 0, 0);
    }

    .link-resume:hover{
        background: rgb(255, 255, 255);
    }

    .link-resume:hover svg{
        fill: rgb(214, 16, 0);
    }

    .link-email:hover{
        background: rgb(255, 255, 255);
    }

    .link-email:hover svg{
        fill: rgb(248, 156, 31);
    }

    @media screen and (max-width: 768px) {
        a {
            width: 3.4375rem;
            height: 3.4375rem;
        }
    }
`