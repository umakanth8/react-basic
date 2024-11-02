import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowImage(true), 500);
    setTimeout(() => setShowText(true), 1500);
    setTimeout(() => {
      setShowText(false);
      setShowText2(true);
    }, 4000);
  }, []);

  const handleAboutUsClick = () => {
    navigate('/about');  // Redirects to the AboutUs page
  };

  return (
    <div className="home-container">
      <div className={`home-image-container ${showImage ? 'show' : ''}`}>
        <img src="/images/about-us.jpg" alt="Cureus Technologies" className="home-image" />
        {showText && (
          <div className="overlay-text">
            <h1 className="overlay-heading">Cureus Technologies</h1>
            <p className="overlay-description">
              A fast-growing company delivering technology solutions for different industries like Education, Retail, Automobile, Media, Entertainment, Telecom, and Healthcare.
            </p>
          </div>
        )}
        {showText2 && (
          <div className="overlay-text">
            <h1 className="overlay-heading">Cureus Technologies</h1>
            <button className="overlay-button" onClick={handleAboutUsClick}>
              About us
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
