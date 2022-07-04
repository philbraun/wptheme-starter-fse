<?php

/**
 * Black variations Setup for theme.
 */

// Don't call the file directly
 if ( !defined( 'ABSPATH' ) ) exit;

// Add stuff below

/**
 * Variations
 *
 * Add own variations for Gutenberg Columns, disable original variations
 *
 */
function block_variations_enqueue_editorscript() {
	// Fixed Gutenberg Columns
	wp_enqueue_script(
		'block-variation-columns-script',
		get_template_directory_uri( ) . '/assets/scripts/block-variations-columns.js',
		array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' )
	);
	// Header: standard, fixed, hideshow
	// wp_enqueue_script(
	// 	'block-variation-header-script',
	// 	get_template_directory_uri( ) . '/assets/scripts/template-parts-variations-header.js',
	// 	array( 'wp-blocks' )
	// );

}
add_action( 'enqueue_block_editor_assets', 'block_variations_enqueue_editorscript' );