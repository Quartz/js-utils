/**
 * Describe a timestamp from the past in terms of elapsed hours or
 * minutes since it occurred
 *
 * @param  {Date} timetamp Date object representing the timestamp
 * @return {String}
 */
function timeAgo ( timestamp: Date ) {
	const time = timestamp.getTime();
	const now = new Date().getTime();
	const diff = now - time;
	const minute = 60 * 1000;
	const hour = 60 * minute;

	// if its more than 1 hour old
	if ( diff >= hour ) {

		const hoursAgo = Math.floor( diff / hour );

		if ( 1 === hoursAgo ) {
			return '1 hour ago';
		}

		return `${hoursAgo} hours ago`;
	}

	// less than 1 hour old
	const minutesAgo = Math.round( diff / minute );

	if ( 1 === minutesAgo ) {
		return '1 minute ago';
	}

	return `${minutesAgo} minutes ago`;
}

module.exports = timeAgo;
