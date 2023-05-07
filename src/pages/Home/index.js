import { Container } from "../../components/shared/Container";
import Intro from "../../components/sections/Intro";
import About from "../../components/sections/About";
import Skills from "../../components/sections/Skills";
import Projects from "components/sections/Projects";

export default function Home() {
    return (
        <Container>
            <Intro />
            <About />
            <Skills />
            <Projects />
        </Container>
    );
}