import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.between_title_content.normal};
`

export const SkillsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: ${({theme}) => theme.spacing.between_elements.small};

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 85%);
        justify-content: center;
        gap: ${({theme}) => theme.spacing.between_elements.normal};
    }
`