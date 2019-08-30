var currentT = new Date();
function starttime()
{
	var time = new Date().getTime();
	return time;
}
//setInterval(() => console.log(realtime()),1000);
let timeLog = [null]; //array to hold the time at which comments were posted
let index = -1; 
function passedtime(log, now) //calculates time since particular comment was made
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

function currenttime() //called to update the span tag of the comments which show the time since posted
{
	for (var x = 0; x < timeLog.length; x++)
	{
		document.getElementById("ID"+x).innerHTML = passedtime(x, starttime()); //update span tags
	}
}


function Additem(){
 let li= document.createElement('li');
li.classList.add("comment");
li.classList.add('author-comment');

var div = document.createElement('div');
div.classList.add('info');

var span= document.createElement('span');

div.innerHTML='<a href="#">Jack Smith</a>';
div.appendChild(span);
li.appendChild(div);

li.innerHTML ='<a class="avatar" href="#"><img src="https://api.adorable.io/avatars/285/avatar_user_3.png" width="35" alt="Profile Avatar" title="Jack Smith"></a>'
let para=document.createElement('p');

para.innerHTML = document.getElementsByTagName('textarea')[0].value;

li.appendChild(para);

var box = document.getElementsByClassName('write-new')[0];
var ul = document.getElementsByTagName('ul')[0];
ul.insertBefore(li,box);



   
   
   
   
    /*start_date /=1000;

    var seconds= Math.round(start_date);

    var timeText;

    if(seconds <60){
        timeTt = seconds+"sec" +(seconds < 2 ? " ": "s")+"ago";

    }
    span.innerHTML= "10 minutes ago";*/


}