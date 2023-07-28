
window.addEventListener("scroll", function() {
    var navbar2 = document.querySelector(".navbar2");
    navbar2.classList.toggle("sticky", window.scrollY > 1350);

    /*var logo = document.querySelector(".logo1");

    if (this.window.scrollY>1350) {
        MudarEstado(logo);
    }*/
});
/*function MudarEstado(el) {
    var display = el.style.display;
    if (display == "none") {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}*/