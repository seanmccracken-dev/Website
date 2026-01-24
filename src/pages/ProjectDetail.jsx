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
        <div class="project-card">
            <h2>{repo.name}</h2>

            <p>{repo.description || 'No description provided.'}</p>

            <ul>
                <li><strong>Language:</strong> {repo.language || 'N/A'}</li>
                < br />
                <li><strong>Create Date:</strong> {created || 'N/A'}</li>
                <li><strong>Last Update:</strong> {updated || 'N/A'}</li>
            </ul>

            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" >
                View on GitHub
            </a>

            <hr />

            <h3>README</h3>
            {readme ? (
                <div className="readme">
                    <ReactMarkdown>{readme}</ReactMarkdown>
                </div>
            ) : (
                <p>Not found.</p>
            )}
        </div>
    )
}

export default ProjectDetail
