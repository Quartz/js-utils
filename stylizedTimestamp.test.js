const stylizedTimestamp = require( './stylizedTimestamp' );

const oneMinuteInMs = 60 * 1000;
const oneHourInMs = 60 * oneMinuteInMs;

describe( 'stylizedTimestamp', () => {
	it ( 'shows a relative time for a timestamp less than eight hours old', () => {
		expect( stylizedTimestamp( new Date( Date.now() - oneMinuteInMs * 30 ) ) ).toEqual( '30 minutes ago' );
		expect( stylizedTimestamp( new Date( Date.now() - oneHourInMs * 2 ) ) ).toEqual( '2 hours ago' );
		expect( stylizedTimestamp( new Date( Date.now() - oneHourInMs * 7.9 ) ) ).toEqual( '7 hours ago' );
		expect( stylizedTimestamp( new Date( Date.now() - oneHourInMs * 8 ) ) ).not.toEqual( '8 hours ago' );
	} );

	it ( 'shows an absolute time for a timestamp more than eight hours old', () => {
		expect( stylizedTimestamp( new Date( 2012, 8, 24 ) ) ).toEqual( 'September 24, 2012' );
		expect( stylizedTimestamp( new Date( 2018, 0, 22 ) ) ).toEqual( 'January 22, 2018' );
		expect( stylizedTimestamp( new Date( 2019, 5, 28 ) ) ).toEqual( 'June 28, 2019' );
		expect( stylizedTimestamp( new Date( 2020, 1, 29 ) ) ).toEqual( 'February 29, 2020' );

		const eightHoursAgo = new Date( Date.now() - oneHourInMs * 8 );
		const daysEightHoursAgo = eightHoursAgo.getDate();
		const yearsEightHoursAgo = eightHoursAgo.getFullYear();
		const monthEightHoursAgo = eightHoursAgo.toLocaleString( 'default', { month: 'long' } );

		expect( stylizedTimestamp( eightHoursAgo ) ).toEqual( `${monthEightHoursAgo} ${daysEightHoursAgo}, ${yearsEightHoursAgo}` );
	} );
} );
