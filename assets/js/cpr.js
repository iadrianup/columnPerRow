class ColumnsPerRow {
	constructor(userConfig) {
		let defaults = this.getDefaults();
		let config = this.mergeConfig(defaults, userConfig);

		this.config = config;
		this.init();
	}

	getDefaults() {
		const defaults = {
			container: null, // required
			controls: {
				container: '.cpr-controls',
				customHtml: null,
				breakpoints: {
					sm: {
						opts: [1, 2],
						default: 2
					},
					md: null,
					lg: {
						opts: [3, 4],
						default: 3
					},
					xl: null
				}
			}, // optional
			transitions: false // optional
		};

		return defaults;
	}

	mergeConfig(defaults, userConfig) {
		let configMerged;
		let configMergedControls;
		let configMergedControlsBreakpoints;

		if (userConfig.hasOwnProperty('controls')) {
			if (userConfig.controls.hasOwnProperty('breakpoints')) {
				configMergedControlsBreakpoints = Object.assign(
					defaults.controls.breakpoints,
					userConfig.controls.breakpoints
				);
			} else {
				configMergedControlsBreakpoints = defaults.controls.breakpoints;
			}
			configMergedControls = Object.assign(defaults.controls, userConfig.controls);
		} else {
			configMergedControls = defaults.controls;
			configMergedControlsBreakpoints = defaults.controls.breakpoints;
		}

		configMerged = Object.assign(defaults, userConfig);
		configMerged.controls = configMergedControls;
		configMerged.controls.breakpoints = configMergedControlsBreakpoints;
		return configMerged;
	}

	init() {
		console.log(this.config);
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
		container: '.cpr-custom-controls'
	},
	transitions: true
});
