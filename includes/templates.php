<?php

/**
 * templates Setup for theme.
 */

// Don't call the file directly
 if ( !defined( 'ABSPATH' ) ) exit;

// Add stuff below

/**
 * Custom Template part.
 */
function sbt_custom_template_part_area( $areas ) {
	array_push(
		$areas,
		array(
			'area'        => 'query',
			'label'       => esc_html__( 'Query', 'starter-block-theme' ),
			'description' => esc_html__( 'Custom query area', 'starter-block-theme' ),
			'icon'        => 'layout',
			'area_tag'    => 'div',
		)
	);
	return $areas;
}
add_filter( 'default_wp_template_part_areas', 'sbt_custom_template_part_area' );
