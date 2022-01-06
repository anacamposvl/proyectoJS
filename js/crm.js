/*declaración de variables*/
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const telefono = document.getElementById('telefono');
const enviarBoton = document.getElementById('send-button');
const clientesConteiner = document.getElementById('clientes');

const nuevoCliente = {
    nombre:'',
    apellido:'',
    edad:0,
    telefono:0
}

let arrayClientes = [];

/*declarar funciones*/
function validarDatos() {
    if((nuevoCliente.nombre.length>1)&&(nuevoCliente.apellido.length>1)&&nuevoCliente.edad>=18&&(nuevoCliente.telefono.length>=10)){
        return true;
    }else{
        return false;
    }
}

function imprimirClientes(cliente){
    let fila = document.createElement("ul");
    fila.classList.add('cliente-item');
    fila.innerHTML = `<li>${cliente.nombre}</li>
                      <li>${cliente.apellido}</li>
                      <li>${cliente.edad}</li>
                      <li>${cliente.telefono}</li>`;
    clientesConteiner.appendChild(fila);
};

function limpiarClientes(){
    while (clientesConteiner.firstChild) {
        clientesConteiner.removeChild(clientesConteiner.firstChild);
      }
}

function listarClientes(){
    limpiarClientes();
    if(localStorage.getItem('clientes')){
        const listaClientes = JSON.parse(localStorage.getItem('clientes'));
        listaClientes.forEach(cliente => {
        imprimirClientes(cliente);
    });
    }else{
        console.log('No hay clientes')
    }
}



/*defininir eventos*/
nombre.addEventListener('input', function(e) {
    nuevoCliente.nombre = e.target.value.trim();
});
apellido.addEventListener('input', function(e){
    nuevoCliente.apellido = e.target.value.trim();
    console.log(nuevoCliente);
});
edad.addEventListener('input', function(e) {
    nuevoCliente.edad = Number(e.target.value);
});
telefono.addEventListener('input', function(e) {
    nuevoCliente.telefono = e.target.value;
});

enviarBoton.addEventListener('click',function(e){
    if(validarDatos()){
        if(localStorage.getItem('clientes')){
            arrayClientes = JSON.parse(localStorage.getItem('clientes'));
        }
        arrayClientes.push(nuevoCliente);
        const arrayClienteJSON = JSON.stringify(arrayClientes);
        localStorage.setItem('clientes', arrayClienteJSON);
        listarClientes();
    }else{
        console.log('Faltan completar campos');
    }
});

/*Ejecuciones inmediatas*/

listarClientes();




/*TODO: 
    1.- obtener los datos del formulario ✅
    2.-Validar el formulario ✅
    3.-Ingresar los datos obtenidos en el localStorage ✅ 
    4.- Obtener los datos del localStorage e imprimirlos en el HTML ✅*/