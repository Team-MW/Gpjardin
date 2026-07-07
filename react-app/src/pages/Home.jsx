import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FAQ from '../components/FAQ';

const homeFaqs = [
    { question: "Quels types d'aménagements paysagers réalisez-vous à Toulouse ?", answer: "Nous couvrons l'ensemble des besoins en aménagement extérieur : création de jardins sur-mesure (zen, méditerranéen, moderne), pose de terrasses en bois exotique, plantation de massifs, engazonnement, et petite maçonnerie paysagère." },
    { question: "Proposez-vous des contrats d'entretien pour les jardins existants ?", answer: "Oui, nous proposons des contrats annuels ou des interventions ponctuelles pour la tonte, la taille des haies, l'élagage et le nettoyage de vos espaces verts, avec la possibilité de bénéficier d'avantages fiscaux (service à la personne)." },
    { question: "Combien coûte la création d'un jardin ?", answer: "Le budget varie selon la surface, les matériaux choisis et la complexité des aménagements. Nous proposons toujours une première visite suivie d'un devis transparent et détaillé, sans surprise." },
    { question: "Faites-vous des visualisations 3D de mon futur jardin ?", answer: "Absolument. Notre bureau d'étude peut concevoir des modélisations 3D pour vous permettre de vous projeter visuellement dans votre futur espace avant le début des travaux." }
];
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
                        <Link to="/contact#devis" className="btn btn-primary">
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





            {/* Instagram Section */}
            <section className="section-padding reveal" style={{ background: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="section-title-wrapper" style={{ marginBottom: '3rem' }}>
                        <span className="section-tag" style={{ color: '#e1306c' }}>Nos Réalisations</span>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                            <a 
                                href="https://www.instagram.com/gp.jardin31/?igsh=MzNscnd4dmMxaTI4" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    gap: '15px', 
                                    textDecoration: 'none',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <i className="fab fa-instagram" style={{ fontSize: '2.5rem', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>
                                <h2 className="section-title" style={{ fontSize: '2.2rem', margin: 0, background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                    Suivez-nous sur Instagram
                                </h2>
                            </a>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', justifyItems: 'center' }}>
                        <video 
                            src="/videos/video1.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            style={{ maxWidth: '400px', width: '100%', height: '580px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        ></video>
                        <video 
                            src="/videos/video2.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            style={{ maxWidth: '400px', width: '100%', height: '580px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        ></video>
                        <video 
                            src="/videos/video3.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            style={{ maxWidth: '400px', width: '100%', height: '580px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        ></video>
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
                                <h3>Conception, Design & Création</h3>
                                <p style={{ color: 'var(--text-light)' }}>
                                    En tant que jardinier paysagiste, notre bureau d'étude réalise vos plans 3D, étudie les sols et sélectionne les végétaux. Nous gérons votre projet de A à Z : création de jardin, conception paysagère et aménagement d'espaces verts uniques.
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
                                <h3>Entretien de Jardins</h3>
                                <p style={{ color: 'var(--text-light)' }}>
                                    Pour un extérieur impeccable : tonte de gazon, désherbage manuel, entretien de haie, taille d'arbuste, taille d'arbre et élagage. Bénéficiez de l'expertise d'un véritable professionnel pour préserver la santé de votre jardin.
                                </p>
                                <Link to="/services" className="service-link">
                                    Nos forfaits <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="/amenagement_paysager.png" alt="Aménagement paysager" />
                                <div className="service-overlay"></div>
                            </div>
                            <div className="service-content">
                                <h3>Aménagement paysager</h3>
                                <p style={{ color: 'var(--text-light)' }}>
                                    Structuration de vos espaces : dallage de jardin, création de bassin de jardin, pose de murets, création de massif et parterre. Nous aménageons des allées et mettons en valeur chaque recoin de votre propriété.
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

            {/* Trusted By / Syndicates Section */}
            <section className="section-padding reveal" style={{ background: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="section-title-wrapper" style={{ marginBottom: '4rem' }}>
                        <span className="section-tag">Partenaires de confiance</span>
                        <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Syndicats et copropriétés qui nous font confiance</h2>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                            <img src="/Unknown.png" alt="Adhetec Solutions" style={{ maxHeight: '80px', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.3s', objectFit: 'contain' }} onMouseOver={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1'; }} onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.7'; }} />
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Adhetec Solutions à Colomiers</span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                            <img src="/si.jpg" alt="Service à la personne" style={{ maxHeight: '80px', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.3s', objectFit: 'contain' }} onMouseOver={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1'; }} onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.7'; }} />
                            <span style={{ fontWeight: '600', color: '#64748b' }}>Service à la personne</span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                            <img src="/logo7D--en-transparence.png" alt="7D Immobilier" style={{ maxHeight: '80px', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.3s', objectFit: 'contain' }} onMouseOver={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.opacity = '1'; }} onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.7'; }} />
                            <span style={{ fontWeight: '600', color: '#64748b' }}>7D Immobilier</span>
                        </div>

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
                            <span style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--secondary-color)' }}>5/5</span>
                            <span style={{ color: 'var(--text-light)' }}>sur Google</span>
                        </div>
                        <a href="https://www.google.com/search?sca_esv=d7a897ae2fa4bc83&rlz=1C5CHFA_enFR1186FR1186&sxsrf=APpeQnunnVN1DImeksln72oGGpwj2l9tFw:1783433888272&q=Gp%20Jardin%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2N7c0NTWyNLI0NLEwsDQwNDE338DI-IqRz71AwSuxKCUzT8GxLLN4ESuaAABwhiYYPAAAAA&rldimm=7795529291480901477&tbm=lcl&hl=fr-CH&sa=X&ved=0CBEQ5foLahcKEwigrL_74MCVAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=ChZDSUhNMG9nS0VJQ0FnSURpdXZhbFZnEAE" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', display: 'inline-flex', gap: '8px', background: 'white', color: '#15803d', border: '1px solid #15803d', borderRadius: '50px' }}>
                            <i className="fab fa-google"></i> Laisser un avis
                        </a>
                    </div>

                    {/* CSS for hiding scrollbar added inline for portability */}
                    <style>{`
                        .reviews-scroll::-webkit-scrollbar { display: none; }
                        .reviews-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                    `}</style>
                    <div className="reviews-scroll" style={{ display: 'flex', overflowX: 'auto', gap: '2rem', padding: '1rem 0 2rem 0', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', margin: '0 -15px', paddingLeft: '15px', paddingRight: '15px' }}>
                        
                        {/* Review 1 - Paul Sanches */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.05)', minWidth: '320px', flex: '0 0 auto', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#334155', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>PS</div>
                                    <div>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, color: '#202124' }}>Paul Sanches</h4>
                                        <span style={{ fontSize: '0.8rem', color: '#70757a' }}>13 avis • 1 photo</span>
                                    </div>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '18px', opacity: 0.8 }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                                <div style={{ color: '#fbbc04', fontSize: '0.9rem' }}>
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                                <span style={{ fontSize: '0.8rem', color: '#70757a' }}>il y a 7 ans</span>
                            </div>
                            <p style={{ color: '#3c4043', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem', flex: 1 }}>
                                "Un super service, j'ai fait appel à eux 2 fois et mon jardin était nickel à chaque fois suite à leur intervention, je recommande !"
                            </p>
                        </div>

                        {/* Review 2 - Sylvain Sanchis */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.05)', minWidth: '320px', flex: '0 0 auto', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#0284c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>SS</div>
                                    <div>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, color: '#202124' }}>Sylvain Sanchis</h4>
                                        <span style={{ fontSize: '0.8rem', color: '#70757a' }}>7 avis</span>
                                    </div>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '18px', opacity: 0.8 }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                                <div style={{ color: '#fbbc04', fontSize: '0.9rem' }}>
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                                <span style={{ fontSize: '0.8rem', color: '#70757a' }}>il y a 7 ans</span>
                            </div>
                            <p style={{ color: '#3c4043', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem', flex: 1 }}>
                                "Répond à tous vos exigences et plus donne de très bon conseil en rapport au terrain et la région je RECOMMANDE FORTEMENT"
                            </p>
                        </div>

                        {/* Review 3 - Véronique Pascal */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.05)', minWidth: '320px', flex: '0 0 auto', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#14b8a6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>VP</div>
                                    <div>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, color: '#202124' }}>Véronique Pascal</h4>
                                        <span style={{ fontSize: '0.8rem', color: '#70757a' }}>4 avis</span>
                                    </div>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '18px', opacity: 0.8 }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                                <div style={{ color: '#fbbc04', fontSize: '0.9rem' }}>
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                                <span style={{ fontSize: '0.8rem', color: '#70757a' }}>il y a un an</span>
                            </div>
                            <p style={{ color: '#3c4043', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem', flex: 1 }}>
                                "Un résultat parfait !"
                            </p>
                            <span style={{ fontSize: '0.8rem', color: '#70757a' }}>Visité en mai 2025</span>
                        </div>

                        {/* Review 4 - david C */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.05)', minWidth: '320px', flex: '0 0 auto', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#d97706', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>d</div>
                                    <div>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, color: '#202124' }}>david C</h4>
                                        <span style={{ fontSize: '0.8rem', color: '#70757a' }}>7 avis</span>
                                    </div>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '18px', opacity: 0.8 }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                                <div style={{ color: '#fbbc04', fontSize: '0.9rem' }}>
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                                <span style={{ fontSize: '0.8rem', color: '#70757a' }}>il y a 5 ans</span>
                            </div>
                            <p style={{ color: '#3c4043', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem', flex: 1 }}>
                                "Un excellent artisan : les devis sont clairs et détaillés, le créneau d'intervention respecté, l'équipe est professionnelle et sympathique, Yann Perrot est force de proposition et a l'amour du travail bien fait. Il assure également un ..."
                            </p>
                            <span style={{ fontSize: '0.8rem', color: '#70757a' }}>Visité en octobre 2020</span>
                        </div>

                        {/* Review 5 - Sonia Perrot */}
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0,0,0,0.05)', minWidth: '320px', flex: '0 0 auto', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#b45309', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>S</div>
                                    <div>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, color: '#202124' }}>Sonia Perrot</h4>
                                        <span style={{ fontSize: '0.8rem', color: '#70757a' }}>10 avis • 1 photo</span>
                                    </div>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '18px', opacity: 0.8 }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                                <div style={{ color: '#fbbc04', fontSize: '0.9rem' }}>
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                                <span style={{ fontSize: '0.8rem', color: '#70757a' }}>il y a un an</span>
                            </div>
                            <p style={{ color: '#3c4043', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem', flex: 1 }}>
                                "Super paysagiste à l'écoute de c'est client très sérieux avec beaucoup de bonne idée je le recommande fortement"
                            </p>
                            <span style={{ fontSize: '0.8rem', color: '#70757a' }}>Visité en mai 2025</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* Zone d'Intervention Section */}
            <section className="section-padding reveal" style={{ background: '#f8fafc', padding: '6rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '2rem', color: '#1a1a1a', textTransform: 'none', fontStyle: 'normal' }}>
                            <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-color)' }}></i> Zones d'Intervention
                        </h2>
                        <p style={{ marginTop: '1rem', color: '#666', fontSize: '1.1rem' }}>
                            Nous intervenons rapidement sur Toulouse et toute sa périphérie :
                        </p>
                    </div>
                    
                    <div className="cities-pills-container">
                        {[
                            { name: "Toulouse", id: "toulouse" }, { name: "Blagnac", id: "blagnac" },
                            { name: "Colomiers", id: "colomiers" }, { name: "Tournefeuille", id: "tournefeuille" },
                            { name: "Plaisance-du-Touch", id: "plaisance-du-touch" }, { name: "Cugnaux", id: "cugnaux" },
                            { name: "Muret", id: "muret" }, { name: "Portet-sur-Garonne", id: "portet-sur-garonne" },
                            { name: "Pibrac", id: "pibrac" }, { name: "Cornebarrieu", id: "cornebarrieu" },
                            { name: "Launaguet", id: "launaguet" },
                            { name: "Léguevin", id: "leguevin" }, { name: "Brax", id: "brax" },
                            { name: "La Salvetat-St-G.", id: "la-salvetat-saint-gilles" }, { name: "Villeneuve-T.", id: "villeneuve-tolosane" },
                            { name: "Frouzins", id: "frouzins" }, { name: "Seysses", id: "seysses" },
                            { name: "Fonsorbes", id: "fonsorbes" }, { name: "Saint-Lys", id: "saint-lys" },
                            { name: "Grenade", id: "grenade" }
                        ].map((city, index) => (
                            <Link key={index} to={`/secteur/${city.id}`} className="city-pill">
                                {city.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Section / Expertises */}
            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="section-tag">Notre Savoir-Faire</span>
                        <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Toutes nos prestations d'aménagement et d'entretien</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '40px', height: '40px', background: '#dcfce7', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#166534' }}><i className="fas fa-leaf"></i></div>
                                Détails de nos interventions
                            </h3>
                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                <li style={{ display: 'flex', gap: '15px' }}><i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i><span>La préparation du terrain (nettoyage, nivellement, apport de terre).</span></li>
                                <li style={{ display: 'flex', gap: '15px' }}><i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i><span>La plantation d'arbres, d'arbustes, de fleurs ou de gazon.</span></li>
                                <li style={{ display: 'flex', gap: '15px' }}><i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i><span>La création de massifs, de haies ou d'un potager.</span></li>
                                <li style={{ display: 'flex', gap: '15px' }}><i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i><span>L'aménagement paysager : allées, bordures, rocailles, paillage.</span></li>
                                <li style={{ display: 'flex', gap: '15px' }}><i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginTop: '4px' }}></i><span>La pose d'éléments décoratifs ou pratiques : terrasse, clôture, pergola, éclairage extérieur, etc.</span></li>
                            </ul>
                        </div>
                        
                        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '40px', height: '40px', background: '#e0f2fe', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0369a1' }}><i className="fas fa-tags"></i></div>
                                Nos spécialités
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {[
                                    "Création de bassin de jardin", "Création de jardin", "Désherbage", "Dessouchage", 
                                    "Elagage d’arbres", "Entretien d’arbre", "Entretien de haie", "Taille d’arbre", 
                                    "Jardinier paysagiste", "Jardinier élagueur", "Taille d’arbuste", "Taille d’arbre fruitier", 
                                    "Tonte de gazon", "Traitement des arbres", "Dallage de jardin", "Entretien", 
                                    "Création", "Aménagement"
                                ].map((keyword, i) => (
                                    <span key={i} style={{ background: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem', color: '#475569', border: '1px solid #cbd5e1', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ faqs={homeFaqs} />

            {/* CTA Section - Modern */}
            <section className="container reveal">
                <div className="cta-modern">
                    <div className="cta-content">
                        <h2 className="cta-title">Prêt à concrétiser votre projet ?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                            Bénéficiez d'une première consultation gratuite pour discuter de vos envies.
                        </p>
                        <Link to="/contact#devis" className="btn btn-primary" style={{ minWidth: '200px' }}>
                            Obtenir un devis gratuit
                        </Link>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;
