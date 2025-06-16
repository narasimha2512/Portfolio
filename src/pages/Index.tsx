
import React from 'react';
import { ThemeProvider } from 'next-themes';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Publications from '../components/Publications';
import Contact from '../components/Contact';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <Navigation />
        <ThemeToggle />
        <div className="pt-16"> {/* Add padding to account for fixed navigation */}
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Publications />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
