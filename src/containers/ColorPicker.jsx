/* eslint-disable max-len */
import React, { Component } from 'react';
import ColorDisplay from '../components/color/ColorDisplay';

export default class ColorPicker extends Component {
  state = {
    currentColor: '',
    backgroundImage: ''
  };

  generateRandomColor = () => {
    // eslint-disable-next-line max-len
    const newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    this.setState(prev => {
      if(prev.currentColor === newColor) return { currentColor: '', backgroundImage: 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg' };
      return { currentColor: newColor, backgroundImage: ' ' };
    });
  }



  render() {


    return (
      <>
        
        <ColorDisplay 
          currentColor={this.state.currentColor}
          generateRandomColor={this.generateRandomColor}
          backgroundImage={this.state.backgroundImage}
        />
      </>
    );
  }
}
