function Contact() {
    const EMAIL = 'seanmccracken.dev@gmail.com'
    const GITHUB_USER = 'seanmccracken-dev'
    const LINKEDIN_USER = 'seantmccracken'

    return (
        <main>
            <h2>Contact</h2>

            <p>
                I'm open to discussing software engineering opportunities,
                collaborations, or interesting projects.
            </p>

            <ul>
                <li>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${EMAIL}`}>
                        {EMAIL}
                    </a>
                </li>

                <li>
                    <strong>GitHub:</strong>{' '}
                    <a
                        href={`https://github.com/${GITHUB_USER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/${GITHUB_USER}
                    </a>
                </li>

                <li>
                    <strong>LinkedIn:</strong>{' '}
                    <a
                        href={`https://www.linkedin.com/in/${LINKEDIN_USER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin.com/in/${LINKEDIN_USER}
                    </a>
                </li>
            </ul>
        </main>
    )
}

export default Contact