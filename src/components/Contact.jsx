import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="section-padding contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                    <p className="section-subtitle">Let's build something amazing together</p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="contact-info glass-card"
                    >
                        <div className="info-item">
                            <div className="info-icon"><FaEnvelope /></div>
                            <div>
                                <h4>Email</h4>
                                <p>skyspearsolutions@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FaPhone /></div>
                            <div>
                                <h4>Phone</h4>
                                <p>9600510846</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FaMapMarkerAlt /></div>
                            <div>
                                <h4>Location</h4>
                                <p>Coimbatore, TamilNadu, India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="contact-form glass-card"
                    >
                        <div className="form-group">
                            <input type="text" name="user_name" placeholder="Your Name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="user_email" placeholder="Your Email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Your Message" rows="5" className="form-input" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
                        {status === 'error' && <p className="error-msg">Failed to send. Please try again.</p>}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
