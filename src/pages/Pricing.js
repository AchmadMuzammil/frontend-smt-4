import React from 'react';
import './pricing.css'; // Impor file CSS untuk styling

export default function Pricing() {
  return (
    <div className="pricing-container">
      <h1>Pricing</h1>
      <div className="pricing-plans">
        <div className="pricing-plan">
          <h2>Basic</h2>
          <p className="price">$10 / bulan</p>
          <ul>
            <li>Fitur 1</li>
            <li>Fitur 2</li>
            <li>Fitur 3</li>
          </ul>
          <button className="choose-plan-btn">Choose Plan</button>
        </div>
        <div className="pricing-plan">
          <h2>Pro</h2>
          <p className="price">$20 / bulan</p>
          <ul>
            <li>Fitur 1</li>
            <li>Fitur 2</li>
            <li>Fitur 3</li>
            <li>Fitur 4</li>
          </ul>
          <button className="choose-plan-btn">Choose Plan</button>
        </div>
        <div className="pricing-plan">
          <h2>Premium</h2>
          <p className="price">$30 / bulan</p>
          <ul>
            <li>Fitur 1</li>
            <li>Fitur 2</li>
            <li>Fitur 3</li>
            <li>Fitur 4</li>
            <li>Fitur 5</li>
          </ul>
          <button className="choose-plan-btn">Choose Plan</button>
        </div>
      </div>
    </div>
  );
}
