const profile = document.getElementById("profile");
const button_timeline = document.getElementById("button-timeline");
const modal_timeline = document.getElementById("modal-timeline");
const button_timeline_close = document.getElementById("button-timeline-close");
const button_theme = document.getElementById("button-theme");

let mouseX = (mouseY = 32.5);

let profileX = (profileY = 0);

let profileAnimationId;

function moveProfile() {
    const speed = 0.05;
    profileX += (mouseX / 2 - profileX) * speed;
    profileY += (mouseY / 2 - profileY) * speed;

    profile.style.backgroundPosition = `${profileX}px ${profileY}px`;

    profileAnimationId = requestAnimationFrame(moveProfile);
}

profile.addEventListener("mousemove", (event) => {
    mouseX = event.offsetX;
    mouseY = event.offsetY;
});

profile.addEventListener("mouseenter", moveProfile);

profile.addEventListener("mouseout", () => {
    profile.style.backgroundPosition = "center";
    cancelAnimationFrame(profileAnimationId);
    mouseX = mouseY = 32.5;
    profileX = profileY = 0;
});

function toggleModal(modal, onlyClose = false) {
    if (onlyClose == false) {
        if (modal.classList.contains("show-modal")) {
            modal.classList.remove("show-modal");
            modal.classList.add("hidden-modal");
            modal.children[0].style.transform = "translateY(30%)";
        } else {
            modal.classList.remove("hidden-modal");
            modal.classList.add("show-modal");
            modal.children[0].style.transform = "translateY(0)";
        }
    } else {
        modal.classList.remove("show-modal");
        modal.classList.add("hidden-modal");
        modal.children[0].style.transform = "translateY(30%)";
    }
}

button_timeline.addEventListener("click", () => {
    toggleModal(modal_timeline);
});

button_timeline_close.addEventListener("click", () => {
    toggleModal(modal_timeline);
});

document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        toggleModal(modal_timeline, true);
    }
});

modal_timeline.children[1].addEventListener("click", () => {
    toggleModal(modal_timeline, true);
});

function setTheme(_theme) {
    if (_theme == undefined) {
        if (localStorage.getItem("userTheme") == undefined) {
            localStorage.setItem(
                "userTheme",
                window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
            );
        }
    } else {
        localStorage.setItem("userTheme", _theme);
    }

    document.documentElement.setAttribute("color-theme", localStorage.getItem("userTheme"));
    if (localStorage.getItem("userTheme") == "dark") {
        button_theme.children[0].classList.remove("ph-sun-dim");
        button_theme.children[0].classList.add("ph-moon");
    } else {
        button_theme.children[0].classList.remove("ph-moon");
        button_theme.children[0].classList.add("ph-sun-dim");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTheme();
});

button_theme.addEventListener("click", () => {
    setTheme(localStorage.getItem("userTheme") == "dark" ? "light" : "dark");
});
