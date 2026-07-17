import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FAQ from '../components/FAQ';

const contactFaqs = [
    { question: "Le devis est-il gratuit ?", answer: "Oui, notre première visite d'évaluation sur place et le devis qui en découle sont entièrement gratuits et sans engagement." },
    { question: "Quels sont vos délais d'intervention ?", answer: "Nos délais varient selon la saison et la nature du projet. Généralement, pour un entretien, nous intervenons sous quelques jours. Pour une création complète, cela dépend de notre planning, que nous vous communiquons dès le devis." },
    { question: "Comment se déroule la première visite ?", answer: "Nous nous déplaçons chez vous pour prendre les mesures, écouter vos envies, évaluer la faisabilité technique, et vous conseiller sur les meilleures options esthétiques et budgétaires." },
    { question: "Puis-je vous envoyer des photos de mon jardin avant la visite ?", answer: "C'est une excellente idée ! Vous pouvez nous envoyer des photos de l'état actuel ou des inspirations par email pour nous aider à préparer notre rendez-vous." }
];

const Contact = () => {
    const formRef = useRef(null);
    const location = useLocation();
    const [isFormLoading, setIsFormLoading] = useState(true);

    useEffect(() => {
        const handleMessage = (e) => {
            if (e.origin && e.origin.includes('jotform')) {
                setIsFormLoading(false);
            }
        };
        window.addEventListener('message', handleMessage);
        const timer = setTimeout(() => setIsFormLoading(false), 5000); // fallback

        return () => {
            window.removeEventListener('message', handleMessage);
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        if (formRef.current && formRef.current.children.length === 0) {
            const script = document.createElement('script');
            script.src = 'https://form.jotform.com/jsform/261845357668371';
            script.type = 'text/javascript';
            script.async = true;
            formRef.current.appendChild(script);
        }
    }, []);

    useEffect(() => {
        if (location.hash === '#devis') {
            const element = document.getElementById('devis');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 500);
            }
        }
    }, [location]);

    return (
        <>
            <section className="page-header" style={{ backgroundImage: "url('/nous-contacter.jpg')" }}>
                <div className="container">
                    <h1 className="page-title">Contactez-nous</h1>
                    <p className="page-breadcrumb">
                        <Link to="/" style={{ color: 'var(--white)' }}>Accueil</Link> &gt; Contact
                    </p>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--light-bg)' }}>
                <div className="container">
                    <div className="section-title-wrapper">
                        <span className="section-tag">Restons en contact</span>
                        <h2 className="section-title">Parlons de votre futur jardin</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            Une question, un devis, ou simplement envie d'échanger sur votre projet ? Notre équipe est là pour vous répondre.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                        {/* Contact Information Column */}
                        <div className="contact-info-wrapper">
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>
                                Nos coordonnées
                            </h3>
                            <p style={{ marginBottom: '2.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                                Nous intervenons principalement sur Toulouse et sa grande couronne. N'hésitez pas à nous appeler pour vérifier si votre zone est couverte.
                            </p>

                            <div className="info-cards" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                                {/* Phone Card */}
                                <div className="info-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', background: 'var(--white)', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--accent-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.5rem', flexShrink: 0 }}>
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Téléphone</span>
                                        <a href="tel:+33666703045" style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary-color)' }}>06 66 70 30 45</a>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="info-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', background: 'var(--white)', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--accent-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.5rem', flexShrink: 0 }}>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Email</span>
                                        <a href="mailto:gp.jardin31@gmail.com" style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--secondary-color)' }}>gp.jardin31@gmail.com</a>
                                    </div>
                                </div>

                                {/* Address Card */}
                                <div className="info-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', background: 'var(--white)', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--accent-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.5rem', flexShrink: 0 }}>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Localisation</span>
                                        <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary-color)' }}>Colomiers</span>
                                    </div>
                                </div>

                                {/* Horaires Card */}
                                <div className="info-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', background: 'var(--white)', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--accent-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.5rem', flexShrink: 0 }}>
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Horaires</span>
                                        <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary-color)' }}>Lundi - Vendredi</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Form Column */}
                        <div id="devis" className="contact-form-wrapper" style={{ position: 'relative', overflow: 'hidden', minHeight: '600px' }}>
                            {isFormLoading && (
                                <div style={{ position: 'absolute', top: '100px', left: '0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', zIndex: 0 }}>
                                    <style>
                                        {`
                                            @keyframes spin {
                                                0% { transform: rotate(0deg); }
                                                100% { transform: rotate(360deg); }
                                            }
                                        `}
                                    </style>
                                    <div style={{ width: '50px', height: '50px', border: '5px solid #e2e8f0', borderTop: '5px solid var(--primary-color)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                                    <span style={{ color: 'var(--text-light)', fontWeight: '600' }}>Chargement du formulaire...</span>
                                </div>
                            )}
                            <div ref={formRef} style={{ width: '100%', position: 'relative', zIndex: 1, opacity: isFormLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ faqs={contactFaqs} />

            {/* Map Section */}
            <section style={{ height: '450px', width: '100%', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50px', background: 'linear-gradient(to bottom, var(--light-bg), transparent)', zIndex: 10, pointerEvents: 'none' }}></div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92416.34216894086!2d1.3628006394593414!3d43.60067644265431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sfr!2sfr!4v1705600000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.3)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte GP Jardin"
                ></iframe>
            </section>
        </>
    );
};

export default Contact;
