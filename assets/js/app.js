new ColumnsPerRow({
	container: '.cpr-gallery', // required String
	transitions: true, // optional Bool
	controls: {
		container: '.cpr-custom-controls', // String
		label: 'Ver # productos:', // String
		breakpoints: {
			xs: {
				opts: [1, 2], // Array
				default: 1 // Number
			}, // Object
			sm: {
				opts: [2, 3], // Array
				default: 2 // Number
			}, // Object
			md: {
				opts: [3, 4], // Array
				default: 3 // Number
			}, // Object
			lg: {
				opts: [3, 4, 5], // Array
				default: 3 // Number
			}, // Object
			xl: {
				opts: [4, 5, 6], // Array
				default: 4 // Number
			} // Object
		} // Object
	} // optionals
});
