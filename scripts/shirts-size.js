(function () {

	const controlls = document.querySelectorAll('.buy-size__level');
	const activeClass = 'buy-size__level--active';

	controlls.forEach(function (control) {
		control.addEventListener('click', function (e) {
			e.preventDefault();

			controlls.forEach(function (link) {
				link.closest('.buy-size__level').classList.remove(activeClass);
			})

			control.closest('.buy-size__level').classList.add(activeClass);

		})
	})
}())