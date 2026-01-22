const GITHUB_USER = 'seanmccracken-dev'

export async function fetchRepos() {
	const response = await fetch(
		`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated`
	)

	if (!response.ok){
		throw new Error('Failed to fetch GitHub repos')
	}

	return response.json()
}

export async function fetchRepo(name) {
	const response = await fetch(
		`https://api.github.com/repos/${GITHUB_USER}/${name}`
	)

	if (!response.ok) {
		throw new Error('Failed to fetch GitHub repo')
	}

	return response.json()
}