import React from "react";

const Location = () => (
  <div className="location_wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55502.37068576527!2d-98.45878757685283!3d29.606646378485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c61d4a364c5bf%3A0x2e22382213012d60!2sThe+Magnolia+Pancake+Haus!5e0!3m2!1sen!2sus!4v1538715492135"
      width="100%"
      height="500px"
      frameBorder="0"
      allowFullScreen
      title="pancake huas"
    />
    <div className="location_tag">
      <div>Location</div>
    </div>
  </div>
);

export default Location;
