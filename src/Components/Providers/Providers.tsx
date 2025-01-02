import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import React from 'react'

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ConnectionProvider endpoint='https://api.devnet.solana.com'>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider className='border w-[300px] mx-auto p-10 flex flex-col'>
                {children}
            </WalletModalProvider >
        </WalletProvider>

    </ConnectionProvider>
  )
}

export default Providers