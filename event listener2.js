/* var listener=document.querySelector("h1");
listener.addEventListener("click", function(){
    alert("Hi"); 
}); */ 

var listener=document.querySelector("h1"); 
listener.addEventListener("mouseover",function(){
    alert("Hi"); 
    listener.classList.add("event listener2"); 
});


listener.addEventListener("mouseout",function(){
    listener.classList.remove("event listener2"); 
});