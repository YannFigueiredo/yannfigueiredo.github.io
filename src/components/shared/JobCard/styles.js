import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  overflow: hidden;
  border-radius: 0.5rem;
  height: 30rem;

  .expand {
    width: 25rem;
    transform: translateX(0);
    margin-right: 0;
    opacity: 1;
  }

  .header-restyle {
    border-right: none;
    border-radius: 0.5rem 0 0 0.5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  padding: ${({ theme }) => theme.spacing.padding.very_small};
  gap: ${({ theme }) => theme.spacing.between_elements.normal};
  z-index: 998;
  border: 0.0625rem solid white;
  border-radius: 0.5rem;

  div {
    width: 3.125rem;
    height: 3.125rem;
    border: 0.125rem solid white;
    border-radius: 50%;
    overflow: hidden;
  }

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`;

export const Main = styled.div`
  background-color: ${({ theme }) => theme.colors.card_background};
  padding: ${({ theme }) => theme.spacing.padding.small};
  transition: transform linear 0.3s;
  width: 0;
  opacity: 0;
  transform: translateX(-100%);
  border-top: 0.0625rem solid white;
  border-bottom: 0.0625rem solid white;
  border-right: 0.0625rem solid white;
  border-radius: 0 0.5rem 0.5rem 0;
  margin-right: -1.5rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.between_elements.normal};

  div span {
    font-size: 14px;
    font-style: italic;
    color: rgba(255, 255, 255, 0.7);
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`;

export const Skills = styled.div`
  margin-top: ${({ theme }) => theme.spacing.margin.small};

  span {
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-weight: 700;
  }

  .skills-wrapper {
    margin-top: ${({ theme }) => theme.spacing.margin.very_small};
    display: flex;
    gap: ${({ theme }) => theme.spacing.between_elements.very_small};
    flex-wrap: wrap;
  }
`;
