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
            <div className="row g-4">
                {repos.map((repo) => (
                    <div key={repo.id} className="col-md-6 col-lg-4">
                        <div className="card bg-light text-dark h-100 shadow">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    <Link to={`/projects/${repo.name}`} className="stretched-link text-dark text-decoration-none">
                                        {repo.name}
                                    </Link>
                                </h5>
                                <p className="card-text flex-grow-1">{repo.description || 'No description provided.'}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Projects
