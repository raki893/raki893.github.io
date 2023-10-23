import React, { useEffect } from 'react';
import '../scss/Welcome.scss';

const Welcome = () => {
  const texts = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ': )'];
  const numberOfText = 8;
  const numberOfParticle = 12;
  const multNumText = 360 / numberOfText;
  const multNumParticle = 360 / numberOfParticle;
  const width = 40;
  const height = 40;

  useEffect(() => {
    // Your animation logic can be implemented here using JavaScript or a library like GSAP.
  }, []);

  return (
    <div className="criterion">
      {texts.map((text, index) => (
        <div key={index} className={`background background${index}`} style={{ left: `${12.5 * index}%` }}>
          {text.split('').map((char, charIndex) => (
            <div key={charIndex} className={`text text${charIndex}`}>
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Welcome;
