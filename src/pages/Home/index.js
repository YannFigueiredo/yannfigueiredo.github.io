import { Container } from "../../components/shared/Container"
import Intro from "../../components/sections/Intro"
import About from "../../components/sections/About";

export default function Home() {
    return (
        <Container>
            <Intro />
            <About />
        </Container>
    );
}