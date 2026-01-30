import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'


function Contact() {
    const user = 'seanmccracken.dev';
    const domain = 'gmail.com';
    const EMAIL = `${user}@${domain}`;
    const GITHUB_USER = 'seanmccracken-dev';
    const LINKEDIN_USER = 'seantmccracken';

    return (
        <div className="">
            <div className="">
                <div className="card bg-light text-dark shadow">
                    <div className="card-body">
                        <h2 className="card-title mb-3">Contact</h2>
                        <p className="card-text">
                            I'm open to discussing software engineering opportunities, collaborations, or interesting projects.
                        </p>
                        <ul className="list-group list-group-flush bg-light">
                            <li className="list-group-item bg-light text-dark border-0 d-flex align-items-center">
                                <FaEnvelope className="me-2" />
                                <a href={`mailto:${EMAIL}`} className="text-dark text-decoration-none">{EMAIL}</a>
                            </li>
                            <li className="list-group-item bg-light text-dark border-0 d-flex align-items-center">
                                <FaGithub className="me-2" />
                                <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                                    github.com/{GITHUB_USER}
                                </a>
                            </li>
                            <li className="list-group-item bg-light text-dark border-0 d-flex align-items-center">
                                <FaLinkedin className="me-2" />
                                <a href={`https://www.linkedin.com/in/${LINKEDIN_USER}`} target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                                    linkedin.com/in/{LINKEDIN_USER}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact