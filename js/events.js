var mainHeader = document.getElementById("main-header");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if(window.scrollY > 200){
        mainHeader.classList.add("main-header-scroll");
    }else if(window.scrollY <= 200 & mainHeader.classList.contains("main-header-scroll") ){
        mainHeader.classList.remove("main-header-scroll")
    }
});

window.addEventListener("resize", () => {console.log(window.innerWidth)});