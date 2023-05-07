import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    overflow: hidden;

    .expand {
        transform: translateX(0%);
    }
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: linear-gradient(to bottom, ${({theme}) => theme.colors.primary}, ${({theme}) => theme.colors.secondary});
    padding: 8px;
    gap: 16px;
    z-index: 998;

    div {
        width: 50px;
        height: 50px;
        border: 2px solid white;
        border-radius: 50%;
        overflow: hidden;
    }

    p {
        text-align: center;
        font-size: 14px;
    }
`

export const Main = styled.div`
    background-color: ${({theme}) => theme.colors.card_background};
    padding: 12px;
    width: 400px;
    transition: linear .3s;
    transform: translateX(-100%);

    &:hover {
        transform: translateX(0%);
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    div span {
        font-size: 14px;
        font-style: italic;
        color: rgba(255, 255, 255, .7);
    }

    p {
        font-size: 14px;
    }
`

export const Skills = styled.div`
    margin-top: 12px;
    
    span {
        font-size: 14px;
        font-weight: 700;
    }

    .skills-wrapper {
        margin-top: 8px;
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
    }
`