let profile_image;

let mouseX = 32.5,
	mouseY = 32.5;

let profileX = 0,
	profileY = 0;

let profileAnimationId;

function moveProfile() {
	const speed = 0.05;
	profileX += (mouseX / 2 - profileX) * speed;
	profileY += (mouseY / 2 - profileY) * speed;

	profile_image.style.backgroundPosition = `${profileX}px ${profileY}px`;

	profileAnimationId = requestAnimationFrame(moveProfile);
}

export function profile() {
	profile_image = document.getElementById("profile");

	profile_image.addEventListener("mousemove", (event) => {
		mouseX = event.offsetX;
		mouseY = event.offsetY;
	});

	profile_image.addEventListener("mouseenter", moveProfile);

	profile_image.addEventListener("mouseout", () => {
		profile_image.style.backgroundPosition = "0 0";
		cancelAnimationFrame(profileAnimationId);
		mouseX = mouseY = 32.5;
		profileX = profileY = 0;
	});
}
