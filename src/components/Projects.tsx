
import React from 'react';
import { Brain, Shield, TrendingUp, Calendar, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Mental Health Prediction",
      subtitle: "Random Forest & Association Rule Mining",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600 dark:text-purple-400",
      achievements: [
        "Addressed global mental health issues through a data-driven approach",
        "Developed and implemented a model using Random Forest classification to assess an individual's mental state, enhancing accuracy through label encoding and data analysis",
        "Suggested integrating ARM for enhanced mental health prediction and user-driven assessments"
      ]
    },
    {
      title: "Fake User Profile Detection",
      subtitle: "SVM and Random Forest",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400",
      achievements: [
        "Designed an automated framework to identify fake profiles on social networks",
        "Streamlined the profile verification process, improving the overall social networking experience",
        "Proposed an efficient solution for handling the growing issue of fake profiles in a scalable manner"
      ]
    },
    {
      title: "Sports Analytics Agent System",
      subtitle: "Random Forest & API Orchestration",
      period: "Feb 2024 - May 2024",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-100 dark:bg-emerald-900",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      achievements: [
        "Implemented a multi-agent system using weather forecasts, athlete readiness, and facility availability, simulating 5-day decisions across 3 training venues",
        "Engineered a modular prediction pipeline combining real-time weather APIs with a Random Forest model with 88% accuracy to drive context-aware training decisions",
        "Reduced false-positive training triggers by 30% and increased cross-agent decision consistency by 40% through coordinated rule-based orchestration and adaptive input handling"
      ]
    },
    {
      title: "Automated Demand Forecasting",
      subtitle: "LSTM, ARIMA and LightGBM",
      period: "Jul 2020 - Nov 2020",
      icon: Calendar,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-100 dark:bg-orange-900",
      iconColor: "text-orange-600 dark:text-orange-400",
      achievements: [
        "Trained ML models for financial forecasting and inventory optimization, improving accuracy by 3%",
        "Enhanced inventory management by creating a real-time dashboard visualizing KPIs such as inventory turnover rate and order fulfillment time, leading to a 10% improvement",
        "Improved model performance through feature engineering, hyperparameter tuning and data processing",
        "Linked LightGBM with real-time dashboards to help supply chain managers optimize inventory and spot delays first"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-thin text-center mb-16 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`${project.bgColor} p-4 rounded-2xl`}>
                    <project.icon className={`w-12 h-12 ${project.iconColor}`} />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-30 transition-all cursor-pointer">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">{project.subtitle}</p>
                {project.period && (
                  <p className="text-xs text-blue-600 dark:text-blue-400 mb-4">{project.period}</p>
                )}
                
                <ul className="space-y-3">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${project.color}`}></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
