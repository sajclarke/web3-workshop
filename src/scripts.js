const CONTRACT_ADDRESS = '0xc4E6d82b1Cc39dbb8E9097DBd89F4E4D9d1fdBaB';

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
      /*contractInstance.methods
      .transfer("0x846CFC14f441D074Aa290914740Da0c46bD1d8f8",10000)
      .send({ from: accounts[0], gas: 1000000 })
      .then(result => {
      console.log(result);});*/

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
  const initContract = async () => {
    return new web3.eth.Contract(abi, CONTRACT_ADDRESS);
  };

  var contractInstance = await initContract();
  const accounts = await web3.eth.getAccounts();
  
  var donation = "100";
  //console.log(account2);
  const donBalance = await contractInstance.methods
  .balanceOf(accounts[0])
  .call({ from: accounts[0] });
  console.log(donBalance);
  if (donBalance < donation)
  {
    alert("You have insufficient funds to donate :(");
  }
  else //donate
  {
    contractInstance.methods
    .transfer('0x0c5b002a840F75f2cB981d71a0aCEFA8144E0d02', web3.utils.toWei(donation, "ether"))
    .send({ from: accounts[0], gas: 1000000 })
    .then(result => {
    console.log(result);});
  }
}