import { useState } from 'react';

const FAQ = ({ faqs, title = "Questions Fréquentes" }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section-padding reveal" style={{ background: '#f8fafc', padding: '5rem 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span className="section-tag">FAQ</span>
                    <h2 className="section-title">{title}</h2>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div 
                                key={index} 
                                style={{ 
                                    background: 'white', 
                                    borderRadius: '12px', 
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    overflow: 'hidden',
                                    border: '1px solid #e2e8f0',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <button 
                                    onClick={() => toggleFaq(index)}
                                    style={{ 
                                        width: '100%', 
                                        padding: '1.5rem', 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center', 
                                        background: 'none', 
                                        border: 'none', 
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: isOpen ? 'var(--primary-color)' : 'var(--text-dark)'
                                    }}
                                >
                                    <span>{faq.question}</span>
                                    <span style={{ 
                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
                                        transition: 'transform 0.3s ease',
                                        color: isOpen ? 'var(--primary-color)' : '#94a3b8',
                                        marginLeft: '1rem'
                                    }}>
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </button>
                                
                                <div style={{ 
                                    maxHeight: isOpen ? '500px' : '0', 
                                    overflow: 'hidden', 
                                    transition: 'max-height 0.3s ease-in-out' 
                                }}>
                                    <div style={{ 
                                        padding: '0 1.5rem 1.5rem 1.5rem', 
                                        color: 'var(--text-light)', 
                                        lineHeight: '1.7',
                                        fontSize: '1rem'
                                    }}>
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
