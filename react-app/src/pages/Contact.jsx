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
            <section className="page-header" style={{ backgroundImage: "url('https://gpjardin.microdidact.com/wp-content/uploads/2025/03/services-header.jpg')" }}>
                <div className="container">
                    <h1 className="page-title">Contactez-nous</h1>
                    <p className="page-breadcrumb">
                        <Link to="/" style={{ color: 'var(--white)' }}>Accueil</Link> &gt; Contact
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="about-grid-modern" style={{ alignItems: 'start' }}>

                        {/* Contact Info */}
                        <div>
                            <span className="section-tag">Parlons de votre projet</span>
                            <h2 className="section-title">Nous sommes à votre écoute</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
                                Vous avez une question ou un projet en tête ? Remplissez le formulaire ou contactez-nous directement via les coordonnées ci-dessous.
                            </p>

                            <div className="contact-cards" style={{ display: 'grid', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem', background: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--accent-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, color: 'var(--secondary-color)', marginBottom: '0.25rem' }}>Téléphone</h4>
                                        <a href="tel:+33666703045" style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>06 66 70 30 45</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem', background: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--accent-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, color: 'var(--secondary-color)', marginBottom: '0.25rem' }}>Email</h4>
                                        <a href="mailto:contact@gpjardin.com" style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>contact@gpjardin.com</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem', background: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--accent-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, color: 'var(--secondary-color)', marginBottom: '0.25rem' }}>Localisation</h4>
                                        <span style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>Toulouse et environs</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form" style={{ padding: '3rem', background: 'var(--white)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '2rem', color: 'var(--secondary-color)' }}>Envoyez-nous un message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nom complet</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Votre nom"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Téléphone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="06 00 00 00 00"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Parlez-nous de votre projet..."
                                        style={{ minHeight: '150px' }}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    Envoyer ma demande
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder Image for now) */}
            <section style={{ height: '400px', width: '100%', background: '#eee' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92416.34216894086!2d1.3628006394593414!3d43.60067644265431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sfr!2sfr!4v1705600000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </>
    );
};

export default Contact;
