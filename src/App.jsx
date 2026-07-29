import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function App() {
    return (
        <div id="top" className="min-vh-100" data-bs-theme="dark">
            <Layout>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/:name" element={<ProjectDetail />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default App
