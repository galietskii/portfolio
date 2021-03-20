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
