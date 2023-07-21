import React, { useState } from 'react';
import '../css/dashboard.css';

function Dashboard() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`dbcontainer ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='lbox'>
        <ul className={`ul1 ${isMenuOpen ? 'menu-open' : ''}`}>
          <a href="/">Mafia</a>
          <li className='li1'>
            <span className="material-symbols-outlined">
              DashBoard
            </span>
            DashBoard
          </li>
          <li className='li1'>
            <span className="material-symbols-outlined">
              shopping_cart
            </span>
            Buy
          </li>
          <li className='li1'>
            <span className="material-symbols-outlined">
              swap_calls
            </span>
            Swap
          </li>
          <li className='li1'>
            <span className="material-symbols-outlined">
              draft
            </span>
            Stake
          </li>
          <li className='li1'>
            <span className="material-symbols-outlined">
              settings
            </span>
            Settings
          </li>
          <li className='li1'>
            <span className="material-symbols-outlined">
              support
            </span>
            Support
          </li>
        </ul>
        <div className='hamburger' onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='rbox'>
        <p className='db'>DashBoard</p>
        <div className='rbox1'>
          <span>connect your wallet</span>
          <span>Connect more than one account to experience the</span>
          <span style={{ padding: "15px" }}>full potential of this dappl</span>
          <button className='button'>Connect Metamask</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
