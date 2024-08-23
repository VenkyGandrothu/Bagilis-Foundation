import React from 'react';
import '../Styles/Index.css';
import { ReactTyped } from 'react-typed'; // Ensure this is correctly imported

function Index() {
  return (
    <div className="index-container">
      <div className="indexecontent">
        <h1>
          Welcome To
          <br />
          <ReactTyped
            strings={["Bagili's Foundation"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </h1>
      </div>
    </div>
  );
}

export default Index;
