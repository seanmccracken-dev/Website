const learningSkills = [
    "React",
    "Python",
    "FastAPI",
    "Docker",
    "Kubernetes"
];


function Home() {
    return (
        <div className="">
            <div className="">
                <div className="card bg-light text-dark mb-4 shadow">
                    <div className="card-body">
                        <h2 className="card-title">Career Status</h2>
                        <p className="card-text">
                            I'm actively seeking opportunities to contribute to remote software development projects.
                        </p>
                    </div>
                </div>
                <div className="card bg-light text-dark mb-4 shadow">
                    <div className="card-body">
                        <h2 className="card-title">Professionally</h2>
                        <p className="card-text">
                            I'm a software developer with work experience in <strong>C#, .NET, and SQL Server</strong>.<br />
                            I'm passionate about writing maintainable code and continuously learning new technologies.<br />
                            I enjoy building reliable backend systems and clean, user-friendly frontends.
                        </p>
                    </div>
                </div>
                <div className="card bg-light text-dark mb-4 shadow">
                    <div className="card-body">
                        <h2 className="card-title">Continued Self-Education</h2>
                        <p className="card-text">{learningSkills.join(", ")}</p>
                    </div>
                </div>
                <div className="card bg-light text-dark shadow">
                    <div className="card-body">
                        <h2 className="card-title">Personally</h2>
                        <ul className="list-group list-group-flush bg-light">
                            <li className="list-group-item bg-light text-dark border-0">Married in Italy in 2017</li>
                            <li className="list-group-item bg-light text-dark border-0">7 year old cavapoo</li>
                            <li className="list-group-item bg-light text-dark border-0">Gamer: WoW, League of Legends, 7DTD, Simulators</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
