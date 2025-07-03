import React, { useEffect, useState } from 'react';
import './Confirmation.css';

const Confirmation = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const audio = new Audio('/public/mixkit-correct-answer-tone-2870.wav'); // Path to your sound file
    audio.play();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <i
        className={`bi bi-check-circle-fill ${animate ? 'pop-animation' : ''}`}
        style={{ color: 'green', fontSize: '75px' }}
      ></i>
      <p style={{ marginTop: '10px', fontSize: '20px', fontWeight: 'bold' }}>
        ORDER PLACED!
      </p>
    </div>
  );
};

export default Confirmation;
