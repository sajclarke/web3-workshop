const CONTRACT_ADDRESS = '0x71EceFD6A2060BB16DE58C4170aabaa83faF5C39';
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
   //  let balance= await contractInstance.methods.balanceOf('').call();
    
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
  
  console.log('part 1');
  
  
 
  const Donatet = async () => {
    
   const contract = await new web3.eth.Contract(abi, CONTRACT_ADDRESS);   
   const ttAddress = await web3.eth.getAccounts();

        const Donateb = await contract.methods       
         .transfer('0xE71e67ee8527aD768E5BE4C6Db277Fb9f83A4Ea2', 10000000000)
         .send({ from: ttAddress[0], gas: 1000000 })
        .then(result => {
        console.log(result);});         
        };
        Donatet();
      }
        