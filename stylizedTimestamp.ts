const parseDateGMT = require( './parseDateGMT' );
const timeAgo = require( './timeAgo' );

const monthAbbreviations = [
	'Jan.',
	'Feb.',
	'March',
	'April',
	'May',
	'June',
	'July',
	'Aug.',
	'Sept.',
	'Oct.',
	'Nov.',
	'Dec.',
];

module.exports = function stylizedTimestamp ( dateGMT: Date | string, shortMonths = false ) {
	const publishDate = parseDateGMT( dateGMT );
	const day = publishDate.getDate();
	const year = publishDate.getFullYear();
	let month = publishDate.toLocaleString( 'default', { month: 'long' } );

	if ( shortMonths ) {
		month = monthAbbreviations[ publishDate.getMonth() ];
	}

	// Date#getTime is number of seconds since epoch in UTC.
	const time = publishDate.getTime();
	const now = new Date().getTime();
	const diff = now - time;
	const minute = 60 * 1000;
	const hour = 60 * minute;

	// Show 'time ago' format if the timestamp was less than 8 hours ago
	if ( diff < hour * 8 ) {
		return timeAgo( publishDate );
	}

	return `${month} ${day}, ${year}`;
};
