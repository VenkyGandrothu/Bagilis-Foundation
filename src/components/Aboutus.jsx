import React from 'react';
import '../Styles/Aboutus.css';
import banner from '../Images/banner.jpg'

function Aboutus() {
    return (
        <div className="about-us-container">
            <h2>About <span>Bagili's</span></h2>
            <div className="about-us-image">
                <img src={banner} alt="About Us" />
            </div>
            <p>
                We are Bagili's Foundation, dedicated to promoting social welfare and rural development. 
                Our mission is to empower communities by providing education, healthcare, and employment opportunities.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci necessitatibus distinctio delectus consequatur, voluptatum officia sequi ut blanditiis quisquam dolor architecto tenetur voluptates quaerat est repellat atque consectetur tempore expedita.lorem
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus temporibus unde vitae officia. Sequi qui ipsa ullam aperiam mollitia reprehenderit atque, numquam ratione quae magnam consectetur dolore veniam! Dicta, omnis?

            </p>
        </div>
    );
}

export default Aboutus;
