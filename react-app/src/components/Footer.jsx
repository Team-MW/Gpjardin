import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-grid">
                        {/*     dd. Branding */}
                        <div className="footer-col branding-col">
                            <Link to="/" className="footer-logo-link">
                                <img
                                    src="https://gpjardin.microdidact.com/wp-content/uploads/2025/06/logo-V2-143x106.png"
                                    alt="GP JARDIN"
                                    className="footer-logo"
                                />
                            </Link>
                            <p className="footer-desc">
                                Votre expert en aménagement paysager depuis plus de 25 ans. Nous
                                transformons vos espaces extérieurs en véritables havres de paix,
                                alliant esthétisme et durabilité.
                            </p>
                            <div className="footer-social">
                                <a
                                    href="https://www.instagram.com/gp.jardin31/?igsh=MzNscnd4dmMxaTI4"
                                    className="social-link instagram-btn"
                                    aria-label="Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                                        color: 'white',
                                        border: 'none',
                                        width: 'auto',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '50px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        boxShadow: '0 10px 20px -5px rgba(220, 39, 67, 0.5)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(220, 39, 67, 0.7)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(220, 39, 67, 0.5)';
                                    }}
                                >
                                    <i className="fab fa-instagram" style={{ fontSize: '1.4rem' }}></i>
                                    <span>Suivez-nous sur Insta</span>
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4 className="footer-heading">Nos Services</h4>
                            <ul className="footer-links">
                                <li>
                                    <Link to="/services">Conception & Planification</Link>
                                </li>
                                <li>
                                    <Link to="/services">Entretien de Pelouse</Link>
                                </li>
                                <li>
                                    <Link to="/services">Architecture Paysagère</Link>
                                </li>
                                <li>
                                    <Link to="/services">Plantations Saisonnières</Link>
                                </li>
                                <li>
                                    <Link to="/services">Élagage & Soin des Arbres</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Links */}
                        <div className="footer-col">
                            <h4 className="footer-heading">Liens Rapides</h4>
                            <ul className="footer-links">
                                <li>
                                    <Link to="/">Accueil</Link>
                                </li>
                                <li>
                                    <Link to="/about">À propos de nous</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Nos Réalisations</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Demander un Devis</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact & Horaires */}
                        <div className="footer-col contact-col">
                            <h4 className="footer-heading">Nous Contacter</h4>
                            <ul className="footer-links footer-contact">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Toulouse et ses environs,<br />Occitanie, France</span>
                                </li>
                                <li>
                                    <i className="fas fa-phone-alt"></i>
                                    <a href="tel:+33666703045" className="phone-link">06 66 70 30 45</a>
                                </li>
                                <li>
                                    <i className="fas fa-envelope"></i>
                                    <a href="mailto:contact@gpjardin.com">contact@gpjardin.com</a>
                                </li>
                            </ul>

                            <h4 className="footer-heading" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Horaires</h4>
                            <ul className="footer-links" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span>Lundi - Vendredi:</span>
                                    <span style={{ color: 'white' }}>08:00 – 19:00</span>
                                </li>
                                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Samedi - Dimanche:</span>
                                    <span style={{ color: '#ef4444' }}>Fermé</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>&copy; {new Date().getFullYear()} GP JARDIN. Tous droits réservés.</p>
                    </div>
                    <div className="footer-legal">
                        <Link to="/mentions-legales">Mentions Légales</Link>
                        <span className="separator">•</span>
                        <Link to="/confidentialite">Confidentialité</Link>
                    </div>
                    <div className="footer-credits">
                        <p>
                            Réalisé par{' '}
                            <a
                                href="https://microdidact.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Microdidact
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
