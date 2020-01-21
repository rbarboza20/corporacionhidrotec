<?php
/*
*Hidrotec Theme functions and definitions
*
* @link https://developer.worpress.org
*
* @package Wordpress
* @subpackage Hidrotec
* @since 1.0
* @version 1.0
*/

function Hidrotec_script(){
  wp_enqueue_style( 'awesome', "https://use.fontawesome.com/releases/v5.8.1/css/all.css" );
  wp_enqueue_style('style', get_stylesheet_uri());
  wp_enqueue_script('jQuery');
  wp_register_script( 'menu', get_template_directory_uri().'/js/menu.js',array('jquery'),1, true );
  wp_enqueue_script( 'menu');
}
add_action( 'wp_enqueue_scripts', 'Hidrotec_script');

/*Registramos lo menus*/
function Hidrotec_menus () {
  register_nav_menus(array(
    'menu_main' => __('Menú Principal', 'Hidrotec'),
    'menu_social' => __('Menú Redes Sociales', 'Hidrotec')
  ));
}

add_action( 'init', 'Hidrotec_menus' );

function Hidrotec_setup () {
  add_theme_support( 'post-thumbnails' );

  add_theme_support('html5', array(
    'comment-list',
    'comment-form',
    'search-form',
    'gallery',
    'caption'
  ));

  add_theme_support('post-formats',  array (
    'aside',
    'gallery',
    'link',
    'image',
    'quote',
    'status',
    'video',
    'audio',
    'chat'
  ) );

  add_theme_support( 'title-tag' );

  add_theme_support( 'automatic-feed-links' );

  remove_action('wp_head', 'wp_generator');
}
add_action('after_setup_theme', 'Hidrotec_setup');
