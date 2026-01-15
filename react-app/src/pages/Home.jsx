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



            {/* About Section - Modern Layout */}
            <section className="section-padding reveal">
                <div className="container">
                    <div className="about-grid-modern">
                        <div className="about-image-wrapper">
                            <div className="dot-pattern"></div>
                            <img
                                src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/about-1.jpg"
                                alt="Paysagiste professionnel à Toulouse en action"
                                className="main-img"
                            />
                            <img
                                src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/about-2.jpg"
                                alt="Détail aménagement jardin durable"
                                className="accent-img"
                            />
                        </div>

                        <div className="about-content">
                            <span className="section-tag">Votre Paysagiste à Toulouse</span>
                            <h2 className="section-title">Créateurs d'espaces verts d'exception en Haute-Garonne</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                Depuis 2005, <strong>GP JARDIN</strong> met sa passion et son expertise au service des particuliers et professionnels de la région toulousaine. Plus qu'une simple entreprise de jardinage, nous sommes des architectes de la nature.
                            </p>
                            <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>
                                Que vous rêviez d'un <em>jardin zen</em>, d'une <em>terrasse en bois exotique</em> ou d'un <em>espace végétalisé nécessitant peu d'entretien</em>, notre bureau d'étude conçoit des projets sur-mesure qui valorisent votre patrimoine immobilier. Nous intervenons à Toulouse, Blagnac, Colomiers, Balma et dans toute l'agglomération pour la création et l'entretien de vos extérieurs.
                            </p>

                            <div className="stats-wrapper">
                                <div className="stat-box">
                                    <div className="stat-number">25+</div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, color: 'var(--secondary-color)' }}>Années d'expérience</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Savoir-faire artisanal</p>
                                    </div>
                                </div>

                                <div className="stat-box">
                                    <div className="stat-number">500+</div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, color: 'var(--secondary-color)' }}>Jardins transformés</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Clients satisfaits en 31</p>
                                    </div>
                                </div>
                            </div>

                            <Link to="/about" className="btn btn-text" style={{ marginTop: '1rem' }}>
                                Découvrir notre histoire et nos valeurs <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding services-section reveal">
                <div className="container">
                    <div className="section-title-wrapper">
                        <span className="section-tag">Nos Prestations</span>
                        <h2 className="section-title">Solutions complètes d'aménagement extérieur</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 1rem auto' }}>
                            De la conception paysagère sur plan 3D à l'entretien annuel de vos espaces verts, nous maîtrisons toutes les compétences pour faire de votre jardin un lieu de vie unique.
                        </p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-image">
                                <img src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services05.jpg" alt="Conception de jardin 3D" />
                                <div className="service-overlay"></div>
                            </div>
                            <div className="service-content">
                                <h3>Étude & Conception 3D</h3>
                                <p style={{ color: 'var(--text-light)' }}>
                                    Notre bureau d'étude réalise des plans détaillés et des modélisations 3D pour vous projeter dans votre futur jardin avant le début des travaux. Choix des végétaux adaptés au climat toulousain, agencement des volumes et gestion de l'espace.
                                </p>
                                <Link to="/services" className="service-link">
                                    En savoir plus <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services02.jpg" alt="Entretien jardin Toulouse" />
                                <div className="service-overlay"></div>
                            </div>
                            <div className="service-content">
                                <h3>Entretien & Soins</h3>
                                <p style={{ color: 'var(--text-light)' }}>
                                    Contrats d'entretien annuels ou ponctuels : tonte de pelouse, taille de haies, élagage d'arbres, désherbage écologique. Profitez d'un jardin impeccable en toute saison sans le moindre effort. Service éligible au crédit d'impôt.
                                </p>
                                <Link to="/services" className="service-link">
                                    Nos forfaits <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services03.jpg" alt="Maçonnerie paysagère et terrasse" />
                                <div className="service-overlay"></div>
                            </div>
                            <div className="service-content">
                                <h3>Aménagement & Maçonnerie</h3>
                                <p style={{ color: 'var(--text-light)' }}>
                                    Création de terrasses (bois, composite, carrelage), allées carrossables, murets en pierre, installation de clôtures et pose de gazon en rouleau. Nous structurons votre extérieur pour le rendre fonctionnel et esthétique.
                                </p>
                                <Link to="/services" className="service-link">
                                    Voir nos réalisations <i className="fas fa-arrow-right"></i>
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

            {/* Google Reviews Section */}
            <section className="section-padding reveal" style={{ background: 'linear-gradient(to bottom, #f8fafc, #fff)' }}>
                <div className="container">
                    <div className="section-title-wrapper">
                        <span className="section-tag">Témoignages</span>
                        <h2 className="section-title">Ils nous font confiance</h2>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', color: '#fbbf24' }}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <span style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--secondary-color)' }}>4.9/5</span>
                            <span style={{ color: 'var(--text-light)' }}>sur Google</span>
                        </div>
                    </div>

                    <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {/* Review 1 - Jules Paulhiac */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#e0f2fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#0369a1' }}>JP</div>
                                    <div>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0 }}>Jules Paulhiac</h4>
                                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>7 avis • Il y a 3 mois</span>
                                    </div>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '18px', opacity: 0.6 }} />
                            </div>
                            <div style={{ color: '#fbbf24', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                                "Franchement au top ! Je recommande à tout mon entourage. Gabriel a été super arrangeant et très pro. Super travail ! À bientôt !"
                            </p>
                            <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Visité en septembre 2025</span>
                        </div>

                        {/* Review 2 - Bertrand Cazaux */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#15803d' }}>BC</div>
                                    <div>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0 }}>Bertrand Cazaux</h4>
                                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>4 avis • Il y a 8 mois</span>
                                    </div>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '18px', opacity: 0.6 }} />
                            </div>
                            <div style={{ color: '#fbbf24', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                                "Le devis n'était pas le moins cher. J'ai suivi les conseils de mon frère qu'il a fait travailler chez lui et je suis très satisfait."
                            </p>
                            <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Visité en avril 2025</span>
                        </div>

                        {/* Review 3 - Oliver Letang */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#b45309' }}>OL</div>
                                    <div>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0 }}>Oliver Letang</h4>
                                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>1 avis • Il y a 8 mois</span>
                                    </div>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '18px', opacity: 0.6 }} />
                            </div>
                            <div style={{ color: '#fbbf24', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                                "Très satisfait du travail réalisé ! Réactif, professionnel et à l’écoute. Le résultat est impeccable, exactement ce qu’on attendait. Je recommande vivement !"
                            </p>
                            <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Visité en avril 2025</span>
                        </div>

                        {/* Review 4 - Laurent Paniagua */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#fae8ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#86198f' }}>LP</div>
                                    <div>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0 }}>Laurent Paniagua</h4>
                                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Local Guide • 22 avis</span>
                                    </div>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '18px', opacity: 0.6 }} />
                            </div>
                            <div style={{ color: '#fbbf24', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                                "Entreprise efficace, bien équipé, tarifs défiant toutes concurrences, personnel ponctuel et souriant, je recommande G.P Jardin. 👌👍"
                            </p>
                            <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Visité en avril 2025</span>
                        </div>
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
