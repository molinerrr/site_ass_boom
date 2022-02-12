(function () {
	const elem = document.querySelector('.buy-shirt__list');
	const iso = new Isotope(elem, {
		itemSelector: '.buy-shirt__item',
		filter: '.black'
	});

	const controlls = document.querySelectorAll('.buy-color__link');
	const activeClass = 'buy-color__item--active';

	controlls.forEach(function (control) {
		control.addEventListener('click', function (e) {
			e.preventDefault();

			const filterName = control.getAttribute("data-filter");

			controlls.forEach(function (link) {
				link.closest('.buy-color__item').classList.remove(activeClass);
			})

			control.closest('.buy-color__item').classList.add(activeClass);

			iso.arrange({
				filter: `.${filterName}`
			})
		})
	})
}())