<?php
/**
 * Theme Setup.
 */

// Get theme Path directory
if ( !defined( 'SBT_THEME_PATH' ) ) {
	define( 'SBT_THEME_PATH', get_template_directory( __FILE__ ) );
}
if ( !defined( 'SBT_THEME_URI' ) ) {
	define( 'SBT_THEME_URI', get_template_directory( __FILE__ ) );
}

// Load template functions.
include_once( SBT_THEME_PATH . '/includes/templates.php' );

// Load block variations.
include_once( SBT_THEME_PATH . '/includes/variations.php' );

// Enqueue stuff.
include_once( SBT_THEME_PATH . '/includes/enqueues.php' );

// Load ACF functions.
if( class_exists('ACF') ) :
	include_once( SBT_THEME_PATH . '/includes/acf.php' );
endif;

// Load Gravity Forms functions.
if ( class_exists( 'GFCommon' ) ) :
	include_once( SBT_THEME_PATH . '/includes/gf.php' );
endif;

// Load WP GridBuilder functions.
//if ( class_exists( 'GFCommon' ) ) :
	include_once( SBT_THEME_PATH . '/includes/wpgb.php' );
//endif;


if ( ! function_exists( 'starter_block_theme_support' ) ) {
	function starter_block_theme_support() {
		// Make theme available for translation: Translations can be filed in the /languages/ directory.
		load_theme_textdomain( 'starter-block-theme', __DIR__ . '/languages' );

		// Add support for post thumbnails.
		add_theme_support( 'post-thumbnails' );
		// Add support for responsive embedded content.
		add_theme_support( 'responsive-embeds' );
		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Add support for editor styles.
		add_theme_support( 'editor-styles' );
		// Enqueue editor styles.
		add_editor_style( 'style-editor.css' );
	}
	add_action( 'after_setup_theme', 'starter_block_theme_support' );

	// Disable Block Directory: https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/filters/editor-filters.md#block-directory
	remove_action( 'enqueue_block_editor_assets', 'wp_enqueue_editor_block_directory_assets' );
	remove_action( 'enqueue_block_editor_assets', 'gutenberg_enqueue_block_editor_assets_block_directory' );
}

/**
 * Include stuff
 */

