import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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
        <div className="home-page">
            <Helmet>
                <title>Paysagiste Toulouse - Conception & Entretien Jardin | GP Jardin</title>
                <meta name="description" content="GP Jardin, votre paysagiste expert à Toulouse et Haute-Garonne. Création de jardins sur mesure, entretien espaces verts, élagage et aménagement extérieur. Devis gratuit." />
                <link rel="canonical" href="https://gpjardin.com/" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "LandscapeService",
                            "name": "GP Jardin",
                            "image": "https://gpjardin.com/acceuil.jpg",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Toulouse",
                                "addressRegion": "Occitanie",
                                "addressCountry": "FR"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 43.6047,
                                "longitude": 1.4442
                            },
                            "url": "https://gpjardin.com",
                            "telephone": "+33666703045",
                            "priceRange": "$$"
                        }
                    `}
                </script>
            </Helmet>
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

            {/* Process Section - Bento Grid Style */}
            <section className="section-padding reveal" style={{ background: '#0f172a', color: 'white' }}>
                <div className="container">
                    <div className="section-title-wrapper" style={{ marginBottom: '4rem' }}>
                        <span className="section-tag" style={{ background: 'rgba(255,255,255,0.1)', color: '#4ade80', border: 'none' }}>Notre Méthode</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Votre jardin de rêve en 3 étapes</h2>
                        <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
                            Une approche structurée et transparente pour transformer vos idées en réalité, sans stress et sans surprise.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        {/* Step 1 */}
                        <div style={{ background: '#1e293b', padding: '2.5rem', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', fontWeight: '800', color: 'white', opacity: '0.03' }}>1</div>
                            <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #4ade80, #22c55e)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#064e3b', marginBottom: '1.5rem', boxShadow: '0 10px 20px -5px rgba(74, 222, 128, 0.4)' }}>
                                <i className="fas fa-comments"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Consultation</h3>
                            <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                                Nous vous rencontrons chez vous pour capter l'essence de votre projet. Écoute de vos envies, analyse du terrain et premiers conseils d'experts.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div style={{ background: '#1e293b', padding: '2.5rem', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', fontWeight: '800', color: 'white', opacity: '0.03' }}>2</div>
                            <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#0c4a6e', marginBottom: '1.5rem', boxShadow: '0 10px 20px -5px rgba(56, 189, 248, 0.4)' }}>
                                <i className="fas fa-pencil-ruler"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Conception</h3>
                            <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                                Création des plans, choix des matériaux et des végétaux. Nous affinons ensemble le projet jusqu'à ce qu'il corresponde parfaitement à votre vision.
                            </p>
                        </div>

                        {/* Step 3 - Wide Card */}
                        <div style={{ background: '#1e293b', padding: '2.5rem', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ position: 'absolute', top: '-20px', right: '20px', fontSize: '10rem', fontWeight: '800', color: 'white', opacity: '0.03' }}>3</div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                                <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #facc15, #eab308)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#422006', marginBottom: '1.5rem', boxShadow: '0 10px 20px -5px rgba(250, 204, 21, 0.4)', flexShrink: 0 }}>
                                    <i className="fas fa-tools"></i>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Réalisation & Suivi</h3>
                                    <p style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '1.1rem', maxWidth: '800px' }}>
                                        Nos équipes qualifiées prennent le relais pour donner vie au projet. Travail soigné, respect des délais et chantier propre. Une fois terminé, nous restons à vos côtés pour l'entretien et l'évolution de votre jardin.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

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
            <section className="section-padding reveal" style={{ background: '#f0fdf4', position: 'relative' }}>
                {/* Decorative leaf pattern overlay (optional, subtle) */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(#22c55e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', opacity: 0.1, pointerEvents: 'none' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-title-wrapper">
                        <span className="section-tag" style={{ background: 'white', color: '#15803d' }}>Témoignages</span>
                        <h2 className="section-title" style={{ color: '#14532d' }}>Ils nous font confiance</h2>
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

            {/* Zone d'Intervention Section */}
            <section className="section-padding reveal" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div className="section-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                        {/* Content Side */}
                        <div>
                            <span className="section-tag">Rayon d'action</span>
                            <h2 className="section-title">Nous intervenons chez vous</h2>
                            <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                Basés au cœur de Toulouse, nous nous déplaçons dans toute l'agglomération et le département pour donner vie à vos projets d'aménagements extérieurs.
                            </p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#ecfccb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#65a30d' }}>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>Toulouse Métropole</h4>
                                        <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Intervention rapide & estimation gratuite</span>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#e0f2fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                                        <i className="fas fa-city"></i>
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>Périphérie (30km)</h4>
                                        <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Blagnac, Colomiers, Balma, L'Union, Tournefeuille...</span>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706' }}>
                                        <i className="fas fa-car-side"></i>
                                    </div>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>Haute-Garonne & Occitanie</h4>
                                        <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Déplacement sur devis selon l'ampleur du projet</span>
                                    </div>
                                </li>
                            </ul>

                            <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', borderLeft: '4px solid var(--primary-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                                <p style={{ margin: 0, fontStyle: 'italic', color: '#64748b', fontSize: '0.95rem' }}>
                                    <i className="fas fa-info-circle" style={{ marginRight: '8px', color: 'var(--primary-color)' }}></i>
                                    Pour les chantiers importants, nous étudions toutes demandes de déplacement hors zone habituelle. N'hésitez pas à nous consulter.
                                </p>
                            </div>
                        </div>

                        {/* Visual Side - Premium Interactive Map */}
                        <div style={{ position: 'relative', height: '500px', background: '#f8fafc', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)', border: '1px solid white' }}>

                            {/* Technical Grid Background */}
                            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }}></div>

                            {/* Decorative Radial Gradient */}
                            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, rgba(248,250,252,1) 80%)' }}></div>

                            {/* Map Container - Centered */}
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                {/* Zone 3: Haute-Garonne (Wide) */}
                                <div style={{ position: 'absolute', width: '550px', height: '550px', border: '1px dashed #cbd5e1', borderRadius: '50%', opacity: 0.6 }}></div>
                                <div style={{ position: 'absolute', top: '150px', right: '100px', background: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', color: '#94a3b8', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>Zone 3</div>

                                {/* Zone 2: Agglomération (Medium) */}
                                <div style={{ position: 'absolute', width: '350px', height: '350px', border: '1px solid #94a3b8', borderRadius: '50%', background: 'rgba(236, 252, 203, 0.15)' }}></div>
                                <div style={{ position: 'absolute', top: '210px', right: '230px', background: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', color: '#65a30d', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', fontWeight: '600' }}>Zone 2</div>

                                {/* Zone 1: Toulouse Centre (Small) */}
                                <div style={{ position: 'absolute', width: '180px', height: '180px', background: 'white', borderRadius: '50%', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                                    <div className="animate-pulse-ring" style={{ width: '100px', height: '100px', borderRadius: '50%', position: 'relative' }}></div>
                                    <div style={{ width: '16px', height: '16px', background: '#ef4444', borderRadius: '50%', position: 'relative', zIndex: 20, boxShadow: '0 0 0 4px rgba(255,255,255,1), 0 0 20px rgba(239,68,68,0.4)' }}></div>
                                    <div style={{ position: 'absolute', bottom: '-40px', fontWeight: '800', color: '#1e293b', fontSize: '1.1rem', letterSpacing: '-0.5px' }}>TOULOUSE</div>
                                </div>

                                {/* Floating Location Cards */}
                                <div className="animate-float" style={{ position: 'absolute', top: '25%', left: '20%', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', padding: '10px 16px', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.8)', zIndex: 20 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '8px', height: '8px', background: '#0ea5e9', borderRadius: '50%' }}></div>
                                        <span style={{ fontWeight: '600', fontSize: '0.9rem', color: '#334155' }}>Colomiers</span>
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', marginTop: '2px' }}>15 min</span>
                                </div>

                                <div className="animate-float" style={{ position: 'absolute', bottom: '30%', right: '15%', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', padding: '10px 16px', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.8)', zIndex: 20, animationDelay: '1s' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '8px', height: '8px', background: '#0ea5e9', borderRadius: '50%' }}></div>
                                        <span style={{ fontWeight: '600', fontSize: '0.9rem', color: '#334155' }}>Labège</span>
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', marginTop: '2px' }}>20 min</span>
                                </div>

                                <div className="animate-float" style={{ position: 'absolute', top: '20%', right: '25%', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', padding: '10px 16px', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.8)', zIndex: 20, animationDelay: '2s' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{ width: '8px', height: '8px', background: '#0ea5e9', borderRadius: '50%' }}></div>
                                        <span style={{ fontWeight: '600', fontSize: '0.9rem', color: '#334155' }}>Balma</span>
                                    </div>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', marginTop: '2px' }}>10 min</span>
                                </div>

                                {/* Connecting Lines (SVG overlay) */}
                                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.3 }} viewBox="0 0 500 500">
                                    <defs>
                                        <linearGradient id="lineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0" />
                                            <stop offset="50%" stopColor="#cbd5e1" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    {/* Abstract paths - fixed d attributes */}
                                    <path d="M250 250 L150 150" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5,5" />
                                    <path d="M250 250 L350 350" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5,5" />
                                    <path d="M250 250 L350 150" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5,5" />
                                </svg>

                            </div>
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
            </section >
        </div >
    );
};

export default Home;
