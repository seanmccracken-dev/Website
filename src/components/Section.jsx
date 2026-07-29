function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
    return (
        <section id={id} className={`section-block ${className}`.trim()}>
            <div className="section-shell">
                {(eyebrow || title || subtitle) && (
                    <div className="section-heading">
                        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
                        {title && <h2 className="section-title">{title}</h2>}
                        {subtitle && <p className="section-subtitle">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    )
}

export default Section
