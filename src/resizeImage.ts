/**
 * Resize an image from our Kinja media library
 * or our Wordpress library (soon to be gone) depending on the origin
 *
 * @param  {string} url
 * @param  {number}    width
 * @param  {number}    height
 * @param  {boolean}   crop
 * @param  {number}    quality
 * @return {string}
 */
export default function resizeImage(
	url?: string,
	width?: number,
	height?: number,
	crop = false,
	quality = 75
): string {
	if ( !url ) {
		return '';
	}

	const { origin, pathname, host } = new URL( url );

	if ( host === 'i.kinja-img.com' ) {
		const transformParams: string[] = [];
		if ( quality ) {
			transformParams.push( `q_${quality}` );
		}

		if ( width ) {
			transformParams.push( `w_${width}` );
		}

		if ( height ) {
			transformParams.push( `h_${height}` );
		}

		if ( crop ) {
			transformParams.push( 'c_fill' );
		}

		if ( transformParams.length ) {
			let newUrl = url;

			const transformsMatch = newUrl.match(
				new RegExp( 'https://i.kinja-img.com/gawker-media/image/upload/(.+)/' )
			);

			// Get rid of any current transforms
			if ( transformsMatch ) {
				const paramString = `${transformsMatch[1]}/`;
				newUrl = newUrl.replace( paramString, '' );
			}

			const transformString = transformParams.join( ',' );
			const urlPartsMatch = newUrl.match(
				new RegExp( '(https://i.kinja-img.com/gawker-media/image/upload/)(.+)' )
			);

			if ( urlPartsMatch ) {
				const [ , urlFirstPart, urlSecondPart ] = urlPartsMatch;
				newUrl = `${urlFirstPart}${transformString}/${urlSecondPart}`;
			}

			return newUrl;
		}

		return url;
	}

	let resizedUrl = `${origin}${pathname}?quality=${quality}&strip=all`;

	if ( width ) {
		resizedUrl += `&w=${width}`;
	}

	if ( height ) {
		resizedUrl += `&h=${height}`;
	}

	if ( crop ) {
		resizedUrl += '&crop=1';
	}

	return resizedUrl;
}
