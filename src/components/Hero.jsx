import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-bg">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <span className="hero-subtitle">Innovating the Cloud Era</span>
                    <h1 className="hero-title">
                        <span className="gradient-text">Skyspear Solutions</span>
                    </h1>
                    <h2 className="hero-role">
                        Cloud Computing & <br /> Software Development
                    </h2>
                    <p className="hero-desc">
                        Providing cutting-edge Cloud Security, Cost Optimization,
                        Automation, and High-Performance Software Solutions.
                    </p>

                    <div className="hero-btns">
                        <a href="#portfolio" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>

                    <div className="social-links">
                        <a href="#" className="social-icon"><FaGithub /></a>
                        <a href="#" className="social-icon"><FaLinkedin /></a>
                        <a href="#" className="social-icon"><FaTwitter /></a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-visual"
                >
                    <div className="visual-card glass-card">
                        <div className="code-block">
                            <div className="code-line"><span className="c-pink">const</span> <span className="c-blue">future</span> = <span className="c-yellow">await</span> <span className="c-green">buildAwesome()</span>;</div>
                            <div className="code-line"><span className="c-pink">if</span> (success) <span className="c-purple">deploy(cloud)</span>;</div>
                            <div className="code-line"><span className="c-comment">// Optimizing costs...</span></div>
                            <div className="code-line"><span className="c-comment">// Securing assets...</span></div>
                            <div className="code-line"><span className="c-blue">return</span> <span className="c-orange">"Excellence"</span>;</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
