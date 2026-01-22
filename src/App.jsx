import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'

function App() {
    return (
        <div className="container">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:name" element={<ProjectDetail />} />
            </Routes>
        </div>
    )
}

export default App
