const cprGrid = new ColumnsPerRow({
	container: '.cpr-gallery', // required String
	controls: {
		customHtml: false, // String
		container: '.cpr-custom-controls', // String
		label: 'Ver:', // String
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
	transitions: true // optional Bool
});
