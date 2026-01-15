import { Link } from 'react-router-dom';

const MentionsLegales = () => {
    return (
        <>
            <section className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/acceuil.jpg")' }}>
                <div className="container">
                    <h1 className="page-title">Mentions Légales</h1>
                    <p className="page-breadcrumb">
                        <Link to="/" style={{ color: 'var(--white)' }}>Accueil</Link> &gt; Mentions Légales
                    </p>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="legal-content">
                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>1. Éditeur du site</h2>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            Le site internet <strong>gpjardin.com</strong> est édité par l'entreprise <strong>GP JARDIN</strong>.<br />
                            <strong>Siège social :</strong> Toulouse, France<br />
                            <strong>Téléphone :</strong> 06 66 70 30 45<br />
                            <strong>Email :</strong> contact@gpjardin.com<br />
                            <strong>Responsable de la publication :</strong> GP JARDIN
                        </p>

                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>2. Hébergement</h2>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            Le site est hébergé par <strong>Vercel Inc.</strong><br />
                            340 S Lemon Ave #4133<br />
                            Walnut, CA 91789<br />
                            États-Unis
                        </p>

                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>3. Propriété intellectuelle</h2>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>

                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>4. Limitation de responsabilité</h2>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible.
                        </p>

                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>5. Crédits</h2>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                            <strong>Conception et réalisation :</strong> MWCREA<br />
                            <strong>Crédits photos :</strong> GP JARDIN, Adobe Stock, Unsplash.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MentionsLegales;
