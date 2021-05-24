contador=1;
var pizzas=[
    {
        foto:"IMG/1.png",
        nombre:"PIZZA AMERICANA",
        detalle:"Deliciosa pizza de queso mozzarella y salchicha con salsa BQQ.",
        preciopequena:8,
        preciomediana:12,
        preciogrande:14
    },
    {
        foto:"IMG/2.png",
        nombre:"PIZZA TROPICAL",
        detalle:"Deliciosa pizza de queso mozzarella y salchicha con salsa BQQ.",
        preciopequena:8,
        preciomediana:12,
        preciogrande:14
    },
    {
        foto:"IMG/3.png",
        nombre:"PIZZA CARBONARA",
        detalle:"Deliciosa pizza de queso mozzarella y salchicha con salsa BQQ.",
        preciopequena:8,
        preciomediana:12,
        preciogrande:14
    },
]


pintar();
function pintar(){
    for(let x=0 ;x<pizzas.length; x++){
        document.getElementById("cajaizq").innerHTML+=`
        <div class="caja">
        <div class="foto">
            <img src="${pizzas[x].foto}">
        </div>
        <div class="nombre">
           ${pizzas[x].nombre}
        </div>
        <div class="detalle">
           ${pizzas[x].detalle}
        </div>
        <div class=botones>
        <div class="boton">
        <button id="resta" onclick="resta(${x})"> - </button>
    </div>
    <div id="numeros${x}">1</div>
    <div class="boton">
        <button id="suma" onclick="suma(${x})"> + </button>
        </div>
        </div>
        <div class="elegir">
            <input type="radio" name="tamano${x}" id="tamanopeq${x}">Pequeña
            <input type="radio" name="tamano${x}" id="tamanomed${x}">Mediana
            <input type="radio" name="tamano${x}" id="tamanogra${x}">Grande
        </div>`
    }
}

function suma(){
    document.getElementById("suma").innerHTML=contador;
    contador++;
}
function resta(){
    document.getElementById("resta").innerHTML=contador;
    contador--;
}
