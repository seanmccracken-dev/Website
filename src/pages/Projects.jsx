import { useEffect, useState } from 'react'
import { fetchRepos } from '../api/github'

function Projects({ onSelectProject }) {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchRepos()
            .then((data) => {
                setRepos(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <p className="text-muted">Loading projects...</p>
    }

    if (error) {
        return <p className="text-danger">Error: {error}</p>
    }

    return (
        <div className="project-grid">
            {repos.map((repo) => (
                <div key={repo.id} className="surface-card project-card card-body">
                    <div>
                        <h5>{repo.name}</h5>
                        <p>{repo.description || 'No description provided.'}</p>
                    </div>
                    <button className="btn btn-outline-light" onClick={() => onSelectProject?.(repo)}>
                        View details
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Projects
