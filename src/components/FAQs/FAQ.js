import React, { useState } from 'react';

import Navbar from '../Dashboard/Navbar/Navbar';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

import './FAQ.css';

const FAQ = () => {
    const pageTitle = 'Frequently Asked Question';
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const faqs = [
        { question: 'Access to Exclusive Technology', answer: 'Details about exclusive technology.' },
        { question: 'Competitive Advantage', answer: 'Details about competitive advantage.' },
        { question: 'Community-Centric Solutions', answer: 'Details about community-centric solutions.' },
        { question: 'Streamlined Marketing Support', answer: 'Details about streamlined marketing support.' },
        { question: 'Continuous Innovation', answer: 'Details about continuous innovation.' }
    ];

    return (
        <div className="outer-container">
            <Navbar title={pageTitle} />
            <div className="body-content">
                <Sidebar />
                <div className="faq-content">
                    <h1>Frequently Asked Question</h1>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div className="faq-question" onClick={() => toggleExpand(index)}>
                                    <span>{faq.question}</span>
                                    <span className="faq-icon">{expanded === index ? '-' : '+'}</span>
                                </div>
                                {expanded === index && <div className="faq-answer">{faq.answer}</div>}
                            </div>
                        ))}
                    </div>
                    <div className="help-section">
                        <h2>Still Need Help?</h2>
                        <p>Contact <a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
