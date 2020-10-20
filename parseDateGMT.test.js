const parseDateGMT = require( './parseDateGMT' );

describe( 'parseDateGMT', () => {
	it( 'can parse lots of date formats correctly', () => {
		const dates = [
			'2018-01-01 12:00:00.000Z',
			'2018-01-01 12:00:00',
			'2018/01/01 12:00:00',
			'2018-01-01T12:00:00',
			'2018/01/01T12:00:00',
			'2018-01-01T12:00',
			'2018-01-01 12:00',
			'2018/01/01T12:00',
		];

		dates.forEach( date => expect( parseDateGMT( date ).toGMTString() ).toEqual( 'Mon, 01 Jan 2018 12:00:00 GMT' ) );
	} );

	it( 'handles falsey inputs', () => {
		const dates = [
			'',
			null,
			undefined,
			false,
		];

		dates.forEach( date => expect( parseDateGMT( date ) instanceof Date ).toEqual( true ) );
	} );
} );
