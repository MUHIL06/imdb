import React from 'react';
import '../pages/About.css';
import Navbar from '../component/Navbar';

const About = () => {
  return (
    <div className="about-page">
      <Navbar /> {/* Include the Header */}
      <h1>About Us</h1>
      <p>This is the about page. Here you can add information about your website or application.</p>
    </div>
  );
};

export default About;
