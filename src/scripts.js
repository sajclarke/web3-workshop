const CONTRACT_ADDRESS = '0x8709cdDE6eE852e68fD4eb0C00Db0A989F1f8f47';
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

donate = async () => {
 
 
    const contract = await new web3.eth.Contract(abi, CONTRACT_ADDRESS);
    const addy = await web3.eth.getAccounts();
 
         const Donateb = await contract.methods
          .transfer('0xE71e67ee8527aD768E5BE4C6Db277Fb9f83A4Ea2', web3.utils.toWei('100', "ether"))
          .send({ from: addy[0], gas: 1000000 })
         .then(result => {
         console.log(result);}
         )
 
 
         let tSupply= await contract.methods.totalSupply().call();
       console.log(tSupply);
       let balance= await contract.methods.balanceOf(addy[0]).call();
      console.log(balance);
  };
  