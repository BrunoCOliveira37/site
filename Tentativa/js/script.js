


window.addEventListener("scroll", function() {
    var navbar2 = document.querySelector(".navbar2");
    const pos=navbar2.offsetTop;
    const scrollPosition=window.scrollY;
    navbar2.classList.toggle("sticky", window.scrollY>pos);
    /*if(scrollPosition>pos){
        navbar2.classList.add("sticky");
    }else{
        navbar2.classList.remove("sticky");
    }*/
})


    /*var logo = document.querySelector(".logo1");

    if (this.window.scrollY>1350) {
        MudarEstado(logo);
    }
});*/
/*function MudarEstado(el) {
    var display = el.style.display;
    if (display == "none") {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}*/
