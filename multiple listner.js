
/* document.querySelectorAll("button")[0].addEventListener("click",function(){
    var text=this.innerHTML;

    document.querySelector("h1").innerHTML=" "+"he was born mocca";
});

document.querySelectorAll("button")[1].addEventListener("click",function(){
    var text=this.innerHTML;

    document.querySelector("h1").innerHTML=" "+"he was greates person in the world";
});

document.querySelectorAll("button")[2].addEventListener("click",function(){
    var text=this.innerHTML;

    document.querySelector("h1").innerHTML=" "+"his father name is Abdullah";
});  */ 

var len=document.querySelectorAll("button").length;
for(i=0;i<len;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var text=this.innerHTML;
    
        document.querySelector("h1").innerHTML=text+" clik";
    });
}