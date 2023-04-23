import { Container } from "../../components/shared/Container"
import Intro from "../../components/sections/Intro"
import About from "../../components/sections/About";
import Skills from "../../components/sections/Skills";

export default function Home() {
    return (
        <Container>
            <Intro />
            <About />
            <Skills />
        </Container>
    );
}