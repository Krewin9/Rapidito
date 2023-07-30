
const LOGIN = 1;
const REGISTRO = 2;
const ODISPONIBLES = 3;
const OPENDIENTES = 4;
const OENTREGADAS = 5;
const FACTURA = 6;
const PERFIL_MOTORISTA = 7;

let indiceA;
let indiceS
function seleccionarOpcion(opcion, anterior) {
    indiceA = anterior;  
    indiceS = opcion;  
    console.log("este es el indiceAnterior:", indiceA);
    console.log("este es el indice:", indiceS);

    switch (opcion) {
        case LOGIN:
            document.getElementById('header').style.display = "block";
            document.getElementById('back').style.display = "none";
            document.getElementById('menuPrincipal').style.display = "none";
            document.getElementById('login').style.display = "block";
            document.getElementById('form-registro').style.display = "none";
            document.getElementById('seccion-Odisponibles').style.display = "none";
            document.getElementById('seccion-Opendientes').style.display = "none";
            document.getElementById('seccion-Oentregadas').style.display = "none";
            document.getElementById('factura-motorista').style.display = "none";
            document.getElementById('perfil-motorista').style.display = "none";   
            document.getElementById('footer').style.display = "block";
            break;

        case REGISTRO:
            document.getElementById('header').style.display = "block";
            document.getElementById('menuPrincipal').style.display = "none";
            document.getElementById('back').style.display = "block";
            document.getElementById('login').style.display = "none";
            document.getElementById('form-registro').style.display = "block";
            document.getElementById('seccion-Odisponibles').style.display = "none";
            document.getElementById('seccion-Opendientes').style.display = "none";
            document.getElementById('seccion-Oentregadas').style.display = "none";
            document.getElementById('factura-motorista').style.display = "none";
            document.getElementById('perfil-motorista').style.display = "none";
            break;
            
        case ODISPONIBLES:
            document.getElementById('header').style.display = "block";
            document.getElementById('menu').style.display = "block";
            document.getElementById('logo-header').style.display = "block";
            document.getElementById('back').style.display = "none";
            document.getElementById('menuPrincipal').style.display = "block";
            
            document.getElementById('login').style.display = "none";
            document.getElementById('form-registro').style.display = "none";
            document.getElementById('seccion-Odisponibles').style.display = "block";
            document.getElementById('seccion-Opendientes').style.display = "none";
            document.getElementById('seccion-Oentregadas').style.display = "none";
            document.getElementById('factura-motorista').style.display = "none";
            document.getElementById('perfil-motorista').style.display = "none";

            
            document.getElementById('footer').style.display = "block";
            break;

        case OPENDIENTES:
            document.getElementById('header').style.display = "block";
            document.getElementById('login').style.display = "none";
            document.getElementById('form-registro').style.display = "none";
            document.getElementById('seccion-Odisponibles').style.display = "none";
            document.getElementById('seccion-Opendientes').style.display = "block";
            document.getElementById('seccion-Oentregadas').style.display = "none";
            document.getElementById('factura-motorista').style.display = "none";
            document.getElementById('perfil-motorista').style.display = "none";
            document.getElementById('menuPrincipal').style.display = "block";
            document.getElementById('back').style.display = "none";
            
            break;
        case OENTREGADAS:
            document.getElementById('header').style.display = "block";
            document.getElementById('login').style.display = "none";
            document.getElementById('form-registro').style.display = "none";
            document.getElementById('seccion-Odisponibles').style.display = "none";
            document.getElementById('seccion-Opendientes').style.display = "none";
            document.getElementById('seccion-Oentregadas').style.display = "block";
            document.getElementById('factura-motorista').style.display = "none";
            document.getElementById('perfil-motorista').style.display = "none";
            document.getElementById('menuPrincipal').style.display = "block";
            document.getElementById('back').style.display = "none";
            break;
            
        case FACTURA:
            document.getElementById('header').style.display = "block";
            document.getElementById('login').style.display = "none";
            document.getElementById('form-registro').style.display = "none";
            document.getElementById('seccion-Odisponibles').style.display = "none";
            document.getElementById('seccion-Opendientes').style.display = "none";
            document.getElementById('seccion-Oentregadas').style.display = "none";
            document.getElementById('factura-motorista').style.display = "block";
            document.getElementById('perfil-motorista').style.display = "none";
            document.getElementById('menuPrincipal').style.display = "none";
            document.getElementById('back').style.display = "block";
            document.getElementById('footer').style.display = "none";
            document.getElementById('header').style.display = "block";

            break;

        case PERFIL_MOTORISTA:
            document.getElementById('header').style.display = "none";
            document.getElementById('menu').style.display = "none";
            document.getElementById('logo-header').style.display = "none";
            document.getElementById('login').style.display = "none";
            document.getElementById('form-registro').style.display = "none";
            document.getElementById('seccion-Odisponibles').style.display = "none";
            document.getElementById('seccion-Opendientes').style.display = "none";
            document.getElementById('seccion-Oentregadas').style.display = "none";
            document.getElementById('factura-motorista').style.display = "none";
            document.getElementById('perfil-motorista').style.display = "block";
            document.getElementById('menuPrincipal').style.display = "none";
            document.getElementById('back3').style.display = "block"; 
            document.getElementById('footer').style.display = "none";

            break;

        default:
            break;
    }

}

function regresar(params) {
    if(indiceS==2) {
        seleccionarOpcion(1,2);
    }else{
        seleccionarOpcion(indiceA,0);
    }
}

/*------VALIDACIONES DE FORMULARIOS*/
function guardar() {
    validarCampoVacio('usuario');
    validarCampoVacio('password');
    //validarCorreo('correo');

    console.log('Nombre:', document.getElementById('usuario').value);
    console.log('Password:', document.getElementById('password').value);
}
let contarVali = 0;
let validarPass = 0;
function validarCampos() {
    const form =document.getElementById('formRegister')
    contarVali = 0;
    confirmarPass = document.getElementById('confirmarPass')
    validarCampoVacio('newUsuario');
    validarCampoVacio('newPassword');
    validarCampoVacio('confirmarPass');
    validarCampoVacio('telefono');
    validarCorreo('correo');
    //console.log("este es es contar:", contarVali);

    if (contarVali == 5 && validarPass == true) {
        form.reset();
        return true;
    } else {
        //confirmarPass.classList.remove('input-success');
        //confirmarPass.classList.add('input-error');
        console.log("Llene todos los campos")
    }
}

function validarCampoVacio(id) {
    let campo = document.getElementById(id);
    if (campo.value == '') {
        campo.classList.remove('input-success');
        campo.classList.add('input-error');
    } else {
        campo.classList.remove('input-error');
        campo.classList.add('input-success');
        contarVali += 1;
    }

}

function validarCorreo(camp) {
    console.log(camp.value);
    let campo = document.getElementById(camp);

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(campo.value)) {
        campo.classList.remove('input-error');
        campo.classList.add('input-success');
        contarVali += 1;
    } else {
        campo.classList.remove('input-success');
        campo.classList.add('input-error');
    }
}

function validarPassword(campo) {
    var p1 = document.getElementById("newPassword").value;
    var p2 = document.getElementById("confirmarPass").value;

    if (p1.length == 0 || p2.length == 0) {
        console.log("Los campos de la password no pueden quedar vacios");
        campo.classList.remove('input-success');
        campo.classList.add('input-error');
    }

    if (p1 != p2) {
        campo.classList.remove('input-success');
        campo.classList.add('input-error');
        console.log("Las passwords deben de coincidir")
        validarPass = false;
    } else {
        campo.classList.remove('input-error');
        campo.classList.remove('input-success');
        console.log("Los password coinciden")
        validarPass = true;
    }
}

/*-------------------------------CONTENIDO DE TABLAS*/

let ordenesPendientes = [
    {
        noOrden: 122,
        usuario: "Paola",
        factura: [
            {
                productos: [{
                    descripcionProd: "pizzas",
                    cantidadProd: 2,
                    valorProd: 100
                },
                {
                    descripcionProd: "pizzas",
                    cantidadProd: 2,
                    valorProd: 100
                }
                ],
                comisionOrden: 44
            }
        ]
    },
    {
        noOrden: 121,
        usuario: "Ana",
        factura: [
            {
                productos: [{
                    descripcionProd: "pizzas",
                    cantidadProd: 2,
                    valorProd: 100
                },
                {
                    descripcionProd: "pizzas",
                    cantidadProd: 2,
                    valorProd: 100
                }
                ],
                comisionOrden: 44
            }
        ]
    }

];

let ordenesEntregadas = [
    {
        noOrden: 114,
        usuario: "Lucía",
        factura: [
            {
                productos: [{
                    descripcionProd: "pizzas",
                    cantidadProd: 2,
                    valorProd: 100
                },
                {
                    descripcionProd: "pizzas",
                    cantidadProd: 2,
                    valorProd: 100
                }
                ],
                comisionOrden: 44
            }
        ]
    },
    {
        noOrden: 110,
        usuario: "Marcos",
        factura: [
            {
                productos: [{
                    descripcionProd: "pizzas",
                    cantidadProd: 2,
                    valorProd: 100
                },
                {
                    descripcionProd: "pizzas",
                    cantidadProd: 2,
                    valorProd: 100
                }
                ],
                comisionOrden: 44
            }
        ]
    }

];


let generarTablaEntr = function (datos) {
    let cont = 1;
    let stringTabla = `
    <tr>
    <th>#</th>
    <th>No Orden</th>
    <th>Usuario</th>
    <th>factura</th>
    <th>Comisión</th>   
    </tr>
    `;

    for (let ordenes of datos) {
        let fila = `<tr><td>`
        fila += cont;
        fila += `</td>`

        fila += `<td>`
        fila += ordenes.noOrden;
        fila += `</td>`

        fila += `<td>`
        fila += ordenes.usuario;
        fila += `</td>`

        fila += `<td id="verFactura" onclick="seleccionarOpcion(6,5)">`
        fila += `Ver`
        fila += `</td>`

        fila += `<td id="comision"">`
        fila += `Lps 45`
        fila += `</td>`
        fila += `</tr>`;

        stringTabla += fila;
        cont += 1;
    }
    return stringTabla;
}

document.getElementById('tablaOEntregadas').innerHTML = generarTablaEntr(ordenesEntregadas);


const origen =0;
function seleccionarEstado(estado) {
    switch (estado) {
        case origen:
            
            break;
    
        default:
            break;
    }
    
}
