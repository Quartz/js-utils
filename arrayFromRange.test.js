import arrayFromRange from './arrayFromRange';

describe( 'arrayFromRange', () => {
	it ( 'returns an array', () => {
		expect( arrayFromRange( 0, 1 ) ).toEqual( expect.any( Array ) );
		expect( arrayFromRange( 10, 20 ) ).toEqual( expect.any( Array ) );
		expect( arrayFromRange( 90, 90 ) ).toEqual( expect.any( Array ) );
	} );

	it ( 'returns the correct number of items', () => {
		expect( arrayFromRange( 0, 1 ) ).toHaveLength( 2 );
		expect( arrayFromRange( 1, 5 ) ).toHaveLength( 5 );
		expect( arrayFromRange( 10, 20 ) ).toHaveLength( 11 );
		expect( arrayFromRange( 100, 200, 10 ) ).toHaveLength( 11 );
	} );

	it ( 'returns an array that always starts with the min value', () => {
		expect( arrayFromRange( 0, 1 )[ 0 ] ).toEqual( 0 );
		expect( arrayFromRange( 5, 9 )[ 0 ] ).toEqual( 5 );
		expect( arrayFromRange( 15, 301, 16 )[ 0 ] ).toEqual( 15 );
	} );

	it ( 'returns an array that always ends with the max value', () => {
		expect( arrayFromRange( 0, 1 ).slice( -1 )[ 0 ] ).toEqual( 1 );
		expect( arrayFromRange( 5, 9 ).slice( -1 )[ 0 ] ).toEqual( 9 );
		expect( arrayFromRange( 15, 301, 16 ).slice( -1 )[ 0 ] ).toEqual( 301 );
	} );
} );
