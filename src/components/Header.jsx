import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <h1>Sean McCracken</h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header
