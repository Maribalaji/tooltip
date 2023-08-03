var button=document.querySelector(".main");
var icon=document.querySelector(".icon");
// console.log(button);

button.addEventListener("click",function(){
    // if( button.nextElementSibling.classList.contains("para")){
        button.nextElementSibling.classList.remove("para");
    // }
    // else{
    //     button.nextElementSibling.classList.add("para");
    // }
})


icon.addEventListener("click",function(e){
    e.target.parentNode.classList.add("para")

})