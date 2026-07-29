import { useEffect, useState } from 'react'
import { FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import Section from '../components/Section'
import { fetchReadme } from '../api/github'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'

const learningSkills = ['React', 'Python', 'FastAPI', 'Docker', 'Kubernetes']
const highlights = ['C# / .NET', 'SQL Server', 'API design', 'Cloud-native delivery']

function Home() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [projectReadme, setProjectReadme] = useState(null)
    const [readmeLoading, setReadmeLoading] = useState(false)

    useEffect(() => {
        if (!selectedProject) {
            setProjectReadme(null)
            return
        }

        let isCancelled = false

        async function loadReadme() {
            setReadmeLoading(true)
            try {
                const readme = await fetchReadme(selectedProject.name)
                if (!isCancelled) {
                    setProjectReadme(readme)
                }
            } catch {
                if (!isCancelled) {
                    setProjectReadme(null)
                }
            } finally {
                if (!isCancelled) {
                    setReadmeLoading(false)
                }
            }
        }

        loadReadme()

        return () => {
            isCancelled = true
        }
    }, [selectedProject])

    return (
        <>
            <div className="mt-4">
                    <div className="surface-card hero-card hero-card-full">
                        <div className="hero-intro-row">
                            <div className="hero-pill">
                                <FaCode /> Open to remote opportunities
                            </div>
                        </div>
                        <h1 className="hero-title">I turn complex ideas into dependable digital experiences.</h1>
                        <p className="hero-copy">
                            I’m a software developer with experience across backend systems, data access layers, and modern frontend interfaces. I enjoy building software that is resilient, readable, and easy to evolve.
                        </p>
                        <div className="stat-list">
                            {highlights.map((item) => (
                                <span className="stat-pill" key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>

            <Section id="projects" eyebrow="Selected work" title="Projects and experiments" subtitle="A snapshot of the work I’ve built and the systems I enjoy shaping.">
                <Projects onSelectProject={setSelectedProject} />
            </Section>

            <Section id="resume" eyebrow="Background" title="Experience and approach" subtitle="A concise view of my experience, interests, and current focus areas.">
                <div className="row g-4">
                    <div className="col-lg-7">
                        <div className="surface-card h-100" style={{ padding: '1.75rem' }}>
                            <h4 className="mb-3">Professionally</h4>
                            <p className="hero-copy mb-3">
                                I bring a pragmatic, product-minded approach to software development. My work has centered on reliable backend systems, data-driven workflows, and collaborative engineering practices.
                            </p>
                            <p className="hero-copy mb-3">
                                I’m continuously learning and exploring new technologies to enhance my skills and stay current in the ever-evolving field of software development.
                            </p>
                            <div className="stat-list">
                                {learningSkills.map((skill) => (
                                    <span className="stat-pill" key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="surface-card h-100" style={{ padding: '1.75rem' }}>
                            <h4 className="mb-3">Personally</h4>
                            <ul className="list-soft hero-copy">
                                <li>Married in Italy in 2017</li>
                                <li>Owner of a 9-year-old cavapoo</li>
                                <li>Gamer: WoW, Baldur's Gate 3, League of Legends, 7DTD, and various simulation games</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <Resume />
                </div>
            </Section>

            <Section id="contact" eyebrow="Get in touch" title="Let’s build something thoughtful together." subtitle="I’m open to discussing software engineering opportunities, collaborations, or interesting projects.">
                <div className="surface-card card-body">
                    <Contact />
                </div>
            </Section>

            {selectedProject && (
                <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
                    <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="mb-0">{selectedProject.name}</h3>
                            <button className="btn btn-outline-light btn-sm" onClick={() => setSelectedProject(null)}>Close</button>
                        </div>
                        <div className="text-muted">{selectedProject.description || 'No description provided.'}</div>
                        <div className="mt-3 d-flex flex-wrap gap-2">
                            <a href={selectedProject.html_url} target="_blank" rel="noreferrer" className="btn btn-outline-light">
                                <FaGithub className="me-2" /> View on GitHub
                            </a>
                            <a href="mailto:seanmccracken.dev@gmail.com" className="btn btn-outline-light">
                                <FaEnvelope className="me-2" /> Contact me
                            </a>
                            <a href="https://www.linkedin.com/in/seantmccracken" target="_blank" rel="noreferrer" className="btn btn-outline-light">
                                <FaLinkedin className="me-2" /> LinkedIn
                            </a>
                        </div>
                        <div className="mt-4">
                            <h4 className="mb-3">README</h4>
                            {readmeLoading ? (
                                <p className="text-muted">Loading README…</p>
                            ) : projectReadme ? (
                                <div className="readme">
                                    <ReactMarkdown>{projectReadme}</ReactMarkdown>
                                </div>
                            ) : (
                                <p className="text-muted">No README was available for this project.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
