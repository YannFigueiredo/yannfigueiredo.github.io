import { useEffect, useRef } from "react";
import { Container } from "./styles";
import MenuIcon from "assets/icons/Menu";
import CloseButtonIcon from "assets/icons/CloseButton";

export default function Header() {
    const menu = useRef(null);

    const openMenu = () => {
        menu.current.style.height = "auto";
        document.querySelector("#btn-open-menu").classList.add("btn-hidden");
        document.querySelector("#btn-close-menu").classList.remove("btn-hidden");

        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        menu.current.style.height = "0";
        document.querySelector("#btn-open-menu").classList.remove("btn-hidden");
        document.querySelector("#btn-close-menu").classList.add("btn-hidden");

        document.body.style.overflow = "auto";
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 500) {
                openMenu();
                document.body.style.overflow = "auto";
                document.querySelector("#btn-close-menu").classList.add("btn-hidden");
            } else {
                closeMenu();
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
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

                if (window.innerWidth <= 500)
                    closeMenu();
            });
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container data-testid="header">
            <MenuIcon id="btn-open-menu" className="btn-hidden" onClick={openMenu} />
            <CloseButtonIcon id="btn-close-menu" className="btn-hidden" onClick={closeMenu} />
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