const CONTRACT_ADDRESS = '0x27997697698f5492531519DF71eDE7D508d60403';

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

      var supply = await contractInstance.methods.totalSupply().call();
      console.log(supply);
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

//Exercise 3b
const donate = async () =>
{
  const ttBalance = await contractInstance.methods
.balanceOf(accounts[0])
.call({ from: accounts[0] });
console.log(ttBalance);
  //contractInstance.methods.transfer(userAdress, value).send({from: doneeAdress}).on('transactionHash', function(hash) {console.log(hash);});
}
  