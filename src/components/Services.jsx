import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaShieldAlt, FaCode, FaServer, FaRobot, FaChartLine } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <FaShieldAlt />,
            title: "Cloud Security",
            desc: "Implementing robust security frameworks and compliance standards for cloud infrastructure."
        },
        {
            icon: <FaChartLine />,
            title: "Cost Optimization",
            desc: "Analyzing and optimizing cloud spend to ensure maximum ROI and efficiency."
        },
        {
            icon: <FaRobot />,
            title: "Automation",
            desc: "Streamlining operations with IaC (Terraform) and CI/CD pipelines."
        },
        {
            icon: <FaServer />,
            title: "Account Management",
            desc: "Expert management of AWS/Azure accounts, IAM, and resource allocation."
        },
        {
            icon: <FaCode />,
            title: "Web Applications",
            desc: "Building scalable, high-performance web apps using React, Node.js, and modern frameworks."
        },
        {
            icon: <FaCloud />,
            title: "Landing Pages",
            desc: "Designing high-converting, visually stunning landing pages for products and services."
        }
    ];

    return (
        <section id="services" className="section-padding services">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
                    <p className="section-subtitle">Comprehensive solutions for Cloud and Web</p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="service-card glass-card"
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
