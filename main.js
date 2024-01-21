let button=document.getElementsByClassName('myButtonToUp');
button.addEventListener('click',()=>{
 button.getAttribute("href").innerText="./index.html";
 


})
document.querySelector(".image1").addEventListener('click',()=>{
document.querySelector(".nameProgramme1").style.visibility = "hidden";



})


document.getElementsByClassName('hoverMenue').addEventListener('mouseover',()=>{
    document.getElementsByClassName('hoverMenue').classList = "nav-link active text-white opacity-50 hoverMenue" ; 
})