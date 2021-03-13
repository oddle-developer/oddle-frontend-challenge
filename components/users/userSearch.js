import { useState } from 'react';

function Search({ setUpdateUsers, updateUsers, setLoading }) {
	const [text, setText] = useState(' ');
	console.log('update', updateUsers);
	async function handleSubmit(e) {
		e.preventDefault();
		if (text === ' ') {
			alert('Please Enter Something');
		} else {
			setLoading(true);
			const response = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
			const data = await response.json();
			setUpdateUsers(data.items);
      setLoading(false);
			setText(' ');
		}
	}

	function handleChange(e) {
		setText(e.target.value);
	}

	const clearData = () => {
		setUpdateUsers([]);
	};

	return (
		<div>
			<form className='form' onSubmit={handleSubmit}>
				<input type='text' placeholder='Search Users...' onChange={handleChange} value={text} name='text' />
				<input type='submit' value='search' className='btn btn-dark btn-block' style={{ fontSize: '20px' }} />
			</form>
			{updateUsers.length > 0 && (
				<button className='btn btn-light btn-block' onClick={clearData}>
					Clear
				</button>
			)}
		</div>
	);
}

export default Search;
