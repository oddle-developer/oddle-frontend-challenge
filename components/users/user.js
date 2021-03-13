import { Fragment } from 'react';
import Link from 'next/link';
import Repos from '../repo/repos';

function User({ user, repos }) {
	{
		return (
			<Fragment>
				<Link href='/' className='btn btn-light'>
					<a>Back to home</a>
				</Link>{' '}
				Hireable: {user.hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}
				<div className='card grid-2'>
					<div className='all-center'>
						<img src={user.avatar_url} alt='avatar_url' className='round-img' style={{ width: '150px' }} />
						<h1>{user.name}</h1>
						<p>{user.location}</p>
					</div>
					<div>
						{user.bio && (
							<Fragment>
								<h3>Bio</h3>
								<p>{user.bio}</p>
							</Fragment>
						)}
						<a href={user.html_url} className='btn btn-dark my-1'>
							Visit Github Profile
						</a>
						<ul>
							<li>
								{user.login && (
									<Fragment>
										<strong>Username :</strong> {user.login}
									</Fragment>
								)}
							</li>
						</ul>

						<ul>
							<li>
								{user.company && (
									<Fragment>
										<strong>Comapny: </strong> {user.company}
									</Fragment>
								)}
							</li>
						</ul>

						<ul>
							<li>
								blog
								<Fragment>
									<strong>Website: </strong> {user.blog}
								</Fragment>
							</li>
						</ul>
					</div>
				</div>
				<div className='card text-center'>
					<div className='badge badge-primary'>Followers: {user.followers}</div>
					<div className='badge badge-success'>Following: {user.following}</div>
					<div className='badge badge-danger'>Public Repo: {user.public_repos}</div>
					<div className='badge badge-dark'>Public gists: {user.public_gists}</div>
				</div>
				<Repos repos={repos} />
			</Fragment>
		);
	}
}

export default User;
