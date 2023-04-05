function alertFn(){
    alert("The button is clicked")
}
const  change = document.getElementById("mydiv");

//console.log(change)

//change.style.backgroundColor ="blue"
var cnt=0
function fn(){
    
    cnt ++;
    console.log(cnt)
       if(cnt == 2){change.style.backgroundColor ="blue"}
       else{ change.style.backgroundColor ="red"}
         
}


change.addEventListener("click", fn)
