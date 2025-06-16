
import React from 'react';
import { Code, Database, Brain, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "SQL", "C", "C++", "R"]
    },
    {
      icon: Database,
      title: "Data Visualization",
      skills: ["Power BI", "Google Data Studio", "Looker Studio", "Matplotlib", "Seaborn"]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Pandas", "Regression", "Classification", "Predictive Modeling", "Time Series Analysis", "Clustering", "NLP", "GenAI", "LLM", "Ensemble Learning", "Sentiment Analysis", "Attribution Modeling", "MMM"]
    },
    {
      icon: BarChart,
      title: "Product Analytics",
      skills: ["A/B Testing", "Hypothesis Testing", "Experimental Design", "CRO", "Customer Journey Analysis"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-thin text-center mb-16 text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-2xl">
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
