import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Cloud Sentinel Dashboard",
            category: "Cloud Security & Monitoring",
            image: "/assets/cloud-dashboard.png",
            desc: "A comprehensive dashboard for real-time cloud infrastructure monitoring, security alerts, and cost analysis."
        },
        {
            title: "Nexus Creative Agency",
            category: "Web Development",
            image: "/assets/landing-page.png",
            desc: "High-performance landing page with 3D elements and smooth scroll animations for a digital agency."
        },
        {
            title: "AutoSec Interface",
            category: "Automation Tool",
            image: "/assets/security-ui.png",
            desc: "Interface for an automated security compliance tool that scans and remediates cloud vulnerabilities."
        }
    ];

    return (
        <section id="portfolio" className="section-padding portfolio">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">Showcasing innovation in Cloud and Web</p>
                </motion.div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="project-card glass-card"
                        >
                            <div className="project-img-wrapper">
                                <img src={project.image} alt={project.title} className="project-img" />
                                <div className="project-overlay">
                                    <button className="btn btn-primary">View Project</button>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
