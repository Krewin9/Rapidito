const LOGIN = 1;
const EMPRESAS = 2;
const PRODUCTOS = 3;
const ODISPONIBLES = 4;
const MOTORISTAS = 5;
const PERFIL = 6;
const MOTORISTASDISP = 7;
const SOLICITUDESREGISTRO = 8;
const MOTORISTASREGISTRADOS = 9;
const formEmpresas = 10;
const formPRODUCTOS = 11;

function seleccionarOpcion(opcion, anterior) {

    switch (opcion) {
        case LOGIN:
            document.getElementById('login').style.display = "block";
            document.getElementById('adminEmpresas').style.display = "none";
            document.getElementById('seccionEmpresas').style.display = "none";
            document.getElementById('seccionProductos').style.display = "none";

            break;

        case EMPRESAS:
            document.getElementById('login').style.display = "none";
            document.getElementById('adminEmpresas').style.display = "block";
            document.getElementById('seccionEmpresas').style.display = "block";
            document.getElementById('seccionFormEmpresas').style.display = "none";
            document.getElementById('seccionProductos').style.display = "none";
            document.getElementById('seccionFormProductos').style.display = "none";
            document.getElementById('seccionODisponibles').style.display = "none";
            document.getElementById('seccionMotoristas').style.display = "none";
            document.getElementById('seccionPerfil').style.display = "none";
            document.getElementById('seccionMotoristasRegistrados').style.display = "none";
            document.getElementById('seccionMotoristasD').style.display = "none";
            document.getElementById('seccionSolicitudesR').style.display = "none";

            break;

        case formEmpresas:
            document.getElementById('login').style.display = "none";
            document.getElementById('adminEmpresas').style.display = "block";
            document.getElementById('seccionEmpresas').style.display = "none";
            document.getElementById('seccionFormEmpresas').style.display = "block";
            document.getElementById('seccionProductos').style.display = "none";
            document.getElementById('seccionFormProductos').style.display = "none";
            document.getElementById('seccionODisponibles').style.display = "none";
            document.getElementById('seccionMotoristas').style.display = "none";
            document.getElementById('seccionPerfil').style.display = "none";
            document.getElementById('seccionMotoristasRegistrados').style.display = "none";
            document.getElementById('seccionMotoristasD').style.display = "none";
            document.getElementById('seccionSolicitudesR').style.display = "none";

            break;

        case PRODUCTOS:
            document.getElementById('login').style.display = "none";
            document.getElementById('adminEmpresas').style.display = "block";
            document.getElementById('seccionEmpresas').style.display = "none";
            document.getElementById('seccionFormEmpresas').style.display = "none";
            document.getElementById('seccionProductos').style.display = "block";
            document.getElementById('seccionFormProductos').style.display = "none";
            document.getElementById('seccionODisponibles').style.display = "none";
            document.getElementById('seccionMotoristas').style.display = "none";
            document.getElementById('seccionPerfil').style.display = "none";
            document.getElementById('seccionMotoristasD').style.display = "none";
            document.getElementById('seccionSolicitudesR').style.display = "none";
            document.getElementById('seccionMotoristasRegistrados').style.display = "none";

            break;

        case formPRODUCTOS:
            document.getElementById('login').style.display = "none";
            document.getElementById('adminEmpresas').style.display = "block";
            document.getElementById('seccionEmpresas').style.display = "none";
            document.getElementById('seccionFormEmpresas').style.display = "none";
            document.getElementById('seccionProductos').style.display = "none";
            document.getElementById('seccionFormProductos').style.display = "block";
            document.getElementById('seccionODisponibles').style.display = "none";
            document.getElementById('seccionMotoristas').style.display = "none";
            document.getElementById('seccionPerfil').style.display = "none";
            document.getElementById('seccionMotoristasRegistrados').style.display = "none";
            document.getElementById('seccionMotoristasD').style.display = "none";
            document.getElementById('seccionSolicitudesR').style.display = "none";

            break;

        case ODISPONIBLES:
            document.getElementById('login').style.display = "none";
            document.getElementById('adminEmpresas').style.display = "block";
            document.getElementById('seccionEmpresas').style.display = "none";
            document.getElementById('seccionFormEmpresas').style.display = "none";
            document.getElementById('seccionProductos').style.display = "none";
            document.getElementById('seccionFormProductos').style.display = "none";
            document.getElementById('seccionODisponibles').style.display = "block";
            document.getElementById('seccionMotoristas').style.display = "none";
            document.getElementById('seccionPerfil').style.display = "none";
            document.getElementById('seccionMotoristasD').style.display = "none";
            document.getElementById('seccionSolicitudesR').style.display = "none";
            document.getElementById('seccionMotoristasRegistrados').style.display = "none";

            break;
        case MOTORISTAS:
            document.getElementById('login').style.display = "none";
            document.getElementById('adminEmpresas').style.display = "block";
            document.getElementById('seccionEmpresas').style.display = "none";
            document.getElementById('seccionFormEmpresas').style.display = "none";
            document.getElementById('seccionProductos').style.display = "none";
            document.getElementById('seccionFormProductos').style.display = "none";
            document.getElementById('seccionODisponibles').style.display = "none";
            document.getElementById('seccionMotoristas').style.display = "block";
            document.getElementById('seccionPerfil').style.display = "none";
            document.getElementById('seccionMotoristasD').style.display = "none";
            document.getElementById('seccionSolicitudesR').style.display = "none";
            document.getElementById('seccionMotoristasRegistrados').style.display = "none";

            break;

        case PERFIL:
            document.getElementById('login').style.display = "none";
            document.getElementById('adminEmpresas').style.display = "block";
            document.getElementById('seccionEmpresas').style.display = "none";
            document.getElementById('seccionFormEmpresas').style.display = "none";
            document.getElementById('seccionProductos').style.display = "none";
            document.getElementById('seccionFormProductos').style.display = "none";
            document.getElementById('seccionODisponibles').style.display = "none";
            document.getElementById('seccionMotoristas').style.display = "none";
            document.getElementById('seccionPerfil').style.display = "block";
            document.getElementById('seccionMotoristasD').style.display = "none";
            document.getElementById('seccionSolicitudesR').style.display = "none";
            document.getElementById('seccionMotoristasRegistrados').style.display = "none";
            break;

        case MOTORISTASDISP:
            document.getElementById('login').style.display = "none";
            document.getElementById('adminEmpresas').style.display = "block";
            document.getElementById('seccionEmpresas').style.display = "none";
            document.getElementById('seccionFormEmpresas').style.display = "none";
            document.getElementById('seccionProductos').style.display = "none";
            document.getElementById('seccionFormProductos').style.display = "none";
            document.getElementById('seccionODisponibles').style.display = "none";
            document.getElementById('seccionMotoristas').style.display = "none";
            document.getElementById('seccionPerfil').style.display = "none";
            document.getElementById('seccionMotoristasD').style.display = "block";
            document.getElementById('seccionSolicitudesR').style.display = "none";
            document.getElementById('seccionMotoristasRegistrados').style.display = "none";
            break;

        case SOLICITUDESREGISTRO:
            document.getElementById('login').style.display = "none";
            document.getElementById('adminEmpresas').style.display = "block";
            document.getElementById('seccionFormEmpresas').style.display = "none";
            document.getElementById('seccionEmpresas').style.display = "none";
            document.getElementById('seccionProductos').style.display = "none";
            document.getElementById('seccionFormProductos').style.display = "none";
            document.getElementById('seccionODisponibles').style.display = "none";
            document.getElementById('seccionMotoristas').style.display = "none";
            document.getElementById('seccionPerfil').style.display = "none";
            document.getElementById('seccionMotoristasD').style.display = "none";
            document.getElementById('seccionSolicitudesR').style.display = "block";
            document.getElementById('seccionMotoristasRegistrados').style.display = "none";
            break;

        case MOTORISTASREGISTRADOS:
            document.getElementById('login').style.display = "none";
            document.getElementById('adminEmpresas').style.display = "block";
            document.getElementById('seccionFormEmpresas').style.display = "none";
            document.getElementById('seccionEmpresas').style.display = "none";
            document.getElementById('seccionProductos').style.display = "none";
            document.getElementById('seccionFormProductos').style.display = "none";
            document.getElementById('seccionODisponibles').style.display = "none";
            document.getElementById('seccionMotoristas').style.display = "none";
            document.getElementById('seccionPerfil').style.display = "none";
            document.getElementById('seccionMotoristasD').style.display = "none";
            document.getElementById('seccionSolicitudesR').style.display = "none";
            document.getElementById('seccionMotoristasRegistrados').style.display = "block";
            break;

        default:
            break;
    }

}

function iniciarSesion() {
    validarCampoVacio('usuario');
    validarCampoVacio('password');
    //validarCorreo('correo');

    console.log('Nombre:', document.getElementById('usuario').value);
    console.log('Password:', document.getElementById('password').value);
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
/*-------------------------------------------CONTENIDO DE TABLAS*/
let ordenesDisponibles = [
    {
        noOrden: 130,
        usuario: "Kylian",
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
        noOrden: 131,
        usuario: "Juan",
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
        noOrden: 132,
        usuario: "María",
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
        noOrden: 133,
        usuario: "Pedro",
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

let motoristasDisponibles = [
    {
        codigo: "FM023",
        motorista: "Haland",
        entregas: 3,
    },
    {
        codigo: "FM032",
        motorista: "Neymar",
        entregas: 2,
    },
    {
        codigo: "FM045",
        motorista: "Mohamed",
        entregas: 1,
    },
    {
        codigo: "FM056",
        motorista: "Dybala",
        entregas: 5
    }
];

let solicitudesRegistro = [
    {
        motoristaNuevo: "Haland",
        telefono: "3245-5674",
        direccion: "Col. Carrizal",
        correo: "hal09@gmail.com"
    },
    {
        motoristaNuevo: "Rakitic",
        telefono: "3245-5674",
        direccion: "Col. Carrizal",
        correo: "hal09@gmail.com"
    },
    {
        motoristaNuevo: "Modric",
        telefono: "3245-5674",
        direccion: "Col. Carrizal",
        correo: "hal09@gmail.com"
    },
    {
        motoristaNuevo: "Firmino",
        telefono: "3245-5674",
        direccion: "Col. Carrizal",
        correo: "hal09@gmail.com"
    }
];

let generarTablaMotoristasD = function (datos) {
    let stringTabla = `
    <tr>
    <th>#</th>
    <th>Código</th>
    <th>Motorista</th>
    <th>Entregas total</th>
    <th>Seleccionar</th>   
    </tr>
    `;
    let cont = 1;
    for (let ordenes of datos) {
        let fila = `<tr><td>`
        fila += cont;
        fila += `</td>`

        fila += `<td>`
        fila += ordenes.codigo;
        fila += `</td>`

        fila += `<td>`
        fila += ordenes.motorista;
        fila += `</td>`

        fila += `<td>`
        fila += ordenes.entregas;
        fila += `</td>`

        fila += `<td id="asignarOrden" onclick="seleccionarOpcion()">`
        fila += `Asignar`
        fila += `</td>`
        fila += `</tr>`;

        stringTabla += fila;
        cont += 1;
    }
    return stringTabla;
}

document.getElementById('tablaMotoristasD').innerHTML = generarTablaMotoristasD(motoristasDisponibles);

let generarTablaSolicitudes = function (datos) {
    let stringTabla = `
    <tr>
    <th>#</th>
    <th>Nombre</th>
    <th>Información</th>
    <th>Seleccionar</th>
    <th>Seleccionar</th>   
    </tr>
    `;
    let cont = 1;
    for (let ordenes of datos) {
        let fila = `<tr><td>`
        fila += cont;
        fila += `</td>`

        fila += `<td>`
        fila += ordenes.motoristaNuevo;
        fila += `</td>`

        fila += `<td>`
        fila += `Información`
        fila += `</td>`

        fila += `<td id="aceptarSolicitud" onclick="seleccionarOpcion()">`
        fila += `Aprobar`
        fila += `</td>`

        fila += `<td id="rechazarSolicitud" onclick="seleccionarOpcion()">`
        fila += `Rechazar`
        fila += `</td>`
        fila += `</tr>`;

        stringTabla += fila;
        cont += 1;
    }
    return stringTabla;
}

document.getElementById('tablaSolicitudesR').innerHTML = generarTablaSolicitudes(solicitudesRegistro);
