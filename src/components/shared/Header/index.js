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

        const links = document.querySelectorAll('a[href^="#"]');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function (event) {
                event.preventDefault();

                const href = this.getAttribute("href");
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop;

                window.scrollTo({
                    top: offsetTop - 70,
                    behavior: "smooth"
                });
            });
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <Container data-testid="header">
            <nav ref={menu} data-testid="menu-header">
                <ul>
                    <a href="#about"><li>Sobre mim</li></a>
                    <a href="#skills"><li>Conhecimento</li></a>
                    <a href="#projects"><li>Projetos</li></a>
                </ul>
            </nav>
        </Container>
    );
}