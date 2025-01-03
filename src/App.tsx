import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "./App.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { toast } from "sonner";

function App() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [airDropAmount, setAirDropAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const airDrop = async () => {
    setLoading(true);
    if (!publicKey) {
      toast("Mate just connect your wallet");
      return;
    }

    try {
      if (loading) {
        toast("Sending cash you way....");
      }
      const lamports = parseFloat(airDropAmount) * 1e9;
      const airDropsignature = await connection.requestAirdrop(
        publicKey,
        lamports
      );

      await connection.confirmTransaction(airDropsignature, "confirmed");
      setLoading(false);
      toast("Bro's rich now💀");
    } catch (error) {
      toast(`${error}`);
      toast(`Rate Limited g, try tomorrow`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-5 font-mono  h-[90vh] items-center justify-center flex flex-col">
      <div className="border p-7 rounded-3xl border-zinc-200/20 shadow-2xl shadow-zinc-600/10">
        <div className="flex gap-2 my-2">
          <WalletMultiButton />
          <WalletDisconnectButton className="" />
        </div>
        <div className="flex flex-col items-center justify-start">
          <h2 className="text-3xl py-2 text-zinc-200">Enter AirDrop Amount</h2>
          <input
            type="text"
            value={airDropAmount}
            className="border outline-none p-2 w-[100%] mx-auto rounded-xl bg-zinc-800/20 border-zinc-200/20 "
            onChange={(e) => setAirDropAmount(e.target.value)}
          />
          <button
            className="border p-2 my-5 bg-zinc-800/20 border-zinc-200/20  rounded-xl px-3 text-zinc-300 shadow-xl hover:shadow-white/10"
            onClick={airDrop}
          >
            Send AriDrop
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
