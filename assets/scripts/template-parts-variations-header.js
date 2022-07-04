window.addEventListener('load', function () {

	/* Unregister native pattern. */
	// wp.blocks.unregisterBlockVariation('core/columns', 'one-column-full');

	/* Set up icon. */
	const el = wp.element.createElement;
	const SVG = wp.primitives.SVG;

	const iconHeaderStandard = el(
		SVG,
		{ width: 48, height: 48, viewBox: '0 0 48 48' },
		el('path', {
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			d:
			'm39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z',
		})
	);

	/* Register custom pattern. */
	wp.blocks.registerBlockVariation( 'core/template-part', {
		name: 'header-standard',
		attributes: {
			align: 'full',
			tagName: 'header',
			className: 'site-header'
		},
		title: 'header standard',
		icon: iconHeaderStandard
	});

	wp.blocks.registerBlockVariation( 'core/template-part', {
		name: 'header-fixed',
		attributes: {
			align: 'full',
			tagName: 'header',
			className: 'site-header fixed'
		},
		title: 'header fixed',
		icon: iconHeaderStandard
	});

	// wp.blocks.registerBlockVariation( 'core/template-part', {
	// 	name: 'header-hideshow',
	// 	attributes: {
	// 		align: 'full',
	// 		tagName: 'header',
	// 		className: 'site-header hideshow'
	// 	},
	// 	title: 'header hideshow',
	// 	icon: iconHeaderStandard
	// });

	wp.blocks.registerBlockVariation( 'core/template-part', {
		name: 'header-wide',
		attributes: {
			align: 'wide',
			tagName: 'header',
			className: 'site-header wide'
		},
		title: 'header wide',
		icon: iconHeaderStandard
	});

	wp.blocks.registerBlockVariation( 'core/template-part', {
		name: 'header-slim',
		attributes: {
			align: 'full',
			tagName: 'header',
			className: 'site-header slim'
		},
		title: 'header slim',
		icon: iconHeaderStandard
	});
	


});