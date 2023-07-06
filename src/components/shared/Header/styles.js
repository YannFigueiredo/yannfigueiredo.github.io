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

    #btn-open-menu, #btn-close-menu {
        display: none;
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        align-items: flex-start;
        justify-content: flex-end;

        .scroll {
            display: none;
        }

        nav {
            height: 0;
            overflow: hidden;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            transition: all linear .2s;
        }

        nav ul {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100vw;
            height: 100vh;
            padding: ${({theme}) => theme.spacing.padding.normal};
            font-size: ${({theme}) => theme.fontSize.large};
            background: linear-gradient(90deg, ${({theme}) => theme.colors.primary}, ${({theme}) => theme.colors.secondary});

        }

        #btn-open-menu {
            display: block;
            width: 2rem;
            fill: rgba(255, 255, 255, .4);
            z-index: 1000;
        }

        #btn-close-menu {
            display: none;
            color: white;
            position: absolute;
            right: 0;
            top: 1;
            margin-right: ${({theme}) => theme.spacing.margin.normal};
            z-index: 1000;
            width: 3rem;
            fill: rgba(255, 255, 255, .4);
            transition: all linear .3s;
        }

        #btn-open-menu:hover, #btn-close-menu:hover {
            fill: rgba(255, 255, 255, 1);
        }
    }
`