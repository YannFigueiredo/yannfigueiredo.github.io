import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({theme}) => theme.spacing.padding.small};
    background: linear-gradient(90deg, ${({theme}) => theme.colors.primary}, ${({theme}) => theme.colors.secondary});
    z-index: 999;

    .scroll{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        padding: ${({theme}) => theme.spacing.padding.very_small};
        background: linear-gradient(90deg, ${({theme}) => theme.colors.primary}, ${({theme}) => theme.colors.secondary});
    }

    nav ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: ${({theme}) => theme.spacing.between_elements.large}
    }

    nav ul a{
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        border-bottom: 0.125rem solid transparent;
        border-radius: 0.3125rem;
        transition: all linear .5s;
    }

    nav ul a:hover{
        color: rgba(255, 255, 255, 1);
        border-bottom: 0.125rem solid white;
    }

    nav ul li{
        list-style-type: none;
    }
`