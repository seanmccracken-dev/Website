
function Resume() {
    return (
        <div className="surface-card">
            <div className="card-body">
                <h2 className="card-title mb-4">Resume</h2>
                <iframe src="/resume.pdf#view=FitH&navpanes=0" title="Resume PDF" width="100%" height="700px" style={{ border: 0, borderRadius: '0.5rem', background: '#07111f' }} />
            </div>
        </div>
    );
}

export default Resume