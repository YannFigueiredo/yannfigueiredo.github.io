import { useEffect, useRef } from "react";
import { Container } from "./styles";

export default function Header() {
    const menu = useRef(null);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 200) {
                menu.current.classList.add("scroll");
            } else {
                menu.current.classList.remove("scroll");
            }
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <Container >
            <nav ref={menu}>
                <ul>
                    <a href="#about"><li>Sobre mim</li></a>
                    <a href="#skills"><li>Conhecimento</li></a>
                    <a href="#projects"><li>Projetos</li></a>
                </ul>
            </nav>
        </Container>
    );
}