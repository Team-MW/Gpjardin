import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar">
                <div className="logo">
                    <Link to="/">
                        <img
                            src="https://gpjardin.microdidact.com/wp-content/uploads/2025/06/logo-V2-143x106.png"
                            alt="GP JARDIN Logo"
                        />
                    </Link>
                </div>

                <nav>
                    <button
                        className="mobile-menu-toggle"
                        aria-label="Menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li>
                            <Link
                                to="/"
                                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                À propos de nous
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Nos services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Nos projets
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Nous contacter
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="header-cta">
                    <Link to="/contact" className="btn btn-primary">
                        Devis Gratuit
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
