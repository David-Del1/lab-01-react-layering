import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = 
({ currentColor, backgroundImage, generateRandomColor }) => {

  useEffect(() => {
    const interval = setInterval(generateRandomColor, 1000);
    return () => clearInterval(interval);
  }, [currentColor]);
  return (
    <div
      style={{
        backgroundColor: currentColor,
        backgroundImage: `url(${backgroundImage})`,
        width: '100%',
        height: '100vh'
      }}
    >
      <h1>Paaaarrttaaayyyyy!!!</h1>
    </div>
  );
};

ColorDisplay.propTypes = {
  currentColor: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  generateRandomColor: PropTypes.func.isRequired
};

export default ColorDisplay;
