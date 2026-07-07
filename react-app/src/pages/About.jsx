import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import FAQ from '../components/FAQ';

const aboutFaqs = [
    { question: "Depuis combien de temps GP Jardin existe-t-elle ?", answer: "GP Jardin met son expertise et sa passion au service des particuliers et professionnels de la Haute-Garonne depuis 5 ans." },
    { question: "Où êtes-vous situés et quelle est votre zone d'intervention principale ?", answer: "Nous sommes basés près de Toulouse et intervenons principalement dans toute l'agglomération toulousaine, y compris Blagnac, Colomiers, Balma, et les communes environnantes." },
    { question: "Avez-vous une démarche éco-responsable ?", answer: "Oui, nous privilégions l'utilisation de matériaux durables, la sélection de plantes adaptées au climat local pour limiter l'arrosage, et des méthodes d'entretien respectueuses de la biodiversité (pas de produits phytosanitaires nocifs)." },
    { question: "Qu'est-ce qui différencie GP Jardin des autres paysagistes ?", answer: "Notre approche artisanale et notre statut de véritables 'architectes de la nature'. Nous offrons un accompagnement premium de la conception à la réalisation, avec un seul interlocuteur dédié." }
];

const StatItem = ({ end, suffix, label, icon }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        const duration = 2000; // 2 seconds

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress < duration) {
                // Ease out quart function for smooth effect
                const easeOutQuart = 1 - Math.pow(1 - progress / duration, 4);
                setCount(Math.floor(easeOutQuart * end));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end]);

    return (
        <div ref={ref} style={{ textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.1)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }}>
                <i className={`fas ${icon}`}></i>
            </div>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.5rem', lineHeight: 1 }}>
                {count}{suffix}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.8 }}>{label}</div>
        </div>
    );
};

const About = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ backgroundImage: "url('/illustration-de-travaux-de-jardinage.webp')" }}>
                <div className="container">
                    <h1 className="page-title">Notre Histoire</h1>
                    <p className="page-breadcrumb">
                        <Link to="/" style={{ color: 'var(--white)' }}>Accueil</Link> &gt; À Propos
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding" style={{ background: 'var(--white)' }}>
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
                                Depuis 5 ans, <strong>GP JARDIN</strong> met sa passion et son expertise au service des particuliers et professionnels de la région toulousaine. Plus qu'une simple entreprise de jardinage, nous sommes des architectes de la nature.
                            </p>
                            <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>
                                Que vous rêviez d'un <em>jardin zen</em>, d'une <em>terrasse en bois exotique</em> ou d'un <em>espace végétalisé nécessitant peu d'entretien</em>, notre bureau d'étude conçoit des projets sur-mesure qui valorisent votre patrimoine immobilier. Nous intervenons à Toulouse, Blagnac, Colomiers, Balma et dans toute l'agglomération pour la création et l'entretien de vos extérieurs.
                            </p>

                            <div className="stats-wrapper">
                                <div className="stat-box">
                                    <div className="stat-number">5</div>
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {/* Stats Section Animated */}
            <section className="section-padding" style={{ background: 'var(--secondary-color)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
                {/* Background elements */}
                <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '80%', height: '200%', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', transform: 'rotate(15deg)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>

                        <StatItem end={5} suffix="" label="Années d'expérience" icon="fa-hourglass-half" />
                        <StatItem end={500} suffix="+" label="Jardins Créés" icon="fa-tree" />
                        <StatItem end={100} suffix="%" label="Clients Satisfaits" icon="fa-smile" />

                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-title-wrapper">
                        <span className="section-tag">Notre Méthode</span>
                        <h2 className="section-title">Comment nous travaillons</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            Une approche structurée pour garantir le succès de votre projet, de la première idée à la dernière plantation.
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-number" style={{ fontSize: '4rem', fontWeight: '800', opacity: '0.1', position: 'absolute', top: '10px', right: '20px' }}>01</div>
                            <h3 className="feature-title">Consultation</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Nous nous rencontrons chez vous pour comprendre vos besoins, analyser votre terrain et discuter de vos envies.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-number" style={{ fontSize: '4rem', fontWeight: '800', opacity: '0.1', position: 'absolute', top: '10px', right: '20px' }}>02</div>
                            <h3 className="feature-title">Devis</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                À la suite de notre échange, nous vous proposons une étude personnalisée et un devis transparent, adapté à votre projet.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-number" style={{ fontSize: '4rem', fontWeight: '800', opacity: '0.1', position: 'absolute', top: '10px', right: '20px' }}>03</div>
                            <h3 className="feature-title">Réalisation</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Notre équipe technique réalise les travaux avec soin, en respectant les délais et votre propriété.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ faqs={aboutFaqs} />

            {/* CTA Section */}
            <section className="container" style={{ marginBottom: 'var(--spacing-lg)' }}>
                <div className="cta-modern">
                    <div className="cta-content">
                        <h2 className="cta-title">Envie de rejoindre nos clients heureux ?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                            Votre jardin de rêve n'est qu'à un clic.
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Contactez-nous
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
