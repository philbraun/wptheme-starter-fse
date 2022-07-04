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

	const iconColumnsOneFull = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'm39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z',
		})
	);

	const iconColumnsTwoEqual = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z',
		})
	);

	const iconColumnsThreeEqual = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z',
		})
	);

	const iconColumnsTwoThirdsOneThird = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z',
		})
	);

	const iconColumnsOneThirdTwoThirds = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z',
		})
	);

	/* Register custom pattern. */
	wp.blocks.registerBlockVariation( 'core/columns', {
		name: 'column-100',
		attributes: {
			className: 'column-100',
		},
		title: '100',
		icon: iconColumnsOneFull,
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
		icon: iconColumnsTwoEqual,
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
		icon: iconColumnsTwoThirdsOneThird,
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
		icon: iconColumnsOneThirdTwoThirds,
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
		icon: iconColumnsThreeEqual,
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
		icon: iconColumnsTwoThirdsOneThird,
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
		icon: iconColumnsOneThirdTwoThirds,
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
		icon: iconColumnsOneThirdTwoThirds,
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
		icon: iconColumnsTwoThirdsOneThird,
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
		icon: iconColumnsOneThirdTwoThirds,
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
		icon: iconColumnsThreeEqual,
		innerBlocks: [
			[ 'core/column', { className: 'is-25', width: '25%' } ],
			[ 'core/column', { className: 'is-25', width: '25%' } ],
			[ 'core/column', { className: 'is-25', width: '25%' } ],
			[ 'core/column', { className: 'is-25', width: '25%' } ],
		],
		scope: [ 'block' ],
	});
});