<?php
/**
 * The template part for displaying a message that posts cannot be found
 *
 * @package GWT
 * @since Government Website Template 2.0
 */

?>

<section class="no-results not-found">
	<header class="page-header">
		<h1 class="page-title"><?php esc_html_e( 'Nothing Found', 'gwt_wp' ); ?></h1>
	</header>

	<div class="page-content">
		<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

			<p><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'gwt_wp' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>

		<?php else : ?>

			<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'gwt_wp' ); ?></p>
			<?php get_search_form(); ?>

		<?php endif; ?>
	</div>
</section>
