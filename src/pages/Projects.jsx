import { Link } from 'react-router-dom'
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
                        <Link to={`/projects/${repo.name}`}>
                            {repo.name}
                        </Link>

                        <p>{repo.description || 'No description provided.'}</p>

                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Projects
