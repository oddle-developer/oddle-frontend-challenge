import { useState } from 'react';
import UserItem from './userItem';
import UserSearch from './userSearch';

function users({ users, setUpdateUsers, updateUsers }) {
	const [loading, setLoading] = useState(false);

	if (loading) return <div className='loading-center' />;

	if (updateUsers.length > 0) {
		return (
			<div className='users'>
				<UserSearch setUpdateUsers={setUpdateUsers} updateUsers={updateUsers} setLoading={setLoading} />
				{updateUsers.map((user) => {
					return <UserItem key={user.id} users={user} />;
				})}
			</div>
		);
	}

	return (
		<div className='users'>
			<UserSearch setUpdateUsers={setUpdateUsers} updateUsers={updateUsers} setLoading={setLoading} />
			{users.map((user) => {
				return <UserItem key={user.id} users={user} />;
			})}
		</div>
	);
}

export default users;
