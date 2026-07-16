import { Link } from 'react-router-dom';
import { useState } from 'react';
import FAQ from '../components/FAQ';

const servicesFaqs = [
    { question: "Gérez-vous la pose de systèmes d'arrosage automatique ?", answer: "Oui, nous installons des systèmes d'arrosage intégrés et connectés, programmables selon les besoins de chaque zone végétale pour optimiser votre consommation d'eau." },
    { question: "Réalisez-vous la pose de clôtures et de portails ?", answer: "Tout à fait. Nous posons tous types de clôtures (bois, rigide, végétalisée) pour délimiter, sécuriser et préserver l'intimité de votre propriété." },
    { question: "Est-ce que vos services d'entretien sont déductibles des impôts ?", answer: "Oui, pour les particuliers, nos prestations de petit jardinage et d'entretien courant entrent dans le cadre des services à la personne, vous permettant de bénéficier d'un crédit d'impôt de 50%." },
    { question: "Travaillez-vous aussi pour des professionnels ou des copropriétés ?", answer: "Oui, nous avons des partenariats avec plusieurs syndics et entreprises pour l'aménagement et l'entretien régulier de leurs espaces verts professionnels." }
];

const projectsFaqs = [
    { question: "Puis-je voir vos réalisations en vrai ?", answer: "Nos chantiers se situent chez des particuliers, nous ne pouvons donc pas les visiter librement. Cependant, nous avons un portfolio très complet de photos et vidéos (avant/après) que nous vous présenterons lors de notre premier rendez-vous." },
    { question: "Quel est le projet le plus ambitieux que vous ayez réalisé ?", answer: "Nous avons transformé des terrains vagues en véritables oasis avec piscine, terrasses multi-niveaux et jardins exotiques. Aucun projet n'est trop grand ni trop complexe pour notre bureau d'étude." },
    { question: "Travaillez-vous avec des architectes ou décorateurs extérieurs ?", answer: "Nous avons notre propre bureau d'étude pour concevoir vos plans 3D. Toutefois, si vous travaillez déjà avec un architecte, nous collaborons avec plaisir pour exécuter ses plans à la perfection." },
    { question: "Les végétaux que vous plantez sont-ils garantis ?", answer: "Oui, la reprise de nos plantations est garantie (sous condition de la mise en place d'un système d'arrosage automatique par nos soins). Si une plante ne survit pas la première année, nous la remplaçons." }
];

const combinedFaqs = [...servicesFaqs, ...projectsFaqs];

const Services = () => {
    const [filter, setFilter] = useState('Tous');
    const categories = ['Tous', 'Création', 'Entretien', 'Aménagement paysager'];

    const projects = [
        { id: 1, image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/projects-01.jpg', title: 'Jardin Zen Japonais', category: 'Création', location: 'Balma' },
        { id: 2, image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/projects-03.jpg', title: 'Terrasse Bois & Piscine', category: 'Aménagement', location: 'Tournefeuille' },
        { id: 3, image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/about-1.jpg', title: 'Entretien Parc Résidentiel', category: 'Entretien', location: 'Toulouse Centre' },
        { id: 4, image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/about-2.jpg', title: 'Massifs Fleuris Exotiques', category: 'Création', location: 'Blagnac' },
        { id: 5, image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services05.jpg', title: 'Conception 3D Villa', category: 'Création', location: 'L\'Union' },
        { id: 6, image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services03.jpg', title: 'Allée Carrossable Pavés', category: 'Aménagement paysager', location: 'Colomiers' },
    ];

    const filteredProjects = filter === 'Tous'
        ? projects
        : projects.filter(project => project.category === filter);

    const services = [
        {
            title: 'Conception et Design',
            description: 'En tant que jardinier paysagiste, notre bureau d\'étude réalise vos plans 3D, étudie les sols et sélectionne minutieusement les végétaux. Nous gérons votre projet de A à Z : création de jardin complet, conception paysagère et aménagement pour un extérieur qui vous ressemble vraiment.',
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services05.jpg',
            icon: 'fa-pencil-ruler'
        },
        {
            title: 'Entretien de Jardins',
            description: 'Pour un espace vert toujours impeccable : tonte de gazon, désherbage manuel, entretien de haie, taille d\'arbuste, taille d\'arbre et taille d\'arbre fruitier. Bénéficiez du savoir-faire d\'un véritable professionnel pour préserver la santé de votre jardin.',
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services02.jpg',
            icon: 'fa-cut'
        },
        {
            title: 'Aménagement paysager',
            description: 'Structuration de vos espaces avec des matériaux durables. Nous réalisons le dallage de jardin, la création de bassin de jardin, la pose de murets, la création de massif et parterre, ainsi que l\'aménagement d\'allées pour valoriser votre extérieur.',
            image: '/amenagement_paysager.png',
            icon: 'fa-tree'
        },
        {
            title: 'Plantations & Élagage',
            description: 'De la plantation à l\'installation de gazon (en rouleau, semi ou synthétique). En tant que jardinier élagueur, nous assurons aussi le dessouchage, l\'élagage d\'arbres, l\'entretien d\'arbre et le traitement des arbres pour une croissance saine.',
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services04.jpg',
            icon: 'fa-seedling'
        },
        {
            title: 'Aménagement sur Plan',
            description: 'Réaménagement complet de votre extérieur sur plan. Nous repensons les volumes pour créer un jardin sur-mesure (zen, méditerranéen, etc.). Chaque projet d\'aménagement bénéficie de l\'expertise technique de notre bureau d\'étude.',
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services-1.jpg',
            icon: 'fa-drafting-compass'
        },
        {
            title: 'Entretien de Copropriétés',
            description: 'Contrats réguliers pour la gestion et l\'entretien soigné des espaces verts de votre copropriété ou résidence. Tonte de gazon, taille et nettoyage complet pour offrir un environnement naturel propre et accueillant.',
            image: 'https://gpjardin.microdidact.com/wp-content/uploads/2025/03/projects-03.jpg',
            icon: 'fa-building'
        },
    ];

    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/nosservice.jpg')" }}>
                <div className="container">
                    <h1 className="page-title">Nos Services & Réalisations</h1>
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
                    
                    <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="section-title-wrapper" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.8rem', color: '#14532d' }}>Travaux de Terrassement & Aménagement</h3>
                            <p style={{ color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto', marginTop: '1rem' }}>
                                Équipés de nos propres engins (mini-pelle, camions), nous réalisons vos travaux de terrassement, d'enrochement et de préparation de terrain avec précision et efficacité.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <video 
                                src="/videos/terrassement1.mp4" 
                                autoPlay loop muted playsInline controls
                                style={{ maxWidth: '400px', width: '100%', height: '580px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                            ></video>
                            <video 
                                src="/videos/terrassement2.mp4" 
                                autoPlay loop muted playsInline controls
                                style={{ maxWidth: '400px', width: '100%', height: '580px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                            ></video>
                        </div>
                    </div>

                    {/* Avant / Après Section */}
                    <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="section-title-wrapper" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.8rem', color: '#14532d' }}>Nos réalisations en images : Avant / Après</h3>
                            <p style={{ color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto', marginTop: '1rem' }}>
                                Découvrez la transformation d'espaces extérieurs grâce à notre savoir-faire en aménagement et entretien.
                            </p>
                        </div>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', width: '100%' }}>
                            {/* Pair 1 */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                    <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', zIndex: 10 }}>AVANT</span>
                                    <img src="/images/avant1.jpeg" alt="Avant aménagement" style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} />
                                </div>
                                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(34,197,94,0.3)', border: '2px solid #bbf7d0' }}>
                                    <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'var(--primary-color)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', zIndex: 10 }}>APRÈS</span>
                                    <img src="/images/apres1.jpeg" alt="Après aménagement" style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} />
                                </div>
                            </div>

                            {/* Pair 2 */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                    <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', zIndex: 10 }}>AVANT</span>
                                    <img src="/images/avant2.jpeg" alt="Avant aménagement" style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} />
                                </div>
                                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(34,197,94,0.3)', border: '2px solid #bbf7d0' }}>
                                    <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'var(--primary-color)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', zIndex: 10 }}>APRÈS</span>
                                    <img src="/images/apres2.jpeg" alt="Après aménagement" style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section from Projects.jsx */}
            <section className="section-padding" style={{ background: 'var(--light-bg)' }}>
                <div className="container">
                    <div className="section-title-wrapper">
                        <span className="section-tag">Portfolio</span>
                        <h2 className="section-title">Inspiration & Savoir-faire</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            Explorez nos derniers chantiers et laissez-vous inspirer pour votre futur projet d'aménagement extérieur.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="filters-container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`filter-btn ${filter === category ? 'active' : ''}`}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    margin: '0 0.5rem 0.5rem 0.5rem',
                                    borderRadius: '50px',
                                    border: filter === category ? '2px solid var(--primary-color)' : '2px solid rgba(0,0,0,0.1)',
                                    background: filter === category ? 'var(--primary-color)' : 'transparent',
                                    color: filter === category ? 'var(--white)' : 'var(--text-light)',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.95rem'
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="projects-grid-modern" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}>
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="project-card-modern" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '350px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />

                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '2rem',
                                    color: 'white',
                                    transition: 'background 0.3s ease'
                                }}>
                                    <div style={{ transform: 'translateY(0)', transition: 'transform 0.3s ease' }}>
                                        <span style={{
                                            color: 'var(--primary-color)',
                                            fontWeight: '700',
                                            fontSize: '0.85rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            {project.category}
                                        </span>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', margin: '0.5rem 0 0.25rem 0', lineHeight: '1.2' }}>{project.title}</h3>
                                        <p style={{ fontSize: '0.9rem', opacity: '0.8', margin: 0 }}><i className="fas fa-map-marker-alt" style={{ marginRight: '5px' }}></i> {project.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Mini Section */}
            <section className="section-padding" style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="about-grid-modern" style={{ alignItems: 'center' }}>
                        <div className="content">
                            <h2 className="section-title">Du rêve à la réalité</h2>
                            <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                Chaque photo ci-dessus raconte l'histoire d'une transformation unique. Derrière chaque projet, il y a une écoute attentive, une conception sur mesure et une réalisation soignée.
                            </p>
                            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'var(--secondary-color)', color: 'var(--secondary-color)' }}>
                                Démarrez votre transformation
                            </Link>
                        </div>
                        <div className="image">
                            <img src="https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services-1.jpg" alt="Transformation jardin" style={{ borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ faqs={combinedFaqs} />

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
