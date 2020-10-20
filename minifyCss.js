/**
 * A quick and dirty way to minify CSS that is being directly injected into the
 * DOM. Not submitting this for awards.
 *
 * @param  {String} css CSS to minify.
 * @return {String}
 */
module.exports = function minifyCss ( css ) {
	return css.replace( /\s*([{}\(\);:,])\s*/g, '$1' );
};
