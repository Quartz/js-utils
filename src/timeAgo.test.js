const { timeAgo } = require( '.' );

const oneMinuteInMs = 60 * 1000;
const oneHourInMs = 60 * oneMinuteInMs;

describe( 'timeAgo', () => {
	it ( 'describes the number of minutes passed if the timestamp is less than one hour old', () => {
		expect( timeAgo( new Date( Date.now() - oneMinuteInMs * 0.1 ) ) ).toEqual( '0 minutes ago' );
		expect( timeAgo( new Date( Date.now() - oneMinuteInMs * 0.6 ) ) ).toEqual( '1 minute ago' );
		expect( timeAgo( new Date( Date.now() - oneMinuteInMs * 1 ) ) ).toEqual( '1 minute ago' );
		expect( timeAgo( new Date( Date.now() - oneMinuteInMs * 2 ) ) ).toEqual( '2 minutes ago' );
		expect( timeAgo( new Date( Date.now() - oneMinuteInMs * 30 ) ) ).toEqual( '30 minutes ago' );
		expect( timeAgo( new Date( Date.now() - oneMinuteInMs * 45 ) ) ).toEqual( '45 minutes ago' );
		expect( timeAgo( new Date( Date.now() - oneMinuteInMs * 59 ) ) ).toEqual( '59 minutes ago' );
		expect( timeAgo( new Date( Date.now() - oneMinuteInMs * 60 ) ) ).not.toEqual( '60 minutes ago' );
	} );

	it ( 'describes the number of hours passed if the timestamp is more than one hour old', () => {
		expect( timeAgo( new Date( Date.now() - oneHourInMs ) ) ).toEqual( '1 hour ago' );
		expect( timeAgo( new Date( Date.now() - oneHourInMs * 1.4 ) ) ).toEqual( '1 hour ago' );
		expect( timeAgo( new Date( Date.now() - oneHourInMs * 2 ) ) ).toEqual( '2 hours ago' );
		expect( timeAgo( new Date( Date.now() - oneHourInMs * 8 ) ) ).toEqual( '8 hours ago' );
		expect( timeAgo( new Date( Date.now() - oneHourInMs * 24 ) ) ).toEqual( '24 hours ago' );
	} );
} );
