function openProjectInfos() {
    var secondaryScreen = document.querySelector(".project-secondary-screen");

    secondaryScreen.style.transform = "translateY(0%)";
}

function closeProjectInfos() {
    var secondaryScreen = document.querySelector(".project-secondary-screen");

    secondaryScreen.style.transform = "translateY(-100%)";
}