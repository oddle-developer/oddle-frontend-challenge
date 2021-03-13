import { Fragment } from 'react';
import Navbar from '../components/layout/navbar';
import Head from 'next/head';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<link
					rel='stylesheet'
					href='https://use.fontawesome.com/releases/v5.8.2/css/all.css'
					integrity='sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay'
					crossorigin='anonymous'
				/>
			</Head>
			<Navbar />
			<div style={{ marginTop: '70px' }}>
				<Component {...pageProps} />
			</div>
		</Fragment>
	);
}

export default MyApp;
