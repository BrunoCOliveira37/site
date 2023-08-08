window.addEventListener("scroll",navbarSticky )
function navbarSticky() {
    const navbar2 = document.querySelector(".navbar");
    var pos=navbar2.offsetTop;
    var scrollPosition=window.scrollY;
    navbar2.classList.toggle("sticky", scrollPosition>pos);

}
function sendMail(){
    var params = {
        name:document.getElementById("name").value + " "+ document.getElementById("surname").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,

    };

const serviceID = "service_kiscosa";
const templateID = "template_2phh9ve";
emailjs.send(serviceID,templateID,params).then((res) =>{
    document.getElementById("name").value = "",
    document.getElementById("email").value = "",
    document.getElementById("message").value = "",
    console.log(res);
    alert("Email enviado com sucesso!");
})
.catch((err)=>console.log(err));
; }

