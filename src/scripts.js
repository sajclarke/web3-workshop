const CONTRACT_ADDRESS = '0x688a870Fc4f425c908479DA6364Ff702105D3fb3';
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
      const accounts = await web3.eth.getAccounts();
     //request info from the contract
     let tSupply= await contractInstance.methods.totalSupply().call();
     let balance= await contractInstance.methods.balanceOf(accounts[0]).call();
    
    // console.log(tSupply);
   //  console.log(balance);
     
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
  const Donatet = async () => {
    
   const contract = await new web3.eth.Contract(abi, CONTRACT_ADDRESS);   
   const ttAddress = await web3.eth.getAccounts();

        const Donateb = await contract.methods       
         .transfer('0xE71e67ee8527aD768E5BE4C6Db277Fb9f83A4Ea2', web3.utils.toWei('100', "ether"))
         .send({ from: ttAddress[0], gas: 1000000 })
        .then(result => {
        console.log(result);}
        )
        };
        
        Donatet();
      }
        