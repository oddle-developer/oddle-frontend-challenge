import RepoItems from "./repoItems";

function repos({ repos }) {
	return repos.map((repo) => <RepoItems repo={repo} key={repo.id} />);
}

export default repos;
