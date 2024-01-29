import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.between_title_content.normal};
`

export const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${({theme}) => theme.spacing.between_elements.small};
    animation: fadeIn 1.5s;

    @media screen and (max-width: 862px) {
        gap: ${({theme}) => theme.spacing.between_elements.normal};
    }
`