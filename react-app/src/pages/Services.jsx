import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            title: 'Conception et Design',
            description: 'Plans 3D, étude de sol et choix des végétaux pour un jardin qui vous ressemble.',
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services05.jpg',
            icon: 'fa-pencil-ruler'
        },
        {
            title: 'Entretien de Jardins',
            description: 'Tonte, taille de haies, désherbage et soins des plantes pour un extérieur impeccable.',
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services02.jpg',
            icon: 'fa-cut'
        },
        {
            title: 'Maçonnerie Paysagère',
            description: 'Création de terrasses, allées, murets et bassins pour structurer votre espace.',
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services03.jpg',
            icon: 'fa-hard-hat'
        },
        {
            title: 'Plantations & Gazon',
            description: 'Installation de gazon en rouleau, plantation d\'arbres et massifs floraux.',
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services04.jpg',
            icon: 'fa-seedling'
        },
        {
            title: 'Arrosage Automatique',
            description: 'Solutions d\'irrigation intelligentes pour économiser l\'eau et votre temps.',
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services-1.jpg',
            icon: 'fa-faucet'
        },
        {
            title: 'Éclairage Extérieur',
            description: 'Mise en valeur de votre jardin la nuit avec des ambiances lumineuses subtiles.',
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/projects-03.jpg',
            icon: 'fa-lightbulb'
        },
    ];

    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/nosservice.jpg')" }}>
                <div className="container">
                    <h1 className="page-title">Nos Services</h1>
                    <p className="page-breadcrumb">
                        <Link to="/" style={{ color: 'var(--white)' }}>Accueil</Link> &gt; Services
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="section-title-wrapper">
                        <span className="section-tag">Ce que nous faisons</span>
                        <h2 className="section-title">Expertise complète pour votre extérieur</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            Que vous ayez besoin d'une simple remise en état ou d'une création complète, nous avons les compétences pour réaliser votre vision.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                    <div className="service-overlay"></div>
                                </div>
                                <div className="service-content">
                                    <div className="feature-icon" style={{ width: '50px', height: '50px', fontSize: '1.2rem', marginBottom: '1rem' }}>
                                        <i className={`fas ${service.icon}`}></i>
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>{service.description}</p>
                                    <Link to="/contact" className="service-link">
                                        Demander un devis <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container" style={{ marginBottom: 'var(--spacing-lg)' }}>
                <div className="cta-modern">
                    <div className="cta-content">
                        <h2 className="cta-title">Un projet spécifique ?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                            Nous nous adaptons à toutes les demandes. Parlez-nous de vos besoins.
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

export default Services;
