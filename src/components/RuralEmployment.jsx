import React from 'react';
import '../Styles/RuralEmployment.css';

const RuralEmployment = () => {
  return (
    <section className="rural-employment">
      <div className="content-container">
        <h2>Rural <span>Employment</span></h2>
        <p>
          Bagili's Foundation is committed to improving the lives of rural communities by providing sustainable employment opportunities. We believe in empowering individuals through skill development, training, and access to resources, enabling them to create a better future for themselves and their families.
        </p>
        <div className="cards">
          <div className="card">
            <h3>Skill Development</h3>
            <p>
              We offer training programs that equip individuals with the necessary skills to thrive in various industries, ensuring long-term employability.
            </p>
          </div>
          <div className="card">
            <h3>Job Placement</h3>
            <p>
              Our foundation partners with local businesses to create job opportunities tailored to the needs of rural communities, fostering economic growth.
            </p>
          </div>
          <div className="card">
            <h3>Success Stories</h3>
            <p>
              Hear from those who have benefited from our programs. Their stories are a testament to the impact of rural employment initiatives.
            </p>
          </div>
        </div>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
};

export default RuralEmployment;
