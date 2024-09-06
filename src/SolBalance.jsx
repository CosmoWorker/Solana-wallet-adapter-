import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function SolBalance(){
    const wallet=useWallet()
    const { connection }= useConnection();

    async function getBalance() {
        if (wallet.publicKey){
            const bal=await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML= bal /LAMPORTS_PER_SOL;
        }
    }

    getBalance();


    return (
        <div>
            <p>SOL Balance:</p> <p id="balance"></p>
        </div>
    )
}

