import styled from "styled-components"

export const Container = styled.div`
    max-width: ${props => props.large ? 'auto' : '21.875rem'};
    border: 0.0625rem solid white;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.card_background};
    overflow: hidden;
`

export const Header = styled.div`
    margin-bottom: 0.625rem;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    padding: 0.625rem;
`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.625rem;
    gap: 0.5rem;

    .skill {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        width: 4.0625rem;

        img {
            width: 100%;
        }

        span {
            display: none;
        }

        @media screen and (max-width: 480px) {
            span {
                display: inline-block;
                font-size: 0.75rem;
            }
        }
    }
`