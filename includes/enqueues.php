<?php

/**
 * Enqueue Styles and Scripts for theme.
 */

// Don't call the file directly
 if ( !defined( 'ABSPATH' ) ) exit;

/**
  * Enqueue frontend assets.
  */
if ( ! function_exists( 'starter_block_theme_load_scripts' ) ) {
	function starter_block_theme_load_scripts() {
		$theme_version = wp_get_theme()->get( 'Version' );

		// 1. Styles.
		wp_enqueue_style( 'style', get_stylesheet_uri(), array(), $theme_version );
		wp_enqueue_style( 'main', get_theme_file_uri( 'assets/dist/main.css' ), array(), $theme_version, 'all' ); // main.scss: Compiled custom styles.
		wp_enqueue_style( 'block-variations-columns-styles', get_theme_file_uri( 'assets/dist/block-variations-columns.css' ), array(), $theme_version, 'all' ); // Block variations: fixed columns styles
		// wp_enqueue_style( 'template-parts-variations-header', get_theme_file_uri( 'assets/dist/template-parts-variations-header.css' ), array(), $theme_version, 'all' ); // Block variations: fixed columns styles

		if ( is_rtl() ) {
			wp_enqueue_style( 'rtl', get_theme_file_uri( 'assets/dist/rtl.css' ), array(), $theme_version, 'all' );
		}

		// 2. Scripts.
		wp_enqueue_script( 'mainjs', get_theme_file_uri( 'assets/dist/main.bundle.js' ), array(), $theme_version, true );
		
		// 3. ACF Variations
		$stickynav = get_option('sbt_sticky_header');
		if ( $stickynav == 'sticky' ) :
			wp_enqueue_style( 'stickynav', get_theme_file_uri( 'assets/dist/stickynav.css' ), array(), $theme_version, 'all' );
		elseif ( $stickynav == 'showhide' ) :
			wp_enqueue_style( 'showhidenav', get_theme_file_uri( 'assets/dist/showhidenav.css' ), array(), $theme_version, 'all' );
		endif;
	}
	add_action( 'wp_enqueue_scripts', 'starter_block_theme_load_scripts' );
}
