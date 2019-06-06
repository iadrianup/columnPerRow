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
		const {
			controls: { customHtml }
		} = this.config;

		if (!customHtml) {
			const {
				controls: { container },
				controls: { breakpoints }
			} = this.config;

			const controlsWrapper = document.createElement('ul');
			let items = [];

			controlsWrapper.classList.add('cpr-controls');

			Object.keys(breakpoints).forEach(breakpoint => {
				const breakpointType = typeof breakpoints[breakpoint];
				if (breakpointType !== null) {
					breakpoints[breakpoint].opts.forEach(opt => {
						if (!items.includes(opt)) items.push(opt);
					});
				}
			});

			items.sort();

			const controlsHTML = items.forEach(item => {});

			/* <a href="#cpr_gallery" class="cpr-control" role="button" title="1 columns per row"
                                    aria-controls="cpr_controls" data-cpr="1">1</a> */
		}
	}

	getDefaults() {
		const defaults = {
			container: '.cpr-container', // Optional String
			controls: {
				container: null, // String
				customHtml: false, // Boolean
				breakpoints: {
					xs: null,
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
			}, // Optional
			transitions: false, // Optional Bool
			data: null // Optional Array
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
		customHtml: false, //String
		breakpoints: {
			xs: {
				opts: [1],
				default: 1
			},
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
