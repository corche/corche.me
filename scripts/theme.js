let button_theme;

function setTheme(_theme) {
	if (_theme == undefined) {
		if (localStorage.getItem("userTheme") == undefined) {
			localStorage.setItem(
				"userTheme",
				window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light"
			);
		}
	} else {
		localStorage.setItem("userTheme", _theme);
	}

	document.documentElement.setAttribute(
		"color-theme",
		localStorage.getItem("userTheme")
	);
	if (localStorage.getItem("userTheme") == "dark") {
		button_theme.children[0].classList.remove("ph-sun-dim");
		button_theme.children[0].classList.add("ph-moon");
	} else {
		button_theme.children[0].classList.remove("ph-moon");
		button_theme.children[0].classList.add("ph-sun-dim");
	}
}

export function theme() {
	button_theme = document.getElementById("button-theme");

	document.addEventListener("DOMContentLoaded", () => {
		setTheme();
	});

	button_theme.addEventListener("click", () => {
		setTheme(
			localStorage.getItem("userTheme") == "dark" ? "light" : "dark"
		);
	});
}
