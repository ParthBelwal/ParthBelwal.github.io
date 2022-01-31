const hamburger = document.querySelector(".ham");  
const container=document.querySelector(".container");
var linksd = document.querySelector(".linksd");  
container.addEventListener('click', function() {  
 hamburger.classList.toggle("change")  
 linksd.classList.toggle("navd-change")
});  
