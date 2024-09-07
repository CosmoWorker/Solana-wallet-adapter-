import { LAMPORTS_PER_SOL, Transaction, SystemProgram, PublicKey } from "@solana/web3.js";
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Buffer } from 'buffer';

if (typeof window !== 'undefined') {
    window.Buffer = Buffer; // Ensure Buffer is available in the browser
}

export function SolTransaction(){
    const wallet=useWallet();
    const { connection }=useConnection();

    async function doTransaction(){
        try{
            let to=document.getElementById("to").value;
            let amount=document.getElementById("amount").value;
            const transacte=new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL,
            }))
            const sign= await wallet.sendTransaction(transacte, connection);
            await connection.confirmTransaction(sign);
            alert(`Sent ${amount}sol to ${to}`);
        }catch(err){
            console.error("Transaction failed", err);
        }
    }

    return (<div>
        <input type="text" placeholder="To" id="to"/>
        <input type="text" placeholder="Enter Amount" id="amount"/>
        <button onClick={()=>doTransaction()}>Send</button>
    </div>)
}