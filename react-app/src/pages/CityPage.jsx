import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CityPage = () => {
    const { cityId } = useParams();
    
    // Convert url parameter to readable name (e.g. plaisance-du-touch -> Plaisance-du-Touch)
    const cityName = cityId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('-');

    return (
        <div className="city-page">
            <Helmet>
                <title>Paysagiste à {cityName} - Aménagement & Entretien | GP Jardin</title>
                <meta name="description" content={`GP Jardin, votre paysagiste expert à ${cityName}. Création de jardins sur mesure, entretien espaces verts, élagage et aménagement extérieur. Devis gratuit.`} />
            </Helmet>

            <section className="service-hero-premium" style={{ display: 'flex', alignItems: 'center', textAlign: 'left', minHeight: '80vh', padding: '150px 0 80px 0', position: 'relative', overflow: 'hidden' }}>
                <div className="hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                    <img src="/acceuil.jpg" alt={`Paysagiste ${cityName}`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
                    <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 100%)' }}></div>
                </div>
                
                <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
                    <div 
                        className="hero-content-left"
                        style={{ maxWidth: '800px', animation: 'fadeInUp 0.8s ease forwards' }}
                    >
                        <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Accueil</Link> / <Link to="/#zones" style={{ color: 'inherit', textDecoration: 'none' }}>Zones d'Intervention</Link> / <span style={{ color: 'var(--primary-color)' }}>{cityName}</span>
                        </div>

                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: '30px', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px', color: 'white' }}>
                            <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-color)' }}></i> INTERVENTION 31
                        </div>

                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: '1.1', marginBottom: '1.5rem', textTransform: 'none', fontStyle: 'normal', color: 'white', fontWeight: 800 }}>
                            Paysagiste à <span style={{ color: 'var(--primary-color)' }}>{cityName}</span>
                        </h1>

                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '650px' }}>
                            À proximité de Toulouse, {cityName} bénéficie de notre couverture complète. Création de jardins sur-mesure, entretien d'espaces verts, élagage et aménagements extérieurs.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a 
                                href="tel:+33666703045"
                                style={{ background: 'var(--primary-color)', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <i className="fas fa-phone-alt"></i> Appeler GP Jardin
                            </a>
                            
                            <Link 
                                to="/contact"
                                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '15px 30px', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'all 0.3s' }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            >
                                Devis Gratuit <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="section-title">Nos prestations à {cityName}</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            En tant que paysagiste de confiance intervenant à {cityName}, nous proposons une gamme complète de services pour sublimer votre extérieur. Que ce soit pour une conception paysagère de A à Z, l'entretien régulier de votre pelouse, ou la création d'une terrasse, notre équipe met son expertise à votre disposition.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CityPage;
