import React from 'react';
import '../styling/paste.css'; // External CSS file
import zerodhaimage from '../clubimages/zerimage.jpg'
import quizimage from '../clubimages/quimage.jpg'
import supplyimage from '../clubimages/simage.jpg'
import iplimage from '../clubimages/iplimage.jpg'
import wtrimage from '../clubimages/wtr.jpg'
const Paste = () => {
  return (
    <div className="cards-container">
      {/* Card 1: Zerodha Quiz */}
      <div className="card">
        <div className="card-image">
          <img src={zerodhaimage} alt="Zerodha Quiz" />
        </div>
        <div className="card-content">
          <h2>Zerodha Quiz</h2>
          
        </div>
      </div>

      {/* Card 2: Finance Talk Show */}
      <div className="card">
        <div className="card-image">
          <img src={quizimage} alt="Finance Talk Show" />
        </div>
        <div className="card-content">
          <h2>Finance Talk Show</h2>
          
        </div>
      </div>

      {/* Card 3: Warangal Trading Ring */}
      <div className="card">
        <div className="card-image">
          <img src={wtrimage} alt="Warangal Trading Ring" />
        </div>
        <div className="card-content">
          <h2>Warangal Trading Ring</h2>
          <p>
            {/* Add description manually */}
          </p>
        </div>
      </div>

    
      <div className="card">
        <div className="card-image">
          <img src={iplimage} alt="IPL Auction Taste and Tactics" />
        </div>
        <div className="card-content">
          <h2> IPL Auction</h2>
          
        </div>
      </div>
 
     
      <div className="card">
        <div className="card-image">
          <img src={supplyimage} alt="Chemquest Auction" />
        </div>
        <div className="card-content">
          <h2>Supply Sphere</h2>
          
        </div>
      </div>

     
    </div>
  );
};

export default Paste;  