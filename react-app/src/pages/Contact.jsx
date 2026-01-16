import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

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
                                        <a href="mailto:contact@gpjardin.com" style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary-color)' }}>contact@gpjardin.com</a>
                                    </div>
                                </div>

                                {/* Address C.  ard */}
                                <div className="info-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', background: 'var(--white)', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--accent-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.5rem', flexShrink: 0 }}>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Localisation</span>
                                        <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--secondary-color)' }}>Toulouse, France</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="contact-form-wrapper" style={{ background: 'var(--white)', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: 'var(--primary-gradient)' }}></div>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '2rem', color: 'var(--secondary-color)' }}>
                                Envoyez-nous un message
                            </h3>

                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div className="form-group" style={{ marginBottom: 0 }}>
                                        <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0.5rem', display: 'block' }}>Nom complet *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Jean Dupont"
                                            style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                                        />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: 0 }}>
                                        <label htmlFor="phone" style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0.5rem', display: 'block' }}>Téléphone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="06 ..."
                                            style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                                        />
                                    </div>
                                </div>

                                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                    <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0.5rem', display: 'block' }}>Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="jean.dupont@email.com"
                                        style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                                    />
                                </div>

                                <div className="form-group" style={{ marginBottom: '2rem' }}>
                                    <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0.5rem', display: 'block' }}>Comment pouvons-nous vous aider ? *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Décrivez votre projet..."
                                        style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', minHeight: '150px', outline: 'none', resize: 'vertical' }}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}>
                                    Envoyer ma demande <i className="fas fa-paper-plane" style={{ marginLeft: '10px' }}></i>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

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
