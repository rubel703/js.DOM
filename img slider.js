var photos=["tiwter.png","facebook.png"]; 
var imgTag=document.querySelector("img");
var count=0; 

function previous(){
    count--;
    if(count<0){
        count=photos.length-1; 
        imgTag.src=photos[count];
    }
    else{
        imgTag.src=photos[count]; 
    }
}

function next(){
    count++;
    if(count>=photos.length){
        count=0; 
        imgTag.src=photos[count];
    }
    else{
        imgTag.src=photos[count]; 
    }
}