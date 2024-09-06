import { useConnection, useWallet } from "@solana/wallet-adapter-react"


//The useWallet "Hook" provides the wallet variable inside the Airdrop "Component"
//Airdrop component wrapped inside the WalletProvider 
export function Airdrop(){
    //hooks in react
    const wallet=useWallet()
    const { connection }= useConnection();
    
    async function sendAirdropToUser(){
        const amount=document.getElementById("publicKey").value
        await connection.requestAirdrop(wallet.publicKey, amount*1000000000)
        alert("Airdropped Sol")    
    }

    return (
        <div>
            <input id="publicKey" type="text" placeholder="Enter Amount"/>
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    )
}