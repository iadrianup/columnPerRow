class ColumnsPerRow {
	constructor(userConfig) {
		let defaults = this.getDefaults();
		let config = this.mergeConfig(defaults, userConfig);
		return false;
	}

	getDefaults() {
		const defaults = {
			container: null, // required
			controls: {
				container: '.cpr-controls', // optional
				customHtml: null, // optional
				breakpoints: {
					sm: [1, 2],
					md: null,
					lg: [3, 4],
					xl: null
				} // optional
			},
			transitions: false
		};

		return defaults;
	}

	mergeConfig(defaults, userConfig) {
		let configMerged;
		let configMergedControls;
		const defaultBreakpoints = defaults.controls;

		if (userConfig.hasOwnProperty('controls')) {
			configMergedControls = Object.assign(defaults.controls, userConfig.controls);

			/* if (userConfig.controls.hasOwnProperty('breakpoints')) {
				const userBreakpoints = userConfig.controls.breakpoints;

				for (const breakpoint in defaultBreakpoints) {
					if (userBreakpoints.hasOwnProperty(breakpoint)) {
						mergedControls[breakpoint] = userBreakpoints[breakpoint];
					} else {
						mergedControls[breakpoint] = defaultBreakpoints[breakpoint];
					}
				}
			} else {
				mergedControls = defaultBreakpoints;
			} */
		} else {
			configMergedControls = defaultBreakpoints;
		}

		configMerged = Object.assign(defaults, userConfig);
		configMerged.controls = configMergedControls;
		return configMerged;
	}

	static updateGrid(control) {
		const galleryRef = control.getAttribute('href');
		const galleryWrapper = document.querySelector(galleryRef);
		if (document.body.contains(galleryWrapper)) {
			const columns = control.dataset.cpr;
			const text = galleryWrapper.classList.value;

			galleryWrapper.classList.replace(
				text.match(/cpr-xs-[0-9]/g)[0],
				'cpr-xs-' + columns
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
			ColumnsPerRow.updateGrid(control);
		})
	);
}

const cprGrid = new ColumnsPerRow({
	container: '.cpr-gallery',
	controls: {
		container: '.cpr-custom-controls',
		breakpoints: {
			sm: [1, 2],
			md: [2, 3],
			lg: [3, 4],
			xl: [4, 5]
		}
	},
	transitions: true
});
