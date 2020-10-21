const hexToRGB = require( './hexToRGB' );

describe( 'hexToRGB', () => {
	it ( 'converts a hexadecimal color expressions to its RGB counterpart', () => {
		expect( hexToRGB( '#ffffff' ).join() ).toEqual( '255,255,255' );
		expect( hexToRGB( '#fff' ).join() ).toEqual( '255,255,255' );
		expect( hexToRGB( '#000000' ).join() ).toEqual( '0,0,0' );
		expect( hexToRGB( '#000' ).join() ).toEqual( '0,0,0' );
		expect( hexToRGB( '#f00' ).join() ).toEqual( '255,0,0' );
		expect( hexToRGB( '#de3' ).join() ).toEqual( '221,238,51' );
		expect( hexToRGB( '#c0ffee' ).join() ).toEqual( '192,255,238' );
	} );
} );
