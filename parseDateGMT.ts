module.exports = function parseDateGMT( date?: Date | string ) {
	// Catch falsey args
	if ( !date ) {
		return new Date();
	}

	if ( date instanceof Date ) {
		return date;
	}

	// Safari can not understand dates with dashes in them; many other browsers
	// cannot handle "T" as time delimiter. Replacing for cross-browser
	// functionality. See http://bit.ly/2xMwhTC .
	const standardDate = date
		.replace( /-/gi, '/' )
		.replace( /T/gi, ' ' )
		.replace( /(\..*)$/gi, '' ); // Strip out timezone information if it's still included at this point

	// Add the UTC time zone offset so that the date is parsed correctly.
	const dateGMT = new Date( `${standardDate} +0000` );

	// Don't implicitly trust dates passed to this function. Calling a Date
	// method on an Invalid Date will raise an exception.
	if ( dateGMT instanceof Date && !isNaN( dateGMT.valueOf() ) ) {
		return dateGMT;
	}

	return new Date();
};
