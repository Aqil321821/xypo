var menu=document.getElementById("menu-pic");
var side=document.getElementById("side-nav");
side.style.right="-250px";
menu.onclick=function(){
    if(side.style.right=="-250px"){
        side.style.right="0px";
    }
    else{
        side.style.right="-250px"
    }
}