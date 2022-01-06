function abrir(){
    var ventana=open();
    ventana.document.write("Estoy escribiendo en la nueva ventana<br>");
    ventana.document.write("Segunda linea");
    }
    
    function abrirParametros()
    {
    var ventana=open('','','status=yes,width=400,height=250,menubar=yes');
    ventana.document.write("Esto es lo primero que aparece<br>"); }
    
    function mostrarAlerta()
    {
    alert("Esta ventana de alerta ya la utilizamos en otros problemas.");
    }
    
    function confirmar()
    {
    var respuesta=confirm("Presione alguno de los dos botones");
    if (respuesta==true)
    alert("presionó aceptar");
    else
    alert("presionó cancelar");
    }
    
    function cargarCadena()
    {
    var cad=prompt("cargue una cadena:","");
    alert("Usted ingreso "+cad);
    }

            <input type="button" value="open()" onClick="abrir()">
            <input type="button" value="open con parámetros" onClick="abrirParametros()" >
            <input type="button" value="alert" onClick="mostrarAlerta()">
            <input type="button" value="confirm" onClick="confirmar()">
            <input type="button" value="prompt" onClick="cargarCadena()">

                LO QUE BORRO
            <input type="text" name="buscador" id="buscador"
            placeholder="Buscar Producto" size="25">
            <button type="button" onclick="BUSCAR()"> Buscar </button>



            
/*function BUSCAR(){
    var NOMBRE=document.getElementById("buscador").value;
    //alert(NOMBRE);
    //console.log(NOMBRE);
    if(NOMBRE == "") {
        alert("Tienes que colocar un producto");
        document.getElementById("buscador".focus());
    }
    console.log(NOMBRE)
}
*/</input>

let students = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Alexys',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ]
  
  let approved = students.filter(student => student.score >= 11);

  precioConIva(precio,iva);}

    function pedirDatos(){
        alert("Si te registras ahora tenes un descuento del 10%")
    let espacio = "";
    let quieres =confirm('quieres dejar tus datos?')
    if (quieres==true)
        alert("Presionó aceptar");
        else
        alert("Presionó cancelar");
    let nombre1 = prompt("Dime tu nombre");
    let apellido = prompt("Dime tu apellido");
    let direccion = prompt("Dime tu direccion");
    let telefono = prompt("Dime tu telefono");
    document.write =alert('Sus datos son los siguientes:'+ 'Nombre:', nombre1,'Apellido:'+apellido, 'Direccion:'+direccion,'Telefono:'+telefono)
    let respuesta=confirm("Confirmas tus datos?");
    if (respuesta==true)
    alert("Se guardaron los datos");
    else
    alert("Cancelo.. Lo quieres intertar de nuevo? Presiona de nuevo resgistrar");
    console.log("Nombre:"+nombre1,"Apellido:"+apellido,"Direccion:"+direccion,"Telefono:"+telefono)
    }

    function contactanos()
    {
        let respuesta=confirm("Nos dejas tus datos y nosotros nos contatamos con vos?");
        if (respuesta==true)
        alert("Presionó aceptar");
        else
        alert("Presionó cancelar");
        let gmail = prompt("Decinos tu email")
        let wha = prompt("Decinos tu whastsapp")
        let datos = alert("Sus datos son:"+gmail, wha)
        let respuestas=confirm("Confirmas tus datos?");
        if (respuestas==true)
        alert("Se guardaron los datos");
        else
        alert("Cancelo.. Lo quieres intertar de nuevo? Presiona de nuevo contactanos");
        let estaremos =alert("Te estaremos contactando a la brevedad, Muchas Gracias")
        console.log("Email:"+gmail, "whatsapp:"+wha)
    }

    const productos = [];
    class Productos {
    constructor(nombre, modelo, precio){
        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = precio;
    }
}

productos.push(new Productos('Remera Bella', 2021, 500));
productos.push(new Productos('Pantalon Blanco', 2021, 900));
productos.push(new Productos('Reloj', 2020, 500));

console.log(productos);

for( const Productos of productos){
    console.log('Nombre:', Productos.nombre);
    console.log('Modelo', Productos.modelo);
    console.log('Precio:', Productos.precio);
}

function buscarProductos(productos){
    return productos.nombre == 'Reloj';
}
const buscar = productos.find(buscarProductos)

console.log(buscar);
    
<input type="radio" name="position" checked />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <main id="carousel">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </main>
            
            <h2>oieahfioeafjioafjosijesfioj</h2>


            main#carousel {
    grid-row: 1 / 2;
    grid-column: 1 / 8;
    width: 100vw;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 600px;
    --items: 5;
    --middle: 3;
    --position: 1;
    pointer-events: none;
  }
  function Buscar(){
class Buscar {
    constructor(id, prendas, precio){
        this.id = id,
        this.prendas =prendas,
        this.precio = precio
}}

let productosenStock = [];
let productosenVenta;
    do{
        productosenVenta= Number(prompt("ingresar id"));
        let nombreProducto=prompt("Tienes remera, pantalon, accesorio, reloj. Quieres pedir?");
        let precioProducto = Number(prompt("Ingresa el precio del producto"));
    

    productosenStock.push(new Buscar(productosenVenta, nombreProducto, precioProducto));
    console.log('diponibles:',productosenStock);

}
class Productos {
  constructor(nombre,precio){
      this.nombre = nombre.toUpperCase();
      this.precio = parseFloat(precio);
      this.vendido = false;
  
}
sumaImpuesto() {
  this.precio = this.precio * 1.21;
}
vendidos(){
  this.vendido = true;
}
}

const producto1 = new Productos("remera", "100");
const producto2 = new Productos("pantalon", "500")
const producto3 = new Productos("accesorio", "300")
const producto4 = new Productos("reloj", "400")
producto1.vendidos();
const array = [producto1, producto2, producto3, producto4]
localStorage.setItem("productos", JSON.stringify(array));
console.log(JSON.stringify(array))
array.forEach(elemento =>{ 
(elemento.sumaImpuesto());
console.log(elemento.precio)
})
  
  div.item {
    position: absolute;
    width: 300px;
    height: 400px;
    background-color: coral;
    --r: calc(var(--position) - var(--offset));
    --abs: max(calc(var(--r) * -1), var(--r));
    transition: all 0.25s linear;
    transform: rotateY(calc(-10deg * var(--r)))
      translateX(calc(-300px * var(--r)));
    z-index: calc((var(--position) - var(--abs)));
  }
  
  div.item:nth-of-type(1) {
    --offset: 1;
    background-color: #90f1ef;
  }
  div.item:nth-of-type(2) {
    --offset: 2;
    background-color: #ff70a6;
  }
  div.item:nth-of-type(3) {
    --offset: 3;
    background-color: #ff9770;
  }
  div.item:nth-of-type(4) {
    --offset: 4;
    background-color: #ffd670;
  }
  div.item:nth-of-type(5) {
    --offset: 5;
    background-color: #e9ff70;
  }
  
  input:nth-of-type(1) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  input:nth-of-type(1):checked ~ main#carousel {
    --position: 1;
  }
  
  input:nth-of-type(2) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
  input:nth-of-type(2):checked ~ main#carousel {
    --position: 2;
  }
  
  input:nth-of-type(3) {
    grid-column: 4 /5;
    grid-row: 2 / 3;
  }
  input:nth-of-type(3):checked ~ main#carousel {
    --position: 3;
  }
  
  input:nth-of-type(4) {
    grid-column: 5 / 6;
    grid-row: 2 / 3;
  }
  input:nth-of-type(4):checked ~ main#carousel {
    --position: 4;
  }
  
  input:nth-of-type(5) {
    grid-column: 6 / 7;
    grid-row: 2 / 3;
  }
  input:nth-of-type(5):checked ~ main#carousel {
    --position: 5;
  }
  