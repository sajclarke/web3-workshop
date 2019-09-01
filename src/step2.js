function commentAdd() {
	var start = new Date();
	//unordered list for comments
	var comments = document.getElementsByTagName("ul")[0];

	//info node
	var div = document.createElement("div");
	div.classList.add("info");

	var username = document.createElement("a");
	username.innerHTML = "Jack Smith";
	username.setAttribute("href", "#");

	var span = document.createElement("span");
	span.innerHTML = "1 secs ago";


	function timer() {
		var timeElapsed = new Date() - start; 
	  	//gets secs
  		timeElapsed /= 1000;

		//get seconds 
  		var seconds = Math.round(timeElapsed);

		var timeText;
		if (seconds < 60)
			                timeText =  seconds+" sec"+(seconds < 2 ? "": "s")+" ago";
		else if (seconds < 60 **2)
			                timeText =  Math.round(seconds / 60) +" minute" + ((seconds / 60) < 1 ? "s" : "");
		else 
			                timeText =  Math.round((seconds / 60) / 60) +" minute" + (((seconds / 60) / 60)  < 1 ? "s" : "");
		                    span.innerHTML = timeText;
	}
	setInterval(timer, 1000);

	
	div.appendChild(username);
	div.appendChild(span);

	//comment
	var p = document.createElement("p");
	p.innerHTML = document.getElementsByTagName("textarea")[0].value;
	//idk
	var a = document.createElement("a");
	a.classList.add("avatar");
	a.setAttribute("href", "#");
	var img = document.createElement("img");
	img.setAttribute("src", "https://api.adorable.io/avatars/285/avatar_user_3.png");
	img.setAttribute("width", "35");
	img.setAttribute("title", "Jack Smith");
	img.setAttribute("alt", "Profile Avatar");
	a.appendChild(img);
	var li = document.createElement("li")
	li.appendChild(div);
	li.appendChild(a);
	li.appendChild(p);
	var something=document.createElement("p");
	var b = document.createElement("button");
	b.setAttribute("type","button");
	b.setAttribute("onClick","donate");
	b.innerHTML="Donate";
	li.appendChild(b);
	//li.appendChild(something);
	li.classList.add("comment");
	li.classList.add("author-comment");

	var before = document.getElementsByClassName("write-new")[0];

	comments.insertBefore(li, before);
}
