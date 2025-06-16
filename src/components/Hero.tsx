
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-thin text-gray-900 dark:text-white mb-6 tracking-tight">
            Narasimha Vardhan
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 mb-8 tracking-wide">
            Rachaputi
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 mb-12 font-light">
            Data Scientist | Data Analyst | Software Engineer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:nvrachaputi@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="https://www.linkedin.com/in/narasimharachaputi/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
