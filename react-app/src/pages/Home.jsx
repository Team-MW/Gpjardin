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





            {/* Instagram Section */}
            <section className="section-padding reveal" style={{ background: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="section-title-wrapper" style={{ marginBottom: '3rem' }}>
                        <span className="section-tag" style={{ color: '#e1306c' }}>Nos Réalisations</span>
                        <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Suivez-nous sur Instagram</h2>
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
                            { name: "Mondonville", id: "mondonville" }, { name: "Seilh", id: "seilh" },
                            { name: "Aussonne", id: "aussonne" }, { name: "Beauzelle", id: "beauzelle" },
                            { name: "Fenouillet", id: "fenouillet" }, { name: "Gagnac-sur-Garonne", id: "gagnac-sur-garonne" },
                            { name: "Lespinasse", id: "lespinasse" }, { name: "Saint-Alban", id: "saint-alban" },
                            { name: "Fonbeauzard", id: "fonbeauzard" }, { name: "Castelginest", id: "castelginest" },
                            { name: "Aucamville", id: "aucamville" }, { name: "Launaguet", id: "launaguet" },
                            { name: "Léguevin", id: "leguevin" }, { name: "Brax", id: "brax" },
                            { name: "La Salvetat-St-G.", id: "la-salvetat-saint-gilles" }, { name: "Villeneuve-T.", id: "villeneuve-tolosane" },
                            { name: "Frouzins", id: "frouzins" }, { name: "Seysses", id: "seysses" },
                            { name: "Fonsorbes", id: "fonsorbes" }, { name: "Saint-Lys", id: "saint-lys" },
                            { name: "Grenade", id: "grenade" }, { name: "Merville", id: "merville" }
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
