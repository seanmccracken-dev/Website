const learningSkills = [
    "React",
    "Python",
    "FastAPI",
    "Docker",
    "Kubernetes"
];

function Home() {

    return (

        <div>
            <h2>Career Status</h2>
            <p>
                I'm actively seeking opportunities to contribute to remote software development projects.
            </p>

            <h2>Professionally</h2>
            <p>
                I'm a software developer with work experience in <strong>C#, .NET, and SQL Server</strong>.
                I'm passionate about writing maintainable code and continuously learning new technologies.
                I enjoy building reliable backend systems and clean, user-friendly frontends.
            </p>
            
            <h2>Continued Self-Education</h2>
            <p>{learningSkills.join(", ")}</p>

            <h2>Personally</h2>
            <ul className="about-list">
                <li>Married in Italy in 2017</li>
                <li>7 year old cavapoo</li>
                <li>Gamer: WoW, League of Legends, 7DTD, Simulators</li>
            </ul>
        </div>

    )
}

export default Home
