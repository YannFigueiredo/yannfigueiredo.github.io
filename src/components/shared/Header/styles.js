import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: linear-gradient(90deg, rgb(118, 29, 122), rgb(88, 15, 163));

    .scroll{
        cursor: pointer;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 999;
        padding: 8px 15px;
        background: linear-gradient(90deg, rgb(118, 29, 122), rgb(88, 15, 163));
    }

    nav ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    nav ul a{
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        border-bottom: 2px solid transparent;
        border-radius: 5px;
        transition: all linear .5s;
    }

    nav ul a:hover{
        color: rgba(255, 255, 255, 1);
        border-bottom: 2px solid white;
    }

    nav ul li{
        list-style-type: none;
    }
`