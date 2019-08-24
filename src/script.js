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


function datetime(){
    start_date /=1000;

    var seconds= Math.round(start_date);

    var timeText;

    if(seconds <60){
        timeTt = seconds+"sec" +(seconds < 2 ? " ": "s")+"ago";

    }
    span.innerHTML= "10 minutes ago";
}

}