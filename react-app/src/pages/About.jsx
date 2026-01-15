import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ backgroundImage: "url('/aproposdenous.jpg')" }}>
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
                        <div className="about-content">
                            <span className="section-tag">Qui sommes-nous</span>
                            <h2 className="section-title">Plus de 25 ans de passion pour la nature</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                                Fondée en 1998, GP JARDIN est née d'une vision simple : reconnecter les citadins à la nature. Ce qui a commencé comme une petite entreprise familiale est devenu une référence dans l'aménagement paysager à Toulouse.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                                Notre philosophie repose sur le respect de l'environnement, l'écoute attentive de nos clients et l'excellence technique. Chaque jardin est pour nous une toile vierge où nous peignons avec des fleurs, des pierres et de la lumière.
                            </p>

                            <div className="checklist">
                                <div className="checklist-item">
                                    <span className="checklist-icon"><i className="fas fa-check-circle"></i></span>
                                    <span>Équipe d'experts qualifiés et passionnés</span>
                                </div>
                                <div className="checklist-item">
                                    <span className="checklist-icon"><i className="fas fa-check-circle"></i></span>
                                    <span>Utilisation de matériaux durables et écologiques</span>
                                </div>
                                <div className="checklist-item">
                                    <span className="checklist-icon"><i className="fas fa-check-circle"></i></span>
                                    <span>Service client réactif et personnalisé</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-image-wrapper">
                            <div className="dot-pattern"></div>
                            <img
                                src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/about-2.jpg"
                                alt="Notre équipe"
                                className="main-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding" style={{ background: 'var(--secondary-color)', color: 'var(--white)' }}>
                <div className="container">
                    <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>25+</div>
                            <div>Années d'expérience</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>500+</div>
                            <div>Jardins Créés</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>100%</div>
                            <div>Clients Satisfaits</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>10+</div>
                            <div>Prix de Design</div>
                        </div>
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
                            <h3 className="feature-title">Conception</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Nos architectes paysagistes créent des plans détaillés et des vues 3D pour vous projeter dans votre futur jardin.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-number" style={{ fontSize: '4rem', fontWeight: '800', opacity: '0.1', position: 'absolute', top: '10px', right: '20px' }}>03</div>
                            <h3 className="feature-title">Réalisation</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Notre équipe technique réalise les travaux avec soin, en respectant les délais et votre propriété.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-number" style={{ fontSize: '4rem', fontWeight: '800', opacity: '0.1', position: 'absolute', top: '10px', right: '20px' }}>04</div>
                            <h3 className="feature-title">Entretien</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Nous proposons des services de suivi pour que votre jardin s'épanouisse et reste beau au fil des saisons.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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
