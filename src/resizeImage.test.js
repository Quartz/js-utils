const { resizeImage } = require( '.' );

describe( 'resizeImage', () => {
	describe( 'Kinja images', () => {
		const url = 'https://i.kinja-img.com/gawker-media/image/upload/test.jpg';
		it( 'returns a Kinja image URL based on the dimension params', () => {
			expect( resizeImage( url, 100 ) ).toEqual( 'https://i.kinja-img.com/gawker-media/image/upload/q_75,w_100/test.jpg' );
			expect( resizeImage( url, 100, 200 ) ).toEqual( 'https://i.kinja-img.com/gawker-media/image/upload/q_75,w_100,h_200/test.jpg' );
		} );

		it( 'returns a Kinja image URL based on the crop param', () => {
			expect( resizeImage( url, 100, 100, 1 ) ).toEqual( 'https://i.kinja-img.com/gawker-media/image/upload/q_75,w_100,h_100,c_fill/test.jpg' );
			expect( resizeImage( url, 100, 100, true ) ).toEqual( 'https://i.kinja-img.com/gawker-media/image/upload/q_75,w_100,h_100,c_fill/test.jpg' );
		} );

		it( 'returns a Kinja image URL based on the quality param', () => {
			expect( resizeImage( url, 100, 100, false, 60 ) ).toEqual( 'https://i.kinja-img.com/gawker-media/image/upload/q_60,w_100,h_100/test.jpg' );
			expect( resizeImage( url, 100, 100, false, 100 ) ).toEqual( 'https://i.kinja-img.com/gawker-media/image/upload/q_100,w_100,h_100/test.jpg' );
		} );
	} );

	describe( 'Wordpress images', () => {
		const url = 'https://www.example.com/test.jpg';

		it( 'returns a WP image URL based on the dimension params', () => {
			expect( resizeImage( url, 100 ) ).toEqual( 'https://www.example.com/test.jpg?quality=75&strip=all&w=100' );
			expect( resizeImage( url, 100, 200 ) ).toEqual( 'https://www.example.com/test.jpg?quality=75&strip=all&w=100&h=200' );
		} );

		it( 'returns a WP image URL based on the crop param', () => {
			expect( resizeImage( url, 100, 100, 1 ) ).toEqual( 'https://www.example.com/test.jpg?quality=75&strip=all&w=100&h=100&crop=1' );
			expect( resizeImage( url, 100, 100, true ) ).toEqual( 'https://www.example.com/test.jpg?quality=75&strip=all&w=100&h=100&crop=1' );
		} );

		it( 'returns a WP image URL based on the quality param', () => {
			expect( resizeImage( url, 100, 100, false, 60 ) ).toEqual( 'https://www.example.com/test.jpg?quality=60&strip=all&w=100&h=100' );
			expect( resizeImage( url, 100, 100, false, 100 ) ).toEqual( 'https://www.example.com/test.jpg?quality=100&strip=all&w=100&h=100' );
		} );
	} );
} );
