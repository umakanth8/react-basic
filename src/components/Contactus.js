import React from 'react';

const Contactus = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 text-center">
                    <p><strong>Email:</strong> info@goingtoschool.org</p>
                    <p><strong>Phone:</strong> +9123 456 7890</p>
                    
                    {/* Google Maps Embed */}
                    <div className="map-container my-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.283263926157!2d77.5664068154029!3d12.971598390856714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f3c4db2b%3A0xa74424cfb5f3c1e7!2sIndian%20Institute%20of%20Science%20(IISc)!5e0!3m2!1sen!2sin!4v1616409740282!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="IISc Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;
