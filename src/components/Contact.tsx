
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { BookOpen } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-thin mb-16 text-gray-900 dark:text-white">
          Let's Connect
        </h2>
        
        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href="mailto:nvrachaputi@gmail.com"
            className="flex items-center gap-3 bg-white dark:bg-gray-900 px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
              <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-gray-900 dark:text-white font-medium">nvrachaputi@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/narasimha-vardhan-rachaputi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white dark:bg-gray-900 px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
              <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
              <p className="text-gray-900 dark:text-white font-medium">Connect with me</p>
            </div>
          </a>

          <a
            href="https://medium.com/@vardhan-narasimha-2000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white dark:bg-gray-900 px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
              <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">Medium</p>
              <p className="text-gray-900 dark:text-white font-medium">Read my articles</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
