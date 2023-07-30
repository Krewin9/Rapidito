const URL_ORDENESTABLAS = 'http://localhost:8888/ordenes'; 
const URL_REGISTRAR = 'http://localhost:8888/register'; 
const URL_LOGIN = 'http://localhost:8888/login'; 
const URL_FACTURA ='http://localhost:8888/ordenes/factura/:id';
let ordenesTablas = [];
let respuesta=[];
let orden=[];


window.addEventListener('DOMContentLoaded', ()=>{
    obtenerOrdenes();
})

const registrarMotorista = ()=>{
    const formData = new FormData(document.getElementById('formRegister'));
    
    if (!validarCampos()) {
        //no se han llenado los campos
        return;
    }
 
    const registro = {
        nombre: formData.get('newUsuario'),
        password: formData.get('password'),
        telefono: formData.get('telefono'),
        correo: formData.get('correo')
    }
    //console.log(registro);

    fetch(URL_REGISTRAR, {
        method:'POST',
        body:JSON.stringify(registro),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json)
    .catch(error =>{
        console.log(error)
        document.getElementById('formRegister').reset();
    })
    .then(resp=>{
        console.log(resp);
    })
}

const iniciarSesion = ()=>{
    const formData = new FormData(document.getElementById('formLogin'));

    const motorista = {
        nombre: formData.get('usuario'),
        password: formData.get('password')
    }
    console.log(motorista);

    fetch(URL_LOGIN, {
        method:'POST',
        body:JSON.stringify(motorista),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.text)
    .catch(error =>{
        console.log(error)
    })
    .then(resp=>{
        console.log("soy el valor",resp);
    })
}

const obtenerOrdenes = () =>{
    fetch(URL_ORDENESTABLAS)
    .then(res =>res.json())
    .catch(error =>{
        console.log(error);
    })
    .then(data =>{
        ordenesTablas = data;
        console.log(data);
        renderResult(ordenesTablas);
        renderOPendientes(ordenesTablas);
    })
}


let btnVerFactura=document.getElementById('btn-verFactura');
const tablaODisponibles = document.getElementById('tablaODisponibles');

const renderResult = (ordenesTablas) =>{
    let listHtml = "";
    ordenesTablas.forEach((product,i)=> {
        listHtml+= `
        <tr>
        <td class="id">${i+1}</td>
        <td class="text"> ${product.noOrden} </td>
        <td class="text"> ${product.cliente}</td>
        <td class="text" onclick="seleccionarOpcion(6,3)">Ver</td>
        <td class="txt" onclick="seleccionarOpcion(4)">Tomar</td>
        </tr>
        `
    });
    tablaODisponibles.innerHTML=listHtml;
}
//
const tablaOPendientes = document.getElementById('tablaOPendientes');
const renderOPendientes = (ordenesTablas) =>{
    let listHtml = "";
    ordenesTablas.forEach((product,i) => {
        listHtml+= `
        <tr>
        <td class="id">${i+1}</td>
        <td class="text"> ${product.noOrden} </td>
        <td class="text"> ${product.cliente}</td>
        <td class="text" id="btn-verFactura" onclick="seleccionarOpcion(6,3)">Ver</td>
        <td class="txt" onclick="seleccionarOpcion(4)">En el origen</td>
        </tr>
        `
    });
    tablaOPendientes.innerHTML=listHtml;
}
/*
const obtenerDataFactura = () =>{
    fetch(URL_FACTURA)
    .then(res =>res.json())
    .catch(error =>{
        console.log(error);
    })
    .then(data =>{
        factura = data;
        console.log(data);
        renderDataFactura(factura);
    })
}
obtenerDataFactura();
*/
const dataFactura = document.getElementById('dataFactura');
const renderDataFactura = (id) =>{
    console.log("este es el id de la orden",id)
    let listHtml = "";
    id.forEach((product,i) => {
        listHtml+= `
        <div class="table-header">#</div>
        <div class="table-header">Código</div>
        <div class="table-header">Descripción</div>
        <div class="table-header">Cantidad</div>
        <div class="table-header">Precio(unit)</div>
                
        <div class="table-item">${i+1}</div>
        <div class="table-item">${product.codProducto}</div>
        <div class="table-item">${product.descripcion}</div>
        <div class="table-item">${product.cantidad}</div>
        <div class="table-item">${product.precioUnit}</div>
        `
    });
    dataFactura.innerHTML=listHtml;
}
