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