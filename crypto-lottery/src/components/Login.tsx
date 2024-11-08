import React from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';

const Login: React.FC = () => {
    const [walletConnected, setWalletConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("")

    const connectWallet = async () => {
        console.log("clicked")
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const _walletAddress = await signer.getAddress();
                setWalletConnected(true);
                setWalletAddress(_walletAddress)
            } catch (error) {
                console.error("Failed to connect wallet", error);
            }
        } else {
            alert('Please install MetaMask to use this feature.');
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Please, connect your wallet</h2>
                <p>Please connect your wallet to see your supplies, borrowings, and open positions.</p>
                <button className="connect-wallet-btn" onClick={connectWallet}>
                    {walletConnected ? 'Wallet Connected' : 'Connect wallet'}
                </button>
            </div>
        </div>
    );
};

export default Login;
