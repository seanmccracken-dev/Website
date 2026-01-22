const projects = [
    {
        title: 'Video Transcription Tool',
        description:
            'A Python & Flask app that downloads videos and generates searchable transcripts.',
        tech: ['Python', 'Flask', 'SQLite']
    },
    {
        title: 'FastAPI Backend',
        description:
            'REST API built with FastAPI, JWT authentication, and PostgreSQL.',
        tech: ['Python', 'FastAPI']
    },
    {
        title: 'React Portfolio',
        description:
            'This site! Built with React, Vite, and modern frontend tooling.',
        tech: ['React', 'Vite', 'CSS']
    }
]

function Projects() {
    return (
        <main>
            <h2>Projects</h2>

            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <ul>
                            {project.tech.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Projects
