class ColumnsPerRow {
	constructor(userConfig) {
		const defaults = this.getDefaults();
		const config =
			typeof userConfig == 'undefined'
				? defaults
				: this.mergeConfig(defaults, userConfig);

		this.config = config;
		this.init();
	}

	init() {
		this.buildControls();
	}

	buildControls() {
		const controls = this.config.controls;
		const breakpoints = controls.breakpoints;
		Object.keys(breakpoints).forEach(breakpoint => {
			const breakpointType = typeof breakpoints[breakpoint];
			if (breakpointType !== null) {
			}
		});
	}

	getDefaults() {
		const defaults = {
			container: '.cpr-container', // required
			controls: {
				container: '.cpr-controls', //String
				customHtml: null, //String
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
			transitions: false, // optional Bool
			data: null // optional Array
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
	container: '.cpr-gallery', // required
	controls: {
		container: '.cpr-custom-controls', //String
		// customHtml: null, //String
		breakpoints: {
			sm: {
				opts: [2],
				default: 2
			},
			md: {
				opts: [3, 4],
				default: 3
			},
			lg: {
				opts: [3, 4, 5],
				default: 3
			},
			xl: {
				opts: [4, 5, 6],
				default: 4
			}
		}
	}, // optional
	transitions: false, // optional Bool
	data: null // optional Array
});
