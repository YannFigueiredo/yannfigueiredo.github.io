import styled from "styled-components"

export const Container = styled.article`
    width: 25rem;
    height: 31.25rem;
    border: 0.0625rem solid white; 
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 480px) {
        width: auto;
    }
`

export const MainScreen = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Thumb = styled.div`
    height: 21rem;
    overflow: hidden;
`

export const Content = styled.div`
    padding: 0.625rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        fill: rgba(255, 255, 255, .5);
        transition: all linear .3s;
    }

    .links-app {
        display: flex;
        gap: 0.5rem;
    }

    .links-app a, .link-info {
        display: flex;
        align-items: center;
        width: 30px;
        cursor: pointer;
    }

    .links-app a:hover svg, .link-info:hover svg {
        fill: rgba(255, 255, 255, 1);
    }
`

export const SecondaryScreen = styled.div`
    background: rgba(0, 0, 0, .8);
    color: black;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 1.5625rem;
    transition: all linear .3s;
    overflow: hidden;
    transform: translateY(-100%);
    color: white;

    .btn-close{
        width: 1.875rem;
        fill: rgba(255, 255, 255, .4);
        right: 0;
        cursor: pointer;
        transition: all linear .3s;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 0.625rem;
        margin-right: 0.625rem;
    }

    .btn-close:hover{
        fill: rgba(255, 255, 255, 1); 
    }
`



