import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import { Toaster } from 'sonner'


const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ConnectionProvider endpoint='https://api.devnet.solana.com'>
        <WalletProvider wallets={[]} autoConnect> 
            <WalletModalProvider>
                {children}
                <Toaster />
            </WalletModalProvider >
        </WalletProvider>

    </ConnectionProvider>
  )
}

export default Providers