
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
    }
]

var pedidos=[];
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
        <button onclick="resta(${x})"> - </button>
    </div>
    <div id="numeros${x}">1</div>
    <div class="boton">
        <button onclick="suma(${x})"> + </button>
        </div>
        </div>
        <div class="elegir">
            <input type="radio" name="tamano${x}" id="tamanopeq${x}">Pequeña
            <input type="radio" name="tamano${x}" id="tamanomed${x}">Mediana
            <input type="radio" name="tamano${x}" id="tamanogra${x}">Grande
        </div>
        <div class="botoncito">
        <div onclick="pedir(${x})"> Pedir </div>
    </div>
    
    <div class="precio" id="precio${x}"> </div>`

        
    }
}


function suma(posicion){

    let valor = parseInt(document.getElementById(`numeros${posicion}`).innerHTML);
    valor++;
    document.getElementById(`numeros${posicion}`).innerHTML=valor;
    
    }

function resta(posicion){

    let valor = parseInt(document.getElementById(`numeros${posicion}`).innerHTML);
    if (valor>1){
    valor--;
    }
    document.getElementById(`numeros${posicion}`).innerHTML=valor;

    }

    
function pedir(posicion) {

    canti=parseInt(document.getElementById(`numeros${posicion}`).innerHTML);
    let valor;
    if (document.getElementById(`tamanopeq${posicion}`).checked){
        valor = productos[posicion].pequena;
        mitamano="Pequeña"
    }
    if (document.getElementById(`tamanomed${posicion}`).checked){
         valor = productos[posicion].mediana;
         mitamano="Mediana"
    }
    if (document.getElementById(`tamanogra${posicion}`).checked){
         valor = productos[posicion].grande;
         mitamano="Grande"
    }
    
    
        
    }
    