import { useEffect, useRef } from "react";
import { Container } from "./styles";
import MenuIcon from "assets/icons/Menu";
import CloseButtonIcon from "assets/icons/CloseButton";

export default function Header() {
    const menu = useRef(null);

    const openMenu = () => {
        menu.current.style.height = "100%"; 
        document.querySelector("#btn-open-menu").style.display = "none";
        document.querySelector("#btn-close-menu").style.display = "block";

        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        menu.current.style.height = "0"; 
        document.querySelector("#btn-open-menu").style.display = "block";
        document.querySelector("#btn-close-menu").style.display = "none";

        document.body.style.overflow = "auto";
    };

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
            <MenuIcon id="btn-open-menu" onClick={openMenu} />
            <CloseButtonIcon id="btn-close-menu" onClick={closeMenu} />
            <nav ref={menu} data-testid="menu-header">
                <ul>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#jobs">Experiência</a></li>
                    <li><a href="#skills">Conhecimento</a></li>
                    <li><a href="#projects">Projetos</a></li>
                </ul>
            </nav>
        </Container>
    );
}