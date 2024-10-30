let button_timeline, modal_timeline, button_timeline_close;

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

export function modal() {
	button_timeline = document.getElementById("button-timeline");
	modal_timeline = document.getElementById("modal-timeline");
	button_timeline_close = document.getElementById("button-timeline-close");

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
}
