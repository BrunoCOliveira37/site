window.addEventListener("scroll",navbarSticky )
function navbarSticky() {
    const navbar2 = document.querySelector(".navbar");
    var pos=navbar2.offsetTop;
    var scrollPosition=window.scrollY;
    navbar2.classList.toggle("sticky", scrollPosition>pos);

}