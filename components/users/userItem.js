import Link from 'next/link';

function userItem({ users: { login, avatar_url } }) {
	return (
		<div className='card text-center'>
			<img src={avatar_url} alt='user' className='round-img' style={{ width: '60px' }} />
			<h3>{login}</h3>

			<div>
				<Link href={`/user/${login}`} className='btn btn-dark btm-sm my-1'>
					<a>More</a>
				</Link>
			</div>
		</div>
	);
}

export default userItem;
