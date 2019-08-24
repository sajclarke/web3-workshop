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
			timeText =  Math.round(seconds / 60) +" minute" + ((seconds / 60) < 1 ? "s" : "");
		else 
			timeText =  Math.round((seconds / 60) / 60) +" minute" + (((seconds / 60) / 60)  < 1 ? "s" : "");
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
	li.classList.add("comment");
	li.classList.add("author-comment");

	var before = document.getElementsByClassName("write-new")[0];
	
	commentList.insertBefore(li, before);

}
