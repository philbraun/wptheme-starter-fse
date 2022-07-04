<?php

/**
 * ACF Setup for theme.
 */

// Don't call the file directly
 if ( !defined( 'ABSPATH' ) ) exit;

// Add stuff below

add_action('acf/init', 'sbt_acf_op_init');
function sbt_acf_op_init() {

	// Check function exists.
	if( function_exists('acf_add_options_page') ) {

		// Register options page.
		$option_page = acf_add_options_page(array(
			'page_title'    => __('Theme Einstellungen'),
			'menu_title'    => __('Theme Optionen'),
			'parent_slug'   => 'options-general.php',
			'menu_slug'     => 'theme-general-settings',
			'capability'    => 'create_users',
			'redirect'      => false
		));
	}
}