import React, { useEffect, useState } from 'react';
import '../css/dashboard.css';
import copy from "copy-to-clipboard";

function Dashboard() {
  const [showTokenData, setShowTokenData] = useState(true);
  const [showActivityData, setShowActivityData] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [copyText, setCopyText] = useState('');
  const [user, setUser] = useState()

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  }

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  }

  const copyToClipboard = () => {
    copy(user?.user.primarywallet.address);
    alert(`You have copied user id`);
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/users/getuser", {
      method: "get",
      headers: { token: localStorage.getItem("token") }
    })
      .then((data) => data.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className={`dbcontainer ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='lbox'>
        <ul className={`ul1 ${isMenuOpen ? 'menu-open' : ''}`}>
          <a href="/">Mafia</a>
          {/* left side of dashboard */}
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
      {/* right side of dashboard */}
      <div className='rbox'>
        {/* for user info */}
        <div className='db-main'>
          <p className='db'>
            {user?.user.username}'s Wallet
          </p>
        </div>
        <div className='rbox1'>
          <div className='wallet-container'>
            <span id="walletAddress" className='wallet-id'>
              {user?.user.primarywallet.address}
            </span>
            <button className="material-symbols-outlined" onClick={copyToClipboard}>
              content_copy
            </button>
          </div>
          <span>0 ETH</span>
          {/* for symbol */}
          <div className='symbol'>
            <div className='symbol-1'>
              <button className="material-symbols-outlined">
                local_mall
              </button>
              <span> Buy</span>

            </div>
            <div className='symbol-2'>
              <button className="material-symbols-outlined">
                Send
              </button>
              <span>Send</span>
            </div>
            <div className='symbol-3'>
              <button className="material-symbols-outlined">
                swap_horiz
              </button>
              <span>Swap</span>
            </div>
            {/* for token */}
          </div>
          <div className='token'>
            <div className='token1'>
              <h2 onClick={() => setShowTokenData(!showTokenData)}>Token</h2>
              {showTokenData && (
                <ul>
                  <li>Eth</li>
                  <li>+ Token</li>
                  <li>refresh</li>
                </ul>
              )}
            </div>
            <div className='activity'>
              <h2 onClick={() => setShowActivityData(!showActivityData)}>Activity</h2>
              {showActivityData && (
                <span>no activity</span>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
