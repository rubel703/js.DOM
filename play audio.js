for(var i=0; i<3; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        var text=this.innerHTML;
        audioPlay(text);
    });

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
} 