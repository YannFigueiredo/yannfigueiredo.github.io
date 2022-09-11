function openProjectInfos() {
    var btnInfos = document.querySelector(".project-links-infos");
    var secondaryScreen = document.querySelector(".project-secondary-screen");

    btnInfos.addEventListener("click", () => {
        secondaryScreen.style.transform = "translateY(0%)";
    });
}

openProjectInfos();