import { useState } from 'react';
import { Fragment } from 'react';
import Users from '../components/users/users';
import styles from '../styles/Home.module.scss';

export default function Home({ users }) {
	const [updateUsers, setUpdateUsers] = useState([]);
	return (
		<Fragment>
			<Users users={users} updateUsers={updateUsers} setUpdateUsers={setUpdateUsers} />
		</Fragment>
	);
}

export async function getServerSideProps() {
	const response = await fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
	const users = await response.json();
	return {
		props: {
			users,
		},
	};
}
