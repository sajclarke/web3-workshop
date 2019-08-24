function append()
{
    var start = new  Date;
    var myday = new Date
     mytime = myday-start;
    var form = document.getElementById("form").value;
    var li = document.createElement("li");
    li.className = "comment author-comment"; 
    li.innerHTML = " <div class=\"info\"><a href=\"#\">Jack Smith</a><span>"+mytime/1000+"</span></div><a class=\"avatar\" href=\"#\"><img src=\"https://api.adorable.io/avatars/285/avatar_user_3.png\"width=\"35\" alt=\"Profile Avatar\" title=\"Jack Smith\"/></a><p>"+form +"</p>";
    document.getElementById("ul").appendChild(li); 
}