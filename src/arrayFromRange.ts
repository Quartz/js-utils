/**
 * Create an array of integers from min to max, inclusive.
 *
 * @param  {int} 		min Starting integer
 * @param  {int} 		max End integer
 * @param  {int} 		increment Amount by which to increase each array value
 * @return {Array}
 */
export default function arrayFromRange( min: number, max: number, increment = 1 ) {
	const arr = new Array( Math.ceil( ( max - min ) / increment ) )
		.fill( null )
		.map( ( _, i ) => i * increment + min );

	if ( arr.slice( -1 )[ 0 ] !== max ) {
		arr.push( max );
	}

	return arr;
}
