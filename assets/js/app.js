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
				opts: [3, 5, 6],
				default: 3
			}
		}
	}, // optional
	transitions: true // optional Bool
});
