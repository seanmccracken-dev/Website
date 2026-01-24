import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
    const user = 'seanmccracken.dev'
    const domain = 'gmail.com'
    const EMAIL = `${user}@${domain}`
    const GITHUB_USER = 'seanmccracken-dev'
    const LINKEDIN_USER = 'seantmccracken'

    return (
        <main>
            <h2>Contact</h2>

            <p>
                I'm open to discussing software engineering opportunities,
                collaborations, or interesting projects.
            </p>

            <ul class="contact-list">
                <li>
                    <FaEnvelope />
                    <a href={`mailto:${EMAIL}`}>
                        {EMAIL}
                    </a>
                </li>

                <li>
                    <FaGithub />
                    <a
                        href={`https://github.com/${GITHUB_USER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/${GITHUB_USER}
                    </a>
                </li>

                <li>
                    <FaLinkedin />
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