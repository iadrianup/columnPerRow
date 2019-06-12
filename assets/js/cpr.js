class ColumnsPerRow {
	constructor(userConfig) {
		const defaults = this.getDefaults();
		this.config =
			typeof userConfig == 'undefined'
				? defaults
				: this.mergeConfig(defaults, userConfig);

		this.buildControls();
		this.buildGallery();
		this.handleControls();
	}

	buildControls() {
		const {
			controls: { customHtml }
		} = this.config;

		if (!customHtml) {
			const {
				container,
				controls: { container: containerControls },
				controls: { breakpoints }
			} = this.config;

			const controlsWrapper = document.createElement('ul');
			controlsWrapper.classList.add('cpr-controls');

			const containerEl = document.querySelector(container);
			const containerId = containerEl.getAttribute('id');

			let controls = [];

			Object.keys(breakpoints).forEach(breakpoint => {
				const breakpointType = typeof breakpoints[breakpoint];
				if (breakpointType !== null) {
					breakpoints[breakpoint].opts.forEach(opt => {
						let control = controls.find(index => index.opt == opt);
						if (control) {
							control.classes += 'visible-' + breakpoint + ' ';
						} else {
							let newControl = {
								opt: opt,
								classes: 'visible-' + breakpoint + ' '
							};
							controls.push(newControl);
						}
					});
				}
			});

			controls.sort();

			let controlsHTML = '<li>Ver:</li>';

			controls.forEach(control => {
				let classes = control.classes.replace(/\s+$/, '');
				controlsHTML += `
                <li class="${classes}"><a href="#${containerId}" class="cpr-control" role="button" title="${
					control.opt
				} columns per row" aria-controls="${containerId}" data-cpr="${
					control.opt
				}">${control.opt}</a></li>`;
			});

			controlsWrapper.innerHTML = controlsHTML;

			let parentEl;
			if (containerControls !== null) {
				parentEl = document.querySelector(containerControls);
				parentEl.prepend(controlsWrapper);
			} else {
				parentEl = containerEl.parentNode;
				parentEl.insertBefore(controlsWrapper, containerEl);
			}
		}
	}

	buildGallery() {
		const {
			container,
			controls: { breakpoints },
			transitions
		} = this.config;

		const containerEl = document.querySelector(container);
		containerEl.classList.add('cpr-grid');

		Object.keys(breakpoints).forEach(breakpoint => {
			const breakpointType = typeof breakpoints[breakpoint];
			if (breakpointType !== null) {
				containerEl.classList.add(
					'cpr-' + breakpoint + '-' + breakpoints[breakpoint].default
				);
			}
		});

		if (transitions) {
			containerEl.classList.add('cpr-transitions');
		}
	}

	handleControls() {
		const { container } = this.config;
		const containerId = document.querySelector(container).getAttribute('id');
		const cprControls = document.querySelectorAll(
			'.cpr-control[aria-controls="' + containerId + '"]'
		);

		if (cprControls.length) {
			cprControls.forEach(control =>
				control.addEventListener('click', e => {
					e.preventDefault();
					ColumnsPerRow.updateGrid(
						control,
						ColumnsPerRow.getCurrentBreakpoint()
					);
				})
			);
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

	static getCurrentBreakpoint() {
		let currentSize = window.screen.width,
			xs = getComputedStyle(document.documentElement).getPropertyValue('--cpr-xs'),
			sm = getComputedStyle(document.documentElement).getPropertyValue('--cpr-sm'),
			md = getComputedStyle(document.documentElement).getPropertyValue('--cpr-md'),
			lg = getComputedStyle(document.documentElement).getPropertyValue('--cpr-lg'),
			xl = getComputedStyle(document.documentElement).getPropertyValue('--cpr-xl');

		if (
			window.matchMedia('(min-width: ' + xs + ') and (max-width: ' + sm + ')')
				.matches
		) {
			currentSize = 'xs';
		} else if (
			window.matchMedia('(min-width: ' + sm + ') and (max-width: ' + md + ')')
				.matches
		) {
			currentSize = 'sm';
		} else if (
			window.matchMedia('(min-width: ' + md + ') and (max-width: ' + lg + ')')
				.matches
		) {
			currentSize = 'md';
		} else if (
			window.matchMedia('(min-width: ' + lg + ') and (max-width: ' + xl + ')')
				.matches
		) {
			currentSize = 'lg';
		} else if (window.matchMedia('(min-width: ' + xl + ')').matches) {
			currentSize = 'xl';
		}

		return currentSize;
	}

	static updateGrid(control, breakpoint) {
		const galleryRef = control.getAttribute('href');
		const galleryWrapper = document.querySelector(galleryRef);
		if (document.body.contains(galleryWrapper)) {
			const columns = control.dataset.cpr;
			const text = galleryWrapper.classList.value;

			galleryWrapper.classList.replace(
				text.match(
					new RegExp('cpr[-](' + breakpoint + ')[-](0?[1-9]|1[012])')
				)[0],
				'cpr-' + breakpoint + '-' + columns
			);
		}
	}
}

const cprGrid = new ColumnsPerRow({
	container: '.cpr-gallery', // required String
	controls: {
		container: '.cpr-custom-controls', // String
		customHtml: false, // String
		breakpoints: {
			xs: {
				opts: [1, 2],
				default: 1
			},
			sm: {
				opts: [2, 3],
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
	transitions: false // optional Bool
});
