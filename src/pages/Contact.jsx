import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'


function Contact() {
    const user = 'seanmccracken.dev';
    const domain = 'gmail.com';
    const EMAIL = `${user}@${domain}`;
    const GITHUB_USER = 'seanmccracken-dev';
    const LINKEDIN_USER = 'seantmccracken';

    return (
        <div className="surface-card">
            <div className="card-body">
                <ul className="list-group list-group-flush" style={{ background: 'transparent' }}>
                    <li className="list-group-item border-0 d-flex align-items-center" style={{ background: 'transparent', color: 'var(--text)' }}>
                        <FaEnvelope className="me-2" />
                        <a href={`mailto:${EMAIL}`} className="text-decoration-none" style={{ color: 'var(--text)' }}>{EMAIL}</a>
                    </li>
                    <li className="list-group-item border-0 d-flex align-items-center" style={{ background: 'transparent', color: 'var(--text)' }}>
                        <FaGithub className="me-2" />
                        <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: 'var(--text)' }}>
                            github.com/{GITHUB_USER}
                        </a>
                    </li>
                    <li className="list-group-item border-0 d-flex align-items-center" style={{ background: 'transparent', color: 'var(--text)' }}>
                        <FaLinkedin className="me-2" />
                        <a href={`https://www.linkedin.com/in/${LINKEDIN_USER}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: 'var(--text)' }}>
                            linkedin.com/in/{LINKEDIN_USER}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact