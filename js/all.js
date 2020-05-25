let menu = document.querySelector(".ham__icon");
let dropdown = document.querySelector(".dropdown");
menu.addEventListener("click",function(e) {
  e.preventDefault();
  dropdown.classList.toggle("active");
})
let faq__list__li = document.querySelectorAll(".faq__list__li");
// let toggle__title = document.querySelectorAll(".toggle__title");
let faq__list__li__content = document.querySelectorAll(".faq__list__li__content"); 
for(let i=0; i<faq__list__li.length; i++) {
  faq__list__li[i].addEventListener("click",function(e) {
    if(this.nodeName === "LI") {
      this.classList.toggle("active");
      faq__list__li__content[i].classList.toggle("active");
    }
    // if(e.target.className === 'faq__list__li__content') {
    //   e.target.className.toggle("active");
    // }
  })
}
