
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Teaching Assistant",
      company: "University of Arizona",
      type: "Part-time",
      period: "Aug 2024 - Dec 2024",
      location: "Tucson, Arizona, United States",
      color: "border-blue-500",
      achievements: [
        "Collaborated with the professor to design the syllabus and prepare comprehensive lecture notes for the graduate course Special Topics in AI and Digital Media, attended by 25 students.",
        "Developed, administered, and graded exams and assignments to evaluate student performance.",
        "Implemented personalized academic support to students and coordinated with the professor with research projects.",
        "Led classroom instruction, guided discussions, and facilitated student learning on key course topics."
      ]
    },
    {
      title: "AI/ML Intern",
      company: "Immersion Labs",
      period: "May 2024 – Aug 2024",
      location: "Tucson, Arizona, United States",
      color: "border-purple-500",
      achievements: [
        "Deployed a predictive maintenance model with a team of four engineers, using LSTMs and XGBoost, analyzing 19,536 sensor logs stored using real and simulated Google Cloud Platform, to reduce false alarm failure predictions and enhance reliability",
        "Engineered data preprocessing with outlier removal and normalization on sensor logs and decreased false positive failure predictions and enhanced the model accuracy.",
        "Built anomaly detection systems, triggering severity-based alerts from vehicle sensor logs to prioritize maintenance tasks and reduce critical failures by 50 instances per month."
      ]
    },
    {
      title: "Cloud Data Engineer",
      company: "Hewlett Packard Enterprise",
      period: "Aug 2022 – Apr 2023",
      location: "Pune, Maharashtra, India",
      color: "border-emerald-500",
      achievements: [
        "Led cloud migrations from VMware and on-prem to AWS for Merck Pharmaceuticals using MGN, EC2, and AWS Migration Hub, reducing operational overhead by 40%.",
        "Delivered an interactive AWS live dashboard displaying metrics from CloudWatch and cost explorer and enabled stakeholders to make well-informed scaling decisions, and reduced cloud operational costs by 25%.",
        "Created ML-powered monitoring and alerting model for in AWS services to predict data anomalies, leveraging customer use patterns, support interaction data, and service engagement metrics to promptly identify at-risk SaaS clients and reduce churn."
      ]
    },
    {
      title: "Data Engineer Intern",
      company: "Hewlett Packard Enterprise",
      period: "Jan 2022 – Jul 2022",
      location: "Bengaluru, Karnataka, India",
      color: "border-cyan-500",
      achievements: [
        "Gained hands-on knowledge of HPE GreenLake Management Services, VMware virtualization, and vSphere server storage architecture, enhancing skills in cloud infrastructure and enterprise product management.",
        "Developed skills in ETL pipelines, data engineering and data preprocessing techniques including data preprocessing, statistical analysis, and visualization through cross-functional collaboration."
      ]
    },
    {
      title: "Business Analyst",
      company: "CrossCreek",
      period: "Oct 2020 – Dec 2021",
      location: "Chennai, Tamil Nadu, India",
      color: "border-orange-500",
      achievements: [
        "Built time series ML models to forecast sales, reduce stockouts and excess inventory as part of business planning initiative. Optimized lead times for SKU using machine learning dashboards and to track marketing KPIs, leading to increase in 50% sales.",
        "Led A/B testing using multi-armed bandit algorithms on landing pages, email campaigns, and marketing creative campaigns, increasing conversion rates by 12% and improving ROI through effective business intelligence insights.",
        "Extracted insights with advanced statistical tools, inventory tracking for omnichannel model using SQL, Excel pivot tables, Looker studio dashboards, and Google Analytics, directly boosting inventory turnover by 15%.",
        "Leveraged market research and customer segmentation insights with Power BI for B2B sales, driving an 8% sales increase while improving CTR by 5% and reducing bounce rate by 3% and presenting insights clearly to cross-functional teams."
      ]
    },
    {
      title: "HR Intern",
      company: "Aasman Foundation",
      type: "Internship",
      period: "May 2021 - Sep 2021",
      location: "Chennai, Tamil Nadu, India",
      color: "border-pink-500",
      achievements: [
        "Led onboarding for new staff and volunteers, ensuring smooth transitions and alignment with organizational values.",
        "Assisted in recruitment by screening resumes, conducting interviews, and matching candidates to roles.",
        "Supported employee relations by addressing concerns and fostering a positive work environment.",
        "Managed HR administration tasks including record-keeping, performance appraisals, and training coordination."
      ]
    },
    {
      title: "Sponsorship Executive",
      company: "SRM IST Chennai",
      type: "Seasonal",
      period: "Jan 2020 - Mar 2020",
      location: "Chennai, Tamil Nadu, India",
      color: "border-indigo-500",
      achievements: [
        "Developed and managed the event budget, ensuring efficient allocation of resources across various event functions.",
        "Identified, secured, and negotiated 40+ sponsorship deals, establishing strong corporate partnerships to maximize funding and event success.",
        "Oversaw financial tracking, ensuring the event stayed within budget and all sponsor deliverables were met, enhancing the overall stakeholder relationship.",
        "Coordinated logistical resources and managed operational planning for the symposium, which attracted over 23,000 students, ensuring smooth event execution."
      ]
    },
    {
      title: "Marketing and Finance Intern",
      company: "The Climber",
      type: "Internship",
      period: "Feb 2019 - May 2019",
      location: "Chennai, Tamil Nadu, India",
      color: "border-teal-500",
      achievements: [
        "Led a large-scale promotional campaign, partnering with 10+ universities to attract over 1,000 students to the event and executing social media marketing strategies that increased engagement by 40%.",
        "Managed influencer partnerships and email marketing campaigns, resulting in a 30% increase in event registrations and a 25% boost in RSVP rates.",
        "Assisted in preparing and managing the event budget of over Rs.5,00,000, ensuring efficient allocation and tracking expenses to achieve a 10% cost reduction.",
        "Supported revenue forecasting and financial reporting, helping exceed financial goals by 15%, while ensuring timely vendor payments and accurate transaction processing."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-thin text-center mb-16 text-gray-900 dark:text-white">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 ${exp.color}`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                  {exp.company && (
                    <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">{exp.company} {exp.type && `· ${exp.type}`}</p>
                  )}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
