import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/dashboard.css';
import copy from "copy-to-clipboard";




function Dashboard() {
  const navigate = useNavigate();
  const [showTokenData, setShowTokenData] = useState(true);
  const [showActivityData, setShowActivityData] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [copyText, setCopyText] = useState('');
  const [user, setUser] = useState();
  const [balance, setBalance] = useState();
  const [transactions, setTransactions] = useState();
  const [isFormOpen, setFormOpen] = useState(false);
  const [isActivityOpen, setActivityOpen] = useState(false);
  const [data, setData] = useState({
    to_address: "",
    coin_val: ""
  })

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  }

  const getTransication = async () => {
    const res = await fetch("http://localhost:5000/api/txt/txhistory", {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
        "content-type": "application/json"
      }
    })
    const data = await res.json()
    setTransactions(data)
  }
  console.log(transactions);
  const getBalance = async () => {
    const res = await fetch("http://localhost:5000/api/txt/getuserbalance", {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
        "content-type": "application/json"
      }
    })
    const data = await res.json()
    console.log(data);
    setBalance(data)
  }

  const sendSigntx = async () => {
    const { to_address, coin_val } = data

    const res = await fetch("http://localhost:5000/api/txt/transaction", {
      method: "POST",
      body: JSON.stringify({
        to_address,
        privatekey: user?.user.primarywallet.privateKey,
        network: "testnet",
        coin_name: "matic",
        coin_val
      }),
      headers: {
        token: localStorage.getItem("token"),
        "content-type": "application/json"
      }
    })
    const JsonData = await res.json()
    console.log(JsonData);
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
    getBalance()
    getTransication()
  }, []);

  return (
    <><div className={`dbcontainer ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='lbox'>
        <ul className={`ul1 ${isMenuOpen ? 'menu-open' : ''}`}>
          <a href="/">Mafia</a>
          {/* left side of dashboard */}
          <li className='li1'>
            <span className="material-symbols-outlined">
              DashBoard
            </span>
            <span>DashBoard</span>
          </li>
          <li className='li1'>
            <span className="material-symbols-outlined" onClick={() => setActivityOpen(!isActivityOpen)} >
              drag_indicator
            </span>
            <span onClick={() => setActivityOpen(!isActivityOpen)} >Activity</span>
          </li>
          <li className='li1'>
            <span className="material-symbols-outlined" onClick={() => setFormOpen(!isFormOpen)}>
              Send
            </span>
            <span>Send</span>
          </li>
          <li className='li1'>
            <span className="material-symbols-outlined">
              settings
            </span>
            <span>Setting</span>
          </li>
          <li className='li1'>
            <span className="material-symbols-outlined" onClick={()=>navigate("/")}>
              logout
            </span>
            <span onClick={()=>navigate("/")}>Log Out</span>
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
              <button className="material-symbols-outlined" onClick={() => setFormOpen(!isFormOpen)}>
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


        </div>
      </div>
      {isActivityOpen &&(
        
        <div className="transaction">
          <button className="material-symbols-outlined" onClick={() => setActivityOpen(false)}>
              close
              </button>
        <p>Transaction ID: '1'</p>
        <p>From: '1'</p>
        <p>Network: </p>
        <p>Amount: </p>
        <p>Coin: </p>
      </div>
      )

      }
      {isFormOpen && (
        <div className='center-container'>
          <div className="send-form">
          <button className="material-symbols-outlined" onClick={() => setFormOpen(false)}>
              close
              </button>
            <label className='padd' htmlFor="from_address">From Address:</label><br />
            <input readonly type="text" id="from_address" name="from_address" required value={user?.user.primarywallet.address} /><br /><br />

            <label className='padd' htmlFor="to_address">To Address:</label><br />
            <input onChange={onChange} type="text" id="to_address" name="to_address" required /><br /><br />

            <label className='padd' htmlFor="coin">Coin</label><br />
            <input type="text" id="to_address" name="coin_name" required value="matic" readonly /><br /><br />

            <label className='padd' htmlFor="network">Network</label><br />
            <input type="text" id="to_address" name="network" required value="testnet" readOnly /><br /><br />

            <label className='padd' htmlFor="amount">Amount:</label><br />
            <input onChange={onChange} type="text" id="amount" name="coin_val" step="any" required /><br /><br />

            <button onClick={sendSigntx}> Send Cryptocurrency</button>

          </div>
        </div>

      )}
    </div></>
  );
};

export default Dashboard;
