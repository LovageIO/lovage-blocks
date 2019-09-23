<?php
/**
 * Plugin Name: Elegant Blocks Pro
 * Plugin URI: https://elegantblocks.io
 * Description: Elegant Blocks for Gutenberg Editor.
 * Author: ThemeVan
 * Author URI: https://www.themevan.com/
 * Version: 0.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Elegant Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
