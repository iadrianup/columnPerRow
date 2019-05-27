class CPR {
	static updateGrid(control) {
		const galleryRef = control.getAttribute('href');
		const galleryWrapper = document.querySelector(galleryRef);
		if (document.body.contains(galleryWrapper)) {
			const columns = control.dataset.cpr;
			const text = galleryWrapper.classList.value;

			galleryWrapper.classList.replace(
				text.match(/cpr-[0-9]/g)[0],
				'cpr-' + columns
			);

			galleryWrapper.classList.replace(
				text.match(/cpr-lg-[0-9]/g)[0],
				'cpr-lg-' + columns
			);
		}
	}
}

const cprControls = document.querySelectorAll('.cpr-control');

if (cprControls.length) {
	cprControls.forEach(control =>
		control.addEventListener('click', e => {
			e.preventDefault();
			CPR.updateGrid(control);
		})
	);
}
