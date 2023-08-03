for(var i=0; i<3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text=this.innerHTML;
        audioPlay(text);
        playAnimation(text);
    });
}
    function audioPlay(text){
        switch(text){
            case "One":
                var audio=new Audio("file locations");
                audio.play();
                break; 
            case "Two":
                var audio=new Audio("file locations");
                audio.play();
                break;
            case "Three":
                var audio=new Audio("file locations");
                audio.play();
                break; 
        }
    }

    function playAnimation(text){
        var selectedButton=document.querySelector("."+text);
        selectedButton.classList.add("anim");

        setTimeout(function(){
            selectedButton.classList.remove("anim");
        }, 1000);
    }

    document.addEventListener("keypress",function(event){
        var text=event.key;
        playAnimation(text);
        audioPlay(text);
    });