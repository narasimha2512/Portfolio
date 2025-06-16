
import React from 'react';
import { ThemeProvider } from 'next-themes';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <ThemeToggle />
        <Hero />
        <About />
        <Skills />
        <Experience />
      </div>
    </ThemeProvider>
  );
};

export default Index;
