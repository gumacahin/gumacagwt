<?php
/**
 * The Template for displaying all single posts.
 *
 * @package GWT
 * @since Government Website Template 2.0
 */

get_header();
require_once 'inc/banner.php';
?>
<?php govph_displayoptions( 'govph_panel_top' ); ?>

<div id="main-content" class="container-main" role="document">
	<div class="row">

		<div id="content" class="<?php govph_displayoptions( 'govph_content_position' ); ?>columns" role="main">
		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'single' );

			endwhile; // end of the loop.
		?>
		</div><!-- end content -->

		<?php
		if ( is_active_sidebar( 'left-sidebar' ) ) {
			govph_displayoptions( 'govph_sidebar_left' );
		}
		?>
		<?php
		if ( is_active_sidebar( 'right-sidebar' ) ) {
			govph_displayoptions( 'govph_sidebar_right' );
		}
		?>

	</div><!-- end row -->
</div><!-- end main -->

<?php govph_displayoptions( 'govph_panel_bottom' ); ?>

<?php get_footer(); ?>
