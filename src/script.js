




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
      const donations = async () => {

 const ethAddress = await web3.eth.getAccounts();
        console.log(ethAddress[0]);

        const createCustomer = await contract.methods
        .send({ from: ethAddress[0] })
          .on('transactionHash', hash => {
            console.log(hash);
          })
          .on('confirmation', (confirmationNumber, receipt) => {
            console.log(confirmationNumber, receipt);
          })
          .on('receipt', receipt => {
            // receipt example
            console.log(receipt);
          })

}
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