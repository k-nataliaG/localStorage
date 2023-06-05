function respuesta() {
let pre1, pre2, pre3

pre1=document.getElementById("pre1").value;
pre2=document.getElementById("pre2").value;
pre3=document.getElementById("pre3").value;


localStorage.setItem("¿Que es linux?" , pre1);
localStorage.setItem("¿Porque usar linux en desarrollo de software?" , pre2);
localStorage.setItem("¿Que es CLI?" , pre3);

window.location="respuesta.html"

}