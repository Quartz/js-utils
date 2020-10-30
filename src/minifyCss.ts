/**
 * A quick and dirty way to minify CSS that is being directly injected into the
 * DOM. Not submitting this for awards.
 *
 * @param  {String} css CSS to minify.
 * @return {String}
 */
export default function minifyCss ( css: string ) {
	return css.replace( /\s*([{}\(\);:,])\s*/g, '$1' ).trim();
}
