
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-thin text-center mb-16 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col items-center mb-8">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-2xl">
                <img 
                  src="/lovable-uploads/15094e40-e82a-4ed0-baa2-1cd97cb3683f.png" 
                  alt="Narasimha Vardhan Rachaputi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Hi! I'm Narasimha Vardhan, a data science graduate student with a curious mind, a love for clean code, and an eye for real-world impact. I specialize in combining AI, machine learning, and business strategy to build smart, scalable solutions, whether it's predicting mental health trends, detecting anomalies in port operations, or streamlining e-commerce logistics.
              </p>
              <p>
                My journey spans cloud engineering, data analytics, and AI/ML research, with hands-on experience in both academic and industry settings. I'm particularly driven by how technology can empower better decisions, enhance user experiences, and create value for both organizations and society.
              </p>
              <p>
                When I'm not deep in code or fine-tuning models, you'll find me on a badminton court, playing table tennis, or planning my next travel escape (bonus points if it includes good food and live music!). I believe that exploring new places and unwinding with good music fuels creativity, and sometimes, your best ideas come when you're not staring at a screen.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-medium mb-6 text-gray-900 dark:text-white">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Master of Science - Data Science</h4>
                  <p className="text-blue-600 dark:text-blue-400">University of Arizona, USA</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">May 2025</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Bachelor of Technology</h4>
                  <p className="text-purple-600 dark:text-purple-400">Computer Science with Big Data Analytics</p>
                  <p className="text-gray-600 dark:text-gray-400">SRM University, India</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">May 2022</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-medium mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a href="mailto:nvrachaputi@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                    nvrachaputi@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Tucson, AZ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
