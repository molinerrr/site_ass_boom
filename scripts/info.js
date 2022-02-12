(function () {
	const elem = document.querySelector('.desc');
	const iso = new Isotope(elem, {
		itemSelector: '.desc-item',
		filter: '.descrip'
	});

	const controlls = document.querySelectorAll('.info-item__link');
	const activeClass = 'info-item--active';

	controlls.forEach(function (control) {
		control.addEventListener('click', function (e) {
			e.preventDefault();

			const filterName = control.getAttribute("data-filter");

			controlls.forEach(function (link) {
				link.closest('.info-item').classList.remove(activeClass);
			})

			control.closest('.info-item').classList.add(activeClass);

			iso.arrange({
				filter: `.${filterName}`
			})
		})
	})
}())