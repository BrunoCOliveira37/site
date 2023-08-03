window.addEventListener("scroll",navbarSticky )
function navbarSticky() {
    const navbar2 = document.querySelector(".navbar");
    var pos=navbar2.offsetTop;
    var scrollPosition=window.scrollY;
    navbar2.classList.toggle("sticky", scrollPosition>pos);

}



var slides=document.querySelectorAll('.slide');
var btns=document.querySelectorAll('.butn');
let currentSlide= 1;
//manual
var manualNav=function(manual){
    slides.forEach((slide) => {
        slide.classList.remove("active");

        btns.forEach((butn)=>  {
            butn.classList.remove("active");
        });
    })


    slides[manual].classList.add("active");
    btns[manual].classList.add("active");
}
btns.forEach((butn, i) => {
    butn.addEventListener("click",()=>{
        manualNav(i);
        currentSlide= i;
    });
});