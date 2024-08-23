import React from 'react';
import '../Styles/SocialActivities.css';
import community from '../Images/community.jfif'
import Education from '../Images/Educational Support Program.jfif'
import publicspeaking from '../Images/publicspeaking.jpg'

const SocialActivities = () => {
    const activities = [
        {
            title: "Community Outreach",
            description: "Engaging with local communities to provide essential resources and support.",
            image: community
        },
        {
            title: "Educational Programs",
            description: "Offering educational workshops to enhance skills and knowledge.",
            image: Education
        },
        {
            title: "Awareness Programs",
            description: "Raising awareness on important social issues such as health, education, and the environment.",
            image: publicspeaking
        },
    ];

    return (
        <section className="social-activities">
            <h2>Social <span>Activities</span></h2>
            <div className="activities-grid">
                {activities.map((activity, index) => (
                    <div className="activity-card" key={index}>
                        <img src={activity.image} alt={activity.title} />
                        <h3>{activity.title}</h3>
                        <p>{activity.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SocialActivities;
 