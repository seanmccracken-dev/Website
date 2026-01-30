import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { fetchRepo, fetchReadme } from '../api/github'

function ProjectDetail() {

    const { name } = useParams()
    const [repo, setRepo] = useState(null)
    const [readme, setReadme] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadProject() {
            try {
                const repoData = await fetchRepo(name)
                setRepo(repoData)

                const readmeText = await fetchReadme(name)
                setReadme(readmeText)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadProject()
    }, [name])

    if (loading) {
        return <p>Loading project...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    const timezone = "America/Chicago"

    const created = new Date(repo.created_at).toLocaleString("en-US", {
        timeZone: timezone,
        dateStyle: "medium",
        timeStyle: "short"
    })

    const updated = new Date(repo.updated_at).toLocaleString("en-US", {
        timeZone: timezone,
        dateStyle: "medium",
        timeStyle: "short"
    })

    return (
        <div className="">
            <div className="">
                <div className="card bg-light text-dark shadow mb-4">
                    <div className="card-body">
                        <h2 className="card-title">{repo.name}</h2>
                        <p className="card-text">{repo.description || 'No description provided.'}</p>
                        <ul className="list-group list-group-flush mb-3 bg-light">
                            <li className="list-group-item bg-light text-dark border-0"><strong>Language:</strong> {repo.language || 'N/A'}</li>
                            <li className="list-group-item bg-light text-dark border-0"><strong>Create Date:</strong> {created || 'N/A'}</li>
                            <li className="list-group-item bg-light text-dark border-0"><strong>Last Update:</strong> {updated || 'N/A'}</li>
                        </ul>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark mb-3">
                            View on GitHub
                        </a>
                        <hr className="border-dark" />
                        <h3>README</h3>
                        {readme ? (
                            <div className="readme bg-light p-3 rounded border">
                                <ReactMarkdown>{readme}</ReactMarkdown>
                            </div>
                        ) : (
                            <p>Not found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
