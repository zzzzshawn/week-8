import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import './App.css'

function App() {

  return (
    <div >
      <WalletMultiButton/>
      <WalletDisconnectButton/>
    </div>
  )
}

export default App
