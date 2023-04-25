import { ThemeProvider } from "styled-components";
import GlobalStyles from "../globalStyles";
import theme from "../styles/theme"

export const AppProviders = ({ children }) => {
    return (
        <ThemeProvider theme={theme} >
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}