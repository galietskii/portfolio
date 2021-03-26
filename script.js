// let popup = document.querySelector('.page-navigation__list');
// let open = document.querySelector('.button-burger');
// popup.style.display = 'none';
// popup.style.height = '0';

// open.addEventListener("click",      function() {
// 	open.style.display = 'none';
//     if(popup.style.display == 'none')  
//     popup.style.display = 'block';
//     else popup.style.display = 'none';
    
//   });
let overlay = document.querySelector('.burger_overlay')
let coll = document.getElementsByClassName('button-burger');
for(let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
      this.classList.toggle('actives');
      let content = this.nextElementSibling;
      if(content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
  });
}
// ACARDION MODULES
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// ACARDION MOBILE VIDEO 
const mediaQuery = window.matchMedia('(max-width: 400px)');
if (mediaQuery.matches) {
  let videos = document.getElementsByClassName('videos');
  let i;

  for(i = 0; i < videos.length; i++) {
    videos[i].addEventListener("click", function(){
      this.classList.toggle("activess");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      }else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}