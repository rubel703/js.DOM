function addStyle(){
   var myvar= document.querySelector("#paraid"); 
        myvar.classList.add("para-style"); 

    /*myvar.style.color="red";  
    myvar.style.fontSize="3rem"; 
    myvar.style.fontWeight="bold"; 
    myvar.style.fontStyle="italic"; */ 
}

function removeStyle(){
    var myvar= document.querySelector("#paraid"); 
    myvar.classList.remove("para-style"); 

}