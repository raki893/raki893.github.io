import React from 'react';
import '../src/scss/main.scss';
import Header from './components/Header';
import CVResumeSection from './components/CVResumeSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Experience from './components/experience';
import Wave from './assets/Wave';

function App() {
  return (
    <div className="App">
      <Header />
      <SkillsSection />
      <Experience />
      <ProjectsSection />
      <CVResumeSection />
      <ContactSection />
      <Wave />
      <Footer />
    </div>
  );
}

export default App;
