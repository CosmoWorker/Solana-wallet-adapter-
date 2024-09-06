import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletMultiButton,
    WalletDisconnectButton,
} from '@solana/wallet-adapter-react-ui';
import { Airdrop } from './Airdrop';
import { SolBalance } from './SolBalance';
import { SolTransaction } from './SolTransaction';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';


function App() {
  return (
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/7Jq6qMlv9qxuxToEgeNH5nbdUOPJ8QFI"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton/>
            <WalletDisconnectButton/>
            <div>
              <h2>Wallet-Adapater</h2>
            </div>
            <Airdrop/>
            <SolBalance/>
            <SolTransaction/>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
  )
}

export default App
