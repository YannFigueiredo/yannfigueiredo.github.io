import styled from "styled-components"

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({theme}) => theme.spacing.padding.small};
    background: linear-gradient(90deg, ${({theme}) => theme.colors.primary}, ${({theme}) => theme.colors.secondary});
`