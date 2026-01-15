import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        // Scroll reveal animation
        const revealOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, revealOptions);

        const sections = document.querySelectorAll('.reveal');
        sections.forEach((section) => revealObserver.observe(section));

        return () => {
            sections.forEach((section) => revealObserver.unobserve(section));
        };
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <span className="hero-subtitle">Expert Paysagiste à Toulouse</span>
                    <h1 className="hero-title">
                        Votre jardin,<br />
                        <span className="text-gradient">Notre Chef-d'œuvre</span>
                    </h1>
                    <p className="hero-description">
                        Transformez votre espace extérieur en un véritable havre de paix grâce à notre expertise en aménagement paysager et entretien de jardin.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-primary">
                            Demander un devis
                            <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                        </Link>
                        <a href="tel:+33666703045" className="btn btn-outline">
                            <i className="fas fa-phone-alt" style={{ marginRight: '10px' }}></i>
                            06 66 70 30 45
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <div style={{ width: '30px', height: '50px', border: '2px solid rgba(255,255,255,0.5)', borderRadius: '25px', position: 'relative' }}>
                        <div style={{ width: '4px', height: '8px', background: '#fff', borderRadius: '2px', position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', animation: 'scrollWheel 2s infinite' }}></div>
                    </div>
                </div>
            </section>

            {/* Features Section - Glassmorphism Cards */}
            <section className="features reveal">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-certificate"></i>
                            </div>
                            <h3 className="feature-title">Expertise Certifiée</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Une équipe de professionnels qualifiés avec plus de 15 ans d'expérience.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h3 className="feature-title">Approche Écologique</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Des méthodes respectueuses de l'environnement pour un jardin durable.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-hand-holding-heart"></i>
                            </div>
                            <h3 className="feature-title">Service Sur Mesure</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Des solutions personnalisées adaptées à vos envies et votre budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Modern Layout */}
            <section className="section-padding reveal">
                <div className="container">
                    <div className="about-grid-modern">
                        <div className="about-image-wrapper">
                            <div className="dot-pattern"></div>
                            <img
                                src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/about-1.jpg"
                                alt="Jardinier expert"
                                className="main-img"
                            />
                            <img
                                src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/about-2.jpg"
                                alt="Détail jardin"
                                className="accent-img"
                            />
                        </div>

                        <div className="about-content">
                            <span className="section-tag">Qui sommes-nous</span>
                            <h2 className="section-title">Créateurs d'espaces verts d'exception</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                                Depuis 2005, GP JARDIN met sa passion au service de vos extérieurs. Nous ne faisons pas que planter, nous concevons des espaces de vie qui respirent la sérénité et la beauté.
                            </p>

                            <div className="stats-wrapper">
                                <div className="stat-box">
                                    <div className="stat-number">25+</div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, color: 'var(--secondary-color)' }}>Années d'expérience</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Savoir-faire reconnu</p>
                                    </div>
                                </div>

                                <div className="stat-box">
                                    <div className="stat-number">500+</div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, color: 'var(--secondary-color)' }}>Projets réalisés</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Clients satisfaits</p>
                                    </div>
                                </div>
                            </div>

                            <Link to="/about" className="btn btn-text" style={{ marginTop: '1rem' }}>
                                En savoir plus sur notre histoire <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding services-section reveal">
                <div className="container">
                    <div className="section-title-wrapper">
                        <span className="section-tag">Nos Services</span>
                        <h2 className="section-title">Solutions complètes d'aménagement</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
                            De la conception à l'entretien, nous nous occupons de tout pour que votre jardin reste magnifique toute l'année.
                        </p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-image">
                                <img src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services05.jpg" alt="Conception" />
                                <div className="service-overlay"></div>
                            </div>
                            <div className="service-content">
                                <h3>Conception & Design</h3>
                                <p style={{ color: 'var(--text-light)' }}>
                                    Plans 3D et étude personnalisée pour visualiser votre futur jardin avant les travaux.
                                </p>
                                <Link to="/services" className="service-link">
                                    Découvrir <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services02.jpg" alt="Entretien" />
                                <div className="service-overlay"></div>
                            </div>
                            <div className="service-content">
                                <h3>Entretien de Jardin</h3>
                                <p style={{ color: 'var(--text-light)' }}>
                                    Tonte, taille, désherbage. Profitez de votre jardin sans les contraintes.
                                </p>
                                <Link to="/services" className="service-link">
                                    Découvrir <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services03.jpg" alt="Création" />
                                <div className="service-overlay"></div>
                            </div>
                            <div className="service-content">
                                <h3>Architecture Paysagère</h3>
                                <p style={{ color: 'var(--text-light)' }}>
                                    Création de terrasses, allées et maçonnerie paysagère pour structurer l'espace.
                                </p>
                                <Link to="/services" className="service-link">
                                    Découvrir <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/services" className="btn btn-outline" style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>
                            Voir tous nos services
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section - Modern */}
            <section className="container reveal">
                <div className="cta-modern">
                    <div className="cta-content">
                        <h2 className="cta-title">Prêt à concrétiser votre projet ?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                            Bénéficiez d'une première consultation gratuite pour discuter de vos envies.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ minWidth: '200px' }}>
                            Obtenir un devis gratuit
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
