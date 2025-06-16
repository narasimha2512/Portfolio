
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-thin text-center mb-16 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-medium mb-6 text-gray-900 dark:text-white">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Master of Science - Data Science</h4>
                <p className="text-gray-600 dark:text-gray-400">University of Arizona, USA</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">May 2025</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Bachelor of Technology</h4>
                <p className="text-gray-600 dark:text-gray-400">Computer Science with Big Data Analytics</p>
                <p className="text-gray-600 dark:text-gray-400">SRM University, India</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">May 2022</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-medium mb-6 text-gray-900 dark:text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:nvrachaputi@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                  nvrachaputi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-400">+1 214 436 1337</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-400">Tucson, AZ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
