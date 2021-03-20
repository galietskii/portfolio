let popup = document.querySelector('.page-navigation__list');
let open = document.querySelector('.button-burger');
popup.style.display = 'none';
popup.style.height = '0';

open.addEventListener("click",      function() {
	open.style.display = 'none';
    if(popup.style.display == 'none')  
    popup.style.display = 'block';
    else popup.style.display = 'none';
    
  });
// ACARDION MODULES
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}