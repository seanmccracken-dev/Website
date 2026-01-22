import { useEffect, useState } from 'react'
import { fetchRepos } from '../api/github'

function Projects() {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchRepos().then((data) => {
            setRepos(data)
            setLoading(false)
        })
        .catch((err) => {
            setError(err.message)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <p>Loading projects...</p>
    }

    if (error) {
        return <p>Error: { error }</p>
    }

    return (
        <main>
            <h2>Projects</h2>

            <div className="projects">
                {repos.map((repo) => (
                    <div key={repo.id} className="project-card">
                        <h3>{repo.name}</h3>

                        <p>{repo.description || 'No description provided.'}</p>

                        <p>
                            <strong>Topics:</strong>{' '}
                            {repo.topics || 'N/A' }
                        </p>

                        <p>
                            <strong>Language:</strong>{' '}
                            {repo.language || 'N/A'}
                        </p>

                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Projects
