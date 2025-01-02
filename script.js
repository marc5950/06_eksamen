var btn = document.querySelector("#tiltop");

window.addEventListener("scroll", function () {
	if (window.scrollY > 300) {
		btn.classList.add("show");
	} else {
		btn.classList.remove("show");
	}
});

btn.addEventListener("click", function (e) {
	e.preventDefault();
	window.scrollTo({ top: 0 });
});
