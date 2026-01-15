import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-grid">
                        {/* Branding */}
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
                                <a href="#" className="social-link" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-link" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="social-link" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in"></i>
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

                        {/* Contact */}
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
                                <li>
                                    <i className="fas fa-clock"></i>
                                    <span>Lun - Ven : 8h00 - 18h00</span>
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
