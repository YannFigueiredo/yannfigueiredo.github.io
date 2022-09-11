function openProjectInfos(id) {
    var projects = document.querySelectorAll(".projects-cards .project-card");

    var secondaryScreen = projects[id].querySelector(".project-secondary-screen");

    secondaryScreen.style.transform = "translateY(0%)";
}

function closeProjectInfos(id) {
    var projects = document.querySelectorAll(".projects-cards .project-card");

    var secondaryScreen = projects[id].querySelector(".project-secondary-screen");

    secondaryScreen.style.transform = "translateY(-100%)";
}