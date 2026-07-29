import { useEffect, useState } from 'react'

const links = [
    { href: '#top', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' }
]

function Header() {
    const [active, setActive] = useState('home')

    useEffect(() => {
        const sections = links.map((link) => document.querySelector(link.href))
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id)
                    }
                })
            },
            { rootMargin: '-40% 0px -45% 0px', threshold: 0.2 }
        )

        sections.forEach((section) => section && observer.observe(section))
        return () => observer.disconnect()
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark mb-4 site-header">
            <div className="container-fluid px-0">
                <a className="navbar-brand fs-4 fw-bold text-light" href="#home">Sean McCracken</a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {links.map((link) => (
                            <li className="nav-item" key={link.href}>
                                <a className={`nav-link ${active === link.href.replace('#', '') ? 'active' : ''}`} href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
