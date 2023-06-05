function cargarDato() {
let res1, res2, res3


res1=localStorage.getItem( "¿Que es linux?" );
res2=localStorage.getItem( "¿Porque usar linux en desarrollo de software?" );
res3=localStorage.getItem( "¿Que es CLI?" );


document.getElementById("respuesta").innerHTML = res1;
document.getElementById("respuesta2").innerHTML = res2;
document.getElementById("respuesta3").innerHTML = res3;


}

cargarDato()