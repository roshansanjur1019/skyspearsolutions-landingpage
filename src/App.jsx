import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Showcase Pages
import CloudSentinel from './pages/CloudSentinel';
import NexusAgency from './pages/NexusAgency';
import AutoSec from './pages/AutoSec';
import FinTrack from './pages/FinTrack';
import HealthSync from './pages/HealthSync';
import TaskFlow from './pages/TaskFlow';

// Home Page Component
const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cloud-sentinel" element={<CloudSentinel />} />
        <Route path="/nexus-agency" element={<NexusAgency />} />
        <Route path="/autosec" element={<AutoSec />} />
        <Route path="/fintrack" element={<FinTrack />} />
        <Route path="/healthsync" element={<HealthSync />} />
        <Route path="/taskflow" element={<TaskFlow />} />
      </Routes>
    </div>
  );
}

export default App;
