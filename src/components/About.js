import React from 'react';

const About = () => {
    return (
        <div className="container my-5">
            <div className="row">

                    <h2>About Us</h2>
                    <p>
                    Going to School is a creative not-for-profit education trust that makes design-driven stories to equip millions of children and young people with the 21st Century Sustainable Entrepreneurial skills they need to be able to solve for Climate Change where they live.
                    </p>
                    <p>
                    On national television, online and on the ground in 3,000 Government Schools in India, Going to School's programs are designed to reach young people who are offline and enrolled in the government school system
                    </p>
    
          
                    <img 
                        src="/images/about-us.jpg"  
                        alt="About Going to School"
                        className="img-fluid"
                    />
                 
            </div>
        </div>
    );
};

export default About;
