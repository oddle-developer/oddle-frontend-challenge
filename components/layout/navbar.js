import Link from 'next/link';

function Navbar({ icon, title, children }) {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className='fab fa-github' /> Github Finder
			</h1>
			<ul>
				<li>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href='/about'>
						<a>About</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
