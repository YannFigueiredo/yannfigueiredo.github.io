import styled from "styled-components"

export const Container = styled.div`
    padding: ${({theme}) => theme.spacing.padding.very_large} ${({theme}) => theme.spacing.padding.normal};
    display: flex;
    flex-direction: column;
    gap: 3.125rem;
`