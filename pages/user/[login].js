import User from '../../components/users/user';
import { Fragment } from 'react';

function login({ user, repos }) {
	console.log(repos);
	return (
		<Fragment>
			<User user={user} repos={repos} />
		</Fragment>
	);
}

export async function getServerSideProps(ctx) {
	const getUser = await fetch(`https://api.github.com/users/${ctx.query.login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
	const user = await getUser.json();

	const getRepos = await fetch(
		`https://api.github.com/users/${ctx.query.login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	);
	const repos = await getRepos.json();
	return {
		props: {
			user,
			repos,
		},
	};
}

export default login;
