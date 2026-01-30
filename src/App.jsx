import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Resume from './pages/Resume'
import Contact from './pages/Contact'


function App() {
    return (
        <div className="min-vh-100 bg-dark text-light" data-bs-theme="dark">
            <div className="container py-4">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:name" element={<ProjectDetail />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default App
