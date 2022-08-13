import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0x6e182fc426f2A61eb4B4b6201cC62B2c57D82fC0";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        //checking for eth object in the window
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        rsvpContract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
    return rsvpContract;
  }
  
  export default connectContract;

  