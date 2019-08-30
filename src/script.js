




const CONTRACT_ADDRESS = '0x73Ab0cb05058665e128f17A740104b691CDf92F9';
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
     
    

    } catch (error) {
      // User denied account access...
      console.log('cannot access ethereum network', error);
    }
  }
  // Non-dapp browsers...
  else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }

 const donations = async () => {

 //const ethAddress = await web3.eth.getAccounts();
const contract = await new web3.eth.Contract(abi, CONTRACT_ADDRESS);
   const ttAddress = await web3.eth.getAccounts();
        //console.log(ethAddress[0]);
                        // 10000000000
        const Donations = await contract.methods
         .transfer('0x1e4220Bf97969aAc945E65Ef80cC16540F00Eb6a', 100)
        .send({from: ttAddress[0], gas: 1000000 })
          .then(donation=> {
           // console.log(hash);
            // receipt example
            console.log(donation);});
        };
        Donations();
  
});