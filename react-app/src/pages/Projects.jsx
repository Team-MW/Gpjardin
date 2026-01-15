import { Link } from 'react-router-dom';
import { useState } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState('Tous');

    const categories = ['Tous', 'Création', 'Entretien', 'Aménagement', 'Maçonnerie'];

    const projects = [
        {
            id: 1,
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/projects-01.jpg',
            title: 'Jardin Zen Japonais',
            category: 'Création',
            location: 'Balma'
        },
        {
            id: 2,
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/projects-03.jpg',
            title: 'Terrasse Bois & Piscine',
            category: 'Aménagement',
            location: 'Tournefeuille'
        },
        {
            id: 3,
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/about-1.jpg',
            title: 'Entretien Parc Résidentiel',
            category: 'Entretien',
            location: 'Toulouse Centre'
        },
        {
            id: 4,
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/about-2.jpg',
            title: 'Massifs Fleuris Exotiques',
            category: 'Création',
            location: 'Blagnac'
        },
        {
            id: 5,
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services05.jpg',
            title: 'Conception 3D Villa',
            category: 'Création',
            location: 'L\'Union'
        },
        {
            id: 6,
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services03.jpg',
            title: 'Allée Carrossable Pavés',
            category: 'Maçonnerie',
            location: 'Colomiers'
        },
    ];

    const filteredProjects = filter === 'Tous'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('https://gpjardin.microdidact.com/wp-content/uploads/2025/03/projects-header.jpg')" }}>
                <div className="container">
                    <h1 className="page-title">Nos Réalisations</h1>
                    <p className="page-breadcrumb">
                        <Link to="/" style={{ color: 'var(--white)' }}>Accueil</Link> &gt; Projets
                    </p>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="section-title-wrapper">
                        <span className="section-tag">Portfolio</span>
                        <h2 className="section-title">Inspiration & Savoir-faire</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            Explorez nos derniers chantiers et laissez-vous inspirer pour votre futur projet d'aménagement extérieur.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="filters-container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`filter-btn ${filter === category ? 'active' : ''}`}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    margin: '0 0.5rem 0.5rem 0.5rem',
                                    borderRadius: '50px',
                                    border: filter === category ? '2px solid var(--primary-color)' : '2px solid rgba(0,0,0,0.1)',
                                    background: filter === category ? 'var(--primary-color)' : 'transparent',
                                    color: filter === category ? 'var(--white)' : 'var(--text-light)',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.95rem'
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="projects-grid-modern" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}>
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="project-card-modern" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '350px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />

                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '2rem',
                                    color: 'white',
                                    transition: 'background 0.3s ease'
                                }}>
                                    <div style={{ transform: 'translateY(0)', transition: 'transform 0.3s ease' }}>
                                        <span style={{
                                            color: 'var(--primary-color)',
                                            fontWeight: '700',
                                            fontSize: '0.85rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            {project.category}
                                        </span>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', margin: '0.5rem 0 0.25rem 0', lineHeight: '1.2' }}>{project.title}</h3>
                                        <p style={{ fontSize: '0.9rem', opacity: '0.8', margin: 0 }}><i className="fas fa-map-marker-alt" style={{ marginRight: '5px' }}></i> {project.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Mini Section */}
            <section className="section-padding" style={{ background: 'var(--light-bg)' }}>
                <div className="container">
                    <div className="about-grid-modern" style={{ alignItems: 'center' }}>
                        <div className="content">
                            <h2 className="section-title">Du rêve à la réalité</h2>
                            <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                Chaque photo ci-dessus raconte l'histoire d'une transformation unique. Derrière chaque projet, il y a une écoute attentive, une conception sur mesure et une réalisation soignée.
                            </p>
                            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'var(--secondary-color)', color: 'var(--secondary-color)' }}>
                                Démarrez votre transformation
                            </Link>
                        </div>
                        <div className="image">
                            <img src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services-1.jpg" alt="Transformation jardin" style={{ borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container" style={{ marginBottom: 'var(--spacing-lg)' }}>
                <div className="cta-modern">
                    <div className="cta-content">
                        <h2 className="cta-title">Votre projet sur cette page ?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                            Confiez-nous votre extérieur et laissez-nous en faire notre prochaine fierté.
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Demander une étude
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
