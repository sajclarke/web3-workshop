//STEP02
var currentT = new Date();
function realtime()
{
	var time = new Date().getTime();
	return time;
}
//setInterval(() => console.log(realtime()),1000);
let timeLog = [null]; //array to hold the time at which comments were posted
let index = -1; 
function hoursAgo(log, now) //calculates time since particular comment was made
{
	var phrase;
	var output;
	var  deltaMilli = now - timeLog[log]; //find difference in milli seconds since post
	var secs = Math.round(deltaMilli/1000); //round to whole seconds
	if (secs < 60)
	{
		output =secs;
		phrase = " seconds ago";
	}
	if (secs >= 60)
	{
		output = Math.floor(secs/60); //display whole integer (minute)
	}
	if ((secs >= 60) && (secs < 120))
	{
		phrase = " minute ago;";
	}
	if ((secs < 3600) && (secs > 119))
	{
		phrase = " minutes ago";
	}
	if (secs >= 3600)
	{
		output = Math.floor(secs/3600); //display whole integer (hour)
	}
	if ((secs >= 3600) && (secs < 7119))
	{
		phrase = " hour ago";
	}
	if (secs > 3600)
	{
		phrase = " hours ago";
	}
	return output.toString()+phrase;
}

function timeUpdate() //called to update the span tag of the comments which show the time since posted
{
	if (index >= 0) //to avoid console error spam from the setInterval function, checks if a new a comment has been made
	{
		for (var x = 0; x < timeLog.length; x++)
		{
			document.getElementById("ID"+x).innerHTML = hoursAgo(x, realtime()); //update span tags
		}
	}
}

function makeComment()
{
	index += 1; //update index for comment about to be made
	var  postT = new Date();
	timeLog[index] = postT.getTime();

	var text = document.getElementById("postcomment").value;
	var listItem = document.createElement("li");
	listItem.className = "comment author-comment";
	listItem.innerHTML = "<div class=\"info\"><a href=\"#\">Jack Smith</a><span id=\"ID"+index+"\">"+ hoursAgo(index, realtime())+"</span></div><a class=\"avatar\" href=\"#\"><img src=\"https://api.adorable.io/avatars/285/avatar_user_3.png\"width=\"35\"alt=\"Profile Avatar\"title=\"Jack Smith\"/></a><p>"+ text +" </p>"
	document.getElementById("thread").appendChild(listItem);
}

setInterval(() => timeUpdate(), 1000); //actively updates time ago comment was made