/**
 * Create an array of integers from min to max, inclusive.
 *
 * @param  {int} 		min Starting integer
 * @param  {int} 		max End integer
 * @param  {int} 		increment Amount by which to increase each array value
 * @return {Array}
 */
function arrayFromRange( min, max, increment = 1 ) {
	const arr = new Array( Math.ceil( ( max - min ) / increment ) )
		.fill()
		.map( ( _, i ) => i * increment + min );

	if ( arr.slice( -1 ) !== max ) {
		arr.push( max );
	}

	return arr;
}

module.exports = arrayFromRange;
