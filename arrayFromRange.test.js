import arrayFromRange from './arrayFromRange';

describe( 'arrayFromRange', () => {
	it ( 'returns an array', () => {
		expect( arrayFromRange( 0, 1 ) ).toEqual( expect.any( Array ) );
		expect( arrayFromRange( 10, 20 ) ).toEqual( expect.any( Array ) );
		expect( arrayFromRange( 90, 90 ) ).toEqual( expect.any( Array ) );
	} );
} );
