const styledTimestamp = require( './styledTimestamp' );

const oneMinuteInMs = 60 * 1000;
const oneHourInMs = 60 * oneMinuteInMs;

describe( 'styledTimestamp', () => {
	it ( 'shows the minutes or hours past for a timestamp less than eight hours old', () => {
		expect( styledTimestamp( new Date( Date.now() - oneMinuteInMs * 30 ) ) ).toEqual( '30 minutes ago' );
		expect( styledTimestamp( new Date( Date.now() - oneHourInMs * 2 ) ) ).toEqual( '2 hours ago' );
	} );
} );
