import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/SocialActivities.css';
import community from '../Images/community.jfif';
import education from '../Images/Educational Support Program.jfif';
import publicspeaking from '../Images/publicspeaking.jpg';

const SocialActivities = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const activities = [
    {
      title: 'Community Outreach',
      description: 'Engaging with local communities to provide essential resources and support.',
      image: community,
      path: '/community', // Define the path to navigate to
    },
    {
      title: 'Educational Programs',
      description: 'Offering educational workshops to enhance skills and knowledge.',
      image: education,
      path: '/education', // Define the path to navigate to
    },
    {
      title: 'Awareness Programs',
      description: 'Raising awareness on important social issues such as health, education, and the environment.',
      image: publicspeaking,
      path: '/awareness', // Define the path to navigate to
    },
  ];

  // Function to handle click event
  const handleCardClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <section className="social-activities">
      <h2>
        Social <span>Activities</span>
      </h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div
            className="activity-card"
            key={index}
            onClick={() => handleCardClick(activity.path)} // Attach click handler to each card
            style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
          >
            <img src={activity.image} alt={activity.title} />
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialActivities;
