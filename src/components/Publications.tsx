
import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "The Synergy of Data, AI, and Business: A Graduate Student's Perspective on Innovation in 2024",
      date: "October 2024",
      description: "This article explores the intersection of data, AI, and business innovation from a graduate student's perspective. It discusses how emerging technologies like AI and advanced data analytics are transforming business strategies, driving efficiency, and enabling new opportunities. The article highlights the importance of integrating these technologies for businesses to stay competitive in the evolving digital landscape of 2024.",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Misinformation and Missiles: Social Media's Impact on Global Conflicts",
      date: "October 2024",
      description: "This article examines the impact of social media on global conflicts, focusing on the spread of misinformation. It highlights how false information exacerbates tensions and influences public perception, policy, and military actions, posing challenges to global security and modern warfare.",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Machine Learning Aided Anomaly Detection in Maritime Vessel/Ship Navigation using AIS Data",
      date: "November 2021",
      description: "This paper presents a machine learning approach to detect anomalies in maritime vessel navigation using AIS data. By analyzing vessel behavior at macro and micro levels, we identify anomalies like equipment failures or deviations in metrics such as Speed Over Ground (SOG) and Course Over Ground (COG). Using Support Vector Regression (SVR), we model vessel trajectories and flag deviations, enhancing situational awareness and maritime safety.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Introduction to Sentimental Analysis",
      date: "April 2021",
      description: "Sentimental Analysis is all about discovering people opinion, emotion and feelings about a product or a service. It is a data science technique that centers around building system that can identify and extract opinions within the text.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="publications" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-thin text-center mb-16 text-gray-900 dark:text-white">
          Publications
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {publications.map((publication, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className={`h-32 bg-gradient-to-br ${publication.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-2xl">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-30 transition-all cursor-pointer">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{publication.title}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{publication.date}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{publication.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
