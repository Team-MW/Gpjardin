import { Link } from 'react-router-dom';

const Confidentialite = () => {
    return (
        <>
            <section className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/acceuil.jpg")' }}>
                <div className="container">
                    <h1 className="page-title">Politique de Confidentialité</h1>
                    <p className="page-breadcrumb">
                        <Link to="/" style={{ color: 'var(--white)' }}>Accueil</Link> &gt; Confidentialité
                    </p>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="legal-content">
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            La protection de vos données personnelles est une priorité pour <strong>GP JARDIN</strong>. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
                        </p>

                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>1. Collecte des données</h2>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            Nous collectons les informations que vous nous fournissez directement via notre formulaire de contact, notamment :
                        </p>
                        <ul style={{ marginBottom: '2rem', marginLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-light)', listStyleType: 'disc' }}>
                            <li>Nom et Prénom</li>
                            <li>Adresse email</li>
                            <li>Numéro de téléphone</li>
                            <li>Message et détails de votre projet</li>
                        </ul>

                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>2. Utilisation des données</h2>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            Vos données sont utilisées uniquement dans le cadre de vote relation commerciale avec GP JARDIN :
                        </p>
                        <ul style={{ marginBottom: '2rem', marginLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-light)', listStyleType: 'disc' }}>
                            <li>Répondre à vos demandes de devis et d'informations.</li>
                            <li>Planifier des interventions ou des rendez-vous.</li>
                            <li>Vous contacter au sujet de votre projet.</li>
                        </ul>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables à des tiers.
                        </p>

                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>3. Cookies</h2>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            Ce site peut utiliser des cookies pour améliorer votre expérience utilisateur. Les cookies sont de petits fichiers texte stockés sur votre ordinateur. Vous pouvez choisir de désactiver les cookies via les paramètres de votre navigateur, mais cela pourrait limiter certaines fonctionnalités du site.
                        </p>

                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>4. Vos droits (RGPD)</h2>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong>contact@gpjardin.com</strong>.
                        </p>

                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>5. Sécurité</h2>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Confidentialite;
