
function Resume() {
    return (
        <div className="">
            <div className="">
                <div className="card bg-light text-dark shadow">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Resume</h2>
                        <iframe src="/resume.pdf#view=FitH&navpanes=0" title="Resume PDF" width="100%" height="700px" style={{ border: 0, borderRadius: '0.5rem', background: '#fff' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume