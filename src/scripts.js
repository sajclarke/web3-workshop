const CONTRACT_ADDRESS = '0x18f65375A84E0CCab0f6AADD812F174f3Bb79bBA';
//Code goes here
window.addEventListener('load', async () => {
  var contractInstance;
	initDonateBtns();

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
     //get info from the contract ?
     var totalSupply = await contractInstance.methods.totalSupply().call();
     var balance = await contractInstance.methods.balanceOf(accounts[0]).call();
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

function createDonateBtn() {
	var button = document.createElement("button");
	button.innerHTML = "Donate"; 
	button.onclick = donate; //define function later for simplicity
	return button;
}

function initDonateBtns() {
	var li = document.getElementsByTagName("li");
	//add a donate button to li except last (ie .. every comment)
	for (i = 0; i < li.length - 1; i++)
		li[i].appendChild(createDonateBtn());
}

async function donate() {
   var contract = await new web3.eth.Contract(abi, CONTRACT_ADDRESS);   
   var addressList = await web3.eth.getAccounts();
   await contract.methods.transfer('0x05BD781EF2C36A2dF6213ef63156202468299f7F', web3.utils.toWei('100', "ether"))
			.send({ from: ttAddress[0], gas: 1000000 });
}

function addComment() {
	var start = new Date();
	//get ul that hold comments
	var commentList = document.getElementsByTagName("ul")[0];

	//info node
	var div = document.createElement("div");
	div.classList.add("info");

	var name = document.createElement("a");
	name.innerHTML = "Jack Smith";
	name.setAttribute("href", "#");

	var span = document.createElement("span");
	span.innerHTML = "1 sec ago";

	function updateTime() {
		var dur = new Date() - start; //in ms
	  	//strip the ms
  		dur /= 1000;

		//get seconds 
  		var seconds = Math.round(dur);

		var timeText;
		if (seconds < 60)
			timeText =  seconds+" sec"+(seconds < 2 ? "": "s")+" ago";
		else if (seconds < 60 * 60)
			timeText =  Math.round(seconds / 60) +" minute" + ((seconds / 60) < 2 ? "" : "s") +" ago";
		else 
			timeText =  Math.round((seconds / 60) / 60) +" minute" + (((seconds / 60) / 60)  < 2 ? "" : "s") +" ago";
		span.innerHTML = timeText;
	}
	setInterval(updateTime, 1000);

	//embed info elems
	div.appendChild(name);
	div.appendChild(span);

	//build comment
	var p = document.createElement("p");
	//add user's comment to p to put in list
	p.innerHTML = document.getElementsByTagName("textarea")[0].value;

	//create link to user
	var a = document.createElement("a");
	a.classList.add("avatar");
	a.setAttribute("href", "#");

	//create user display pic
	var img = document.createElement("img");
	img.setAttribute("src", "https://api.adorable.io/avatars/285/avatar_user_3.png");
	img.setAttribute("width", "35");
	img.setAttribute("title", "Jack Smith");
	img.setAttribute("alt", "Profile Avatar");

	//embed image into link
	a.appendChild(img);

	var li = document.createElement("li")
	li.appendChild(div);
	li.appendChild(a);
	li.appendChild(p);
	li.appendChild(createDonateBtn());
	li.classList.add("comment");
	li.classList.add("author-comment");

	var before = document.getElementsByClassName("write-new")[0];

	commentList.insertBefore(li, before);
}
