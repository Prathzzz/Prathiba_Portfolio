import React from 'react';
import './Experience.scss';

const Experience = () => {
  const experiences = [
    {
      img:"https://cdn.shopaccino.com/igmguru/articles/deep-learning-900x506.jpg",
      title: 'Deep Learning Intern',
      company: 'Geosensing and Imaging Consultancy',
      duration: '05/2024 - 08/2024',
      description: 'Developed an object detection system. Enhanced the accuracy of object detection in images by 20%. Utilized advanced image segmentation techniques to improve the precision of detected objects.'
    },
    {
        img:"https://miro.medium.com/v2/resize:fit:1400/1*k2tGJGQqquX_bA4UqUSdkg.jpeg",
      title: 'AIML Intern',
      company: 'Altruisty',
      duration: '08/2024 - Present',
      description: 'Engineered a GTM Strategy chatbot with a roadmap. Using Dialogflow for the chatbot, enhancing interaction efficiency by 25% and improving the accuracy of GTM recommendations by 20%.'
    },
    {
      img:"https://www.nextlevelanimation.com/wp-content/uploads/2014/04/FreeLancer-Nextlevelanimation-1300x732.jpg",
      title: 'Freelance Developer',
      company: 'Self-Employed',
      duration: 'Ongoing',
      description: 'Creative freelancer skilled in machine learning, web development, mobile development and deep learning, delivering innovative, data-driven solutions to enhance user experience and business performance.'
    },
    // Add more experience items as needed
  ];

  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="cards">
      {experiences.map((exp, index) => (
        <div key={index} className={`card ${exp.color}`}>
          
          <img src={exp.img} alt="" />
          <p className="heading">{exp.title}</p>
          <p>{exp.company}</p>
          <p>{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Experience;
