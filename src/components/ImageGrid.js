import React from 'react';
import './ImageGrid.css';
import photo from './random.jpeg'

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="grid-item"><img src={photo} alt="Person 1" /></div>
      <div className="grid-item"><img src={photo} alt="Person 2" /></div>
      
      <div className="grid-item grid-item-text">
        <div className="text-block">
          <h2>25000+</h2>
          <p>Menschen, die durch peers. mehr Wohlbefinden erlangt haben</p>
        </div>
      </div>
      <div className="grid-item"><img src={photo} alt="Person 3" /></div>
      <div className="grid-item"><img src={photo} alt="Person 4" /></div>
      <div className="grid-item"><img src={photo} alt="Person 5" /></div>
      <div className="grid-item"><img src={photo} alt="Person 6" /></div>
      <div className="grid-item grid-item-text">
        <div className="text-block">
          <h2>2500+</h2>
          <p>Menschen, die durch peers. mehr Wohlbefinden erlangt haben</p>
        </div>
      </div>
      <div clasName="grid5">
      <div className="grid-item"><img src={photo} alt="Person 7" /></div>
      <div className="grid-item grid-item-text">
        <div className="text-block">
          <h2>2500+</h2>
          <p>Menschen, die durch peers. mehr Wohlbefinden erlangt haben</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
