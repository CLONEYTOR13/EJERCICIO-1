var nombres = ["tonny", "beymar", "jaffet", "wilmer", "brayan", "jorge", "josias", "eugenio", "jhon", "michael", "jesus", "josue", "jazmin", "freddy"];

function sorteo() {
    var ganador = Math.floor(Math.random() * nombres.length);
    var representante = nombres[ganador];
    document.getElementById('mostrar').value = representante;
}

function mos() {
    var lis = "<ul>";
    for (var i = 0; i < nombres.length; i++) {
        lis += "<li>" + nombres[i] + "</li>";
    }
    lis += "</ul>";
    document.getElementById('lista').innerHTML = lis;
}