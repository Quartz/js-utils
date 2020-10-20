const resizeWPImage = require( './resizeWPImage' );

describe( 'resizeWPImage', () => {
	const url = 'https://www.example.com/test.jpg';

	it( 'returns a WP image URL based on the dimension params', () => {
		expect( resizeWPImage( url, 100 ) ).toEqual( 'https://www.example.com/test.jpg?quality=75&strip=all&w=100' );
		expect( resizeWPImage( url, 100, 200 ) ).toEqual( 'https://www.example.com/test.jpg?quality=75&strip=all&w=100&h=200' );
	} );

	it( 'returns a WP image URL based on the crop param', () => {
		expect( resizeWPImage( url, 100, 100, 1 ) ).toEqual( 'https://www.example.com/test.jpg?quality=75&strip=all&w=100&h=100&crop=1' );
		expect( resizeWPImage( url, 100, 100, true ) ).toEqual( 'https://www.example.com/test.jpg?quality=75&strip=all&w=100&h=100&crop=1' );
	} );

	it( 'returns a WP image URL based on the quality param', () => {
		expect( resizeWPImage( url, 100, 100, false, 60 ) ).toEqual( 'https://www.example.com/test.jpg?quality=60&strip=all&w=100&h=100' );
		expect( resizeWPImage( url, 100, 100, false, 100 ) ).toEqual( 'https://www.example.com/test.jpg?quality=100&strip=all&w=100&h=100' );
	} );
} );
