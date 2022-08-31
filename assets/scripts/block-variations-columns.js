window.addEventListener('load', function () {

	/* Unregister native pattern. */
	wp.blocks.unregisterBlockVariation('core/columns', 'one-column-full');
	wp.blocks.unregisterBlockVariation('core/columns', 'two-columns-equal');
	wp.blocks.unregisterBlockVariation('core/columns', 'three-columns-equal');
	wp.blocks.unregisterBlockVariation('core/columns', 'two-columns-one-third-two-thirds');
	wp.blocks.unregisterBlockVariation('core/columns', 'two-columns-two-thirds-one-third');
	wp.blocks.unregisterBlockVariation('core/columns', 'three-columns-wider-center');

	/* Set up icon. */
	const el = wp.element.createElement;
	const SVG = wp.primitives.SVG;

	const icon_100 = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'm39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z',
		})
	);

	const icon_50_50 = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z',
		})
	);

	const icon_33_33_33 = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z',
		})
	);

	const icon_66_33 = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z',
		})
	);

	const icon_33_66 = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z',
		})
	);

	const icon_25_50_25 = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M41,13.8C41,12.807 40.193,12 39.2,12L8.8,12C7.807,12 7,12.807 7,13.8L7,34.2C7,35.193 7.807,36 8.8,36L39.2,36C40.193,36 41,35.193 41,34.2L41,13.8ZM15.159,14.011L9.074,14.011L9.074,34.027L15.159,34.027L15.159,14.011ZM17.004,14.011L17.004,34.027L31.024,34.027L31.024,14.011L17.004,14.011ZM32.869,14.011L32.869,34.027L38.978,34.027L38.978,14.011L32.869,14.011Z',
		})
	);

	const icon_50_25_25 = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M41,13.8C41,12.807 40.193,12 39.2,12L8.8,12C7.807,12 7,12.807 7,13.8L7,34.2C7,35.193 7.807,36 8.8,36L39.2,36C40.193,36 41,35.193 41,34.2L41,13.8ZM23.077,14.011L9.074,14.011L9.074,34.027L23.077,34.027L23.077,14.011ZM24.923,14.011L24.923,34.027L31.024,34.027L31.024,14.011L24.923,14.011ZM32.869,14.011L32.869,34.027L38.978,34.027L38.978,14.011L32.869,14.011Z',
		})
	);

	const icon_25_25_50 = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M41,13.8C41,12.807 40.193,12 39.2,12L8.8,12C7.807,12 7,12.807 7,13.8L7,34.2C7,35.193 7.807,36 8.8,36L39.2,36C40.193,36 41,35.193 41,34.2L41,13.8ZM15.159,14.011L9.074,14.011L9.074,34.027L15.159,34.027L15.159,14.011ZM17.004,14.011L17.004,34.027L23.077,34.027L23.077,14.011L17.004,14.011ZM24.923,14.011L24.923,34.027L38.978,34.027L38.978,14.011L24.923,14.011Z',
		})
	);

	const icon_25_75 = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M41,13.8C41,12.807 40.193,12 39.2,12L8.8,12C7.807,12 7,12.807 7,13.8L7,34.2C7,35.193 7.807,36 8.8,36L39.2,36C40.193,36 41,35.193 41,34.2L41,13.8ZM15.15,14.011L9.074,14.011L9.074,34.027L15.15,34.027L15.15,14.011ZM16.995,14.011L16.995,34.027L38.978,34.027L38.978,14.011L16.995,14.011Z',
		})
	);

	const icon_75_25 = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M41,13.8C41,12.807 40.193,12 39.2,12L8.8,12C7.807,12 7,12.807 7,13.8L7,34.2C7,35.193 7.807,36 8.8,36L39.2,36C40.193,36 41,35.193 41,34.2L41,13.8ZM31.028,14.011L9.074,14.011L9.074,34.027L31.028,34.027L31.028,14.011ZM32.873,14.011L32.873,34.027L38.978,34.027L38.978,14.011L32.873,14.011Z',
		})
	);

	
	const icon_25_25_25_25 = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M41,13.8C41,12.807 40.193,12 39.2,12L8.8,12C7.807,12 7,12.807 7,13.8L7,34.2C7,35.193 7.807,36 8.8,36L39.2,36C40.193,36 41,35.193 41,34.2L41,13.8ZM15.159,14.011L9.074,14.011L9.074,34.027L15.159,34.027L15.159,14.011ZM17.004,14.011L17.004,34.027L23.077,34.027L23.077,14.011L17.004,14.011ZM24.923,14.011L24.923,34.027L31.024,34.027L31.024,14.011L24.923,14.011ZM32.869,14.011L32.869,34.027L38.978,34.027L38.978,14.011L32.869,14.011Z',
		})
	);

	/* Register custom pattern. */
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'column-100',
		attributes: {
			className: 'column-100',
		},
		title: '100',
		icon: icon_100,
		innerBlocks: [
			[ 'core/column', { className: 'is-100' } ],
		],
		scope: [ 'block' ],
	});
	
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'columns-50-50',
		attributes: {
			className: 'columns-50-50',
		},
		title: '50 / 50',
		icon: icon_50_50,
		innerBlocks: [
			[ 'core/column', { className: 'is-50', width: '50%' } ],
			[ 'core/column', { className: 'is-50', width: '50%' } ],
		],
		scope: [ 'block' ],
	});
		
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'columns-66-33',
		attributes: {
			className: 'columns-66-33',
		},
		title: '66 / 33',
		icon: icon_66_33,
		innerBlocks: [
			[ 'core/column', { className: 'is-66', width: '66.66%' } ],
			[ 'core/column', { className: 'is-33', width: '33.33%' } ],
		],
		scope: [ 'block' ],
	});
		
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'columns-33-66',
		attributes: {
			className: 'columns-33-66',
		},
		title: '33 / 66',
		icon: icon_33_66,
		innerBlocks: [
			[ 'core/column', { className: 'is-33', width: '33.33%' } ],
			[ 'core/column', { className: 'is-66', width: '66.66%' } ],
		],
		scope: [ 'block' ],
	});
		
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'columns-33-33-33',
		attributes: {
			className: 'columns-33-33-33',
		},
		title: '33 / 33 / 33',
		icon: icon_33_33_33,
		innerBlocks: [
			[ 'core/column', { className: 'is-33', width: '33.33%' } ],
			[ 'core/column', { className: 'is-33', width: '33.33%' } ],
			[ 'core/column', { className: 'is-33', width: '33.33%' } ],
		],
		scope: [ 'block' ],
	});
	
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'columns-50-25-25',
		attributes: {
			className: 'columns-50-25-25',
		},
		title: '50 / 25 / 25',
		icon: icon_50_25_25,
		innerBlocks: [
			[ 'core/column', { className: 'is-50', width: '50%' } ],
			[ 'core/column', { className: 'is-25', width: '25%' } ],
			[ 'core/column', { className: 'is-25', width: '25%' } ],
		],
		scope: [ 'block' ],
	});
		
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'columns-25-25-50',
		attributes: {
			className: 'columns-25-25-50',
		},
		title: '25 / 25 / 50',
		icon: icon_25_25_50,
		innerBlocks: [
			[ 'core/column', { className: 'is-25', width: '25%' } ],
			[ 'core/column', { className: 'is-25', width: '25%' } ],
			[ 'core/column', { className: 'is-50', width: '50%' } ],
		],
		scope: [ 'block' ],
	});
	
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'columns-25-50-25',
		attributes: {
			className: 'columns-25-50-25',
		},
		title: '25 / 50 / 25',
		icon: icon_25_50_25,
		innerBlocks: [
			[ 'core/column', { className: 'is-25', width: '25%' } ],
			[ 'core/column', { className: 'is-50', width: '50%' } ],
			[ 'core/column', { className: 'is-25', width: '25%' } ],
		],
		scope: [ 'block' ],
	});
	
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'columns-75-25',
		attributes: {
			className: 'columns-75-25',
		},
		title: '75 / 25',
		icon: icon_75_25,
		innerBlocks: [
			[ 'core/column', { className: 'is-75', width: '75%' } ],
			[ 'core/column', { className: 'is-25', width: '25%' } ],
		],
		scope: [ 'block' ],
	});
		
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'columns-25-75',
		attributes: {
			className: 'columns-25-75',
		},
		title: '25 / 75',
		icon: icon_25_75,
		innerBlocks: [
			[ 'core/column', { className: 'is-25', width: '25%' } ],
			[ 'core/column', { className: 'is-75', width: '75%' } ],
		],
		scope: [ 'block' ],
	});
	
	
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'columns-25-25-25-25',
		attributes: {
			className: 'columns-25-25-25-25',
		},
		title: '25-25-25-25',
		icon: icon_25_25_25_25,
		innerBlocks: [
			[ 'core/column', { className: 'is-25', width: '25%' } ],
			[ 'core/column', { className: 'is-25', width: '25%' } ],
			[ 'core/column', { className: 'is-25', width: '25%' } ],
			[ 'core/column', { className: 'is-25', width: '25%' } ],
		],
		scope: [ 'block' ],
	});
});