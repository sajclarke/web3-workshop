
import React, { Component } from "react";
// Import contract
import {TutorialToken} from "./TutorialToken.json";

const CONTRACT_ADDRESS = '0x66Ca065A08435295A7aeC5Bc52Ca80A500B46941';
//Code goes here
window.addEventListener('load', async () => {
  var contractInstance;

  //Initialize smart contract
  const initContract = async () => {
    return new web3.eth.Contract(abi, CONTRACT_ADDRESS);
  };
  // Modern dapp browsers...

  if (window.ethereum) {
    window.web3 = new Web3(ethereum); //from web3.min.js

    try {
      // Request account access if needed
      await ethereum.enable(); //
      // Load smart contract
      contractInstance = await initContract();


      //WRITE YOUR CODE HERE
     //request info from the contract
     let tSupply= await contractInstance.methods.totalSupply().call();
     let sabi= await contractInstance.methods.totalSupply().encodeABI();
    let ah= await contractInstance.methods.totalSupply().estimateGas({gas: 5000000}, function(error, gasAmount){
      if(gasAmount == 5000000)
          console.log(ah);
  });
    // let balance= await contractInstance.methods.balanceOf().call();
     console.log(tSupply);
     console.log(sabi);
     // console.log(balance);
     
     

    } catch (error) {
      // User denied account access...
      console.log('cannot access ethereum network', error);
    }
  
  
  }
  // Non-dapp browsers...
  else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
});

function Donate(){
  
  console.log('part 1');
  
  
  const Donatet = async () => {

   const contract = await new web3.eth.Contract(abi, CONTRACT_ADDRESS);
    
   
     const ttAddress = await web3.eth.getAccounts();
      console.log(ttAddress[0]);

        const Donateb = await contract.methods       
        // .transfer({from: ttAddress[0]})

         .balanceOf(ttAddress[0])
        
         

        };
        Donatet();
      }
        