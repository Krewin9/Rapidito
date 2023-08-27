
const userList = document.getElementById("user-list");

        // Realizar la solicitud GET a la API del backend
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(users => {
                
                users.forEach(user => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${user.name} - ${user.email}`;
                    userList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error("Error al obtener los usuarios:", error);
            });






            

var usuariosJSON = [
    {
        nombre:"Krewin",
        apellido:"Murillo",
        ordenes:[
            {
                nombreProducto:" ",
                descripcion:" ",
                precio:0
            },
        ]
    }, 
    { 
        nombre:"Erick",
        apellido:"Vladimir",
        ordenes:[
             {
                nombreProducto:" ",
                descripcion:" ",
                precio:0
            }
        ]
    },
   
];


var categoriasJSON = [
    {
        nombreCategoria: "Desayunos",
        descripcion: "Un cafelito?",
        color: "#8c649c",
        icono: "fa fa-coffee",
        empresas: [
            {
                nombreEmpresa: "Coco-Baleada",
                imagen: "img/rapidito.png",
                productos: [
                    {
                        nombreProducto: "Huevitos Revueltos",
                        descripcion: "Huevos Revueltos, Chorizo + refresco",
                        precio: 49
                    },
                    {
                        nombreProducto: "Baleada Tipica",
                        descripcion: "Baleada con Mantequilla y Queso",
                        precio: 25
                    }
                ]
            },
            {
                nombreEmpresa: "Baleadas Olanchito",
                imagen: "img/rapidito.png",
                productos: [
                    {
                        nombreProducto: "Baleada con Todo",
                        descripcion: "Huevo, pollo, carne y chorizo",
                        precio: 100
                    },
                    {
                        nombreProducto: "Baleada Sencilla",
                        descripcion: "Baleada con frijoles y mantequilla",
                        precio: 22
                    },
                   
                ]
            },
            
        ]
    },
    {
        nombreCategoria:"Almuerzos",
        descripcion: ".",
        color: "#8c649c",
        icono: "fas fa-plug",
        empresas: [
            {
                nombreEmpresa: "Toro Bravo",
                imagen: "img/rapidito.png",
                productos: [
                    {
                        nombreProducto: "Carne",
                        descripcion: "Carne, frijoles, y chismol",
                        precio: 69
                    },
                    {
                        nombreProducto: "Sopa de Pollo",
                        descripcion: "Sopa de Pollo",
                        precio: 120
                    },
                    
                ]
            },
            {
                nombreEmpresa: "Burger King",
                imagen: "img/rapidito.png",
                productos: [
                    {
                        nombreProducto: "Whopper Jr",
                        descripcion: "Hamburguesa de Carne y Queso",
                        precio: 99
                    },
                    {
                        nombreProducto: "King De Pollo",
                        descripcion: "Hamburguesa de Pollo",
                        precio: 120
                    },
                   
                ]
            },
          
        ]
    },
    {
        nombreCategoria:"Cenas",
        descripcion:".",
        color:"#8c649c",
        icono:"fa fa-gift",
        empresas: [
            {
                nombreEmpresa: "Coco-Baleada",
                imagen: "img/rapidito.png",
                productos: [
                    {
                        nombreProducto: "Huevitos Revueltos",
                        descripcion: "Huevos Revueltos, Chorizo + refresco",
                        precio: 49
                    },
                    {
                        nombreProducto: "Baleada Tipica",
                        descripcion: "Baleada con Mantequilla y Queso",
                        precio: 25
                    }
                ]
            },
            {
                nombreEmpresa: "Baleadas Olanchito",
                imagen: "img/rapidito.png",
                productos: [
                    {
                        nombreProducto: "Baleada con Todo",
                        descripcion: "Huevo, pollo, carne y chorizo",
                        precio: 100
                    },
                    {
                        nombreProducto: "Baleada Sencilla",
                        descripcion: "Baleada con frijoles y mantequilla",
                        precio: 22
                    },
                   
                ]
            },
            
        ]
    },
    {
        nombreCategoria:"Farmacias",
        descripcion:".",
        color:"#8c649c",
        icono:"fa fa-medkit",
        empresas:[
            {
                nombreEmpresa: "Kielsa",
                imagen:"img/rapidito.png",
                productos:[
                    {
                        nombreProducto: "Kit de Emergencia",
                        descripcion: "Primeros Auxilios",
                        precio: 149
                    },
                    {
                        nombreProducto: "Pruebas Covid",
                        descripcion: "PCR",
                        precio: 349
                    },
                   
                ]
            },
            {
                nombreEmpresa: "Siman",
                imagen:"img/rapidito.png",
                productos:[
                    {
                        nombreProducto: "Pruebas Covid-PCR",
                        descripcion: "PCR",
                        precio: 349
                    },
                    {
                        nombreProducto: "Pruebas Covid",
                        descripcion: "Antigeno",
                        precio: 249
                    },
                  
                ]
            },
           
        ]
    },

    {
        nombreCategoria:"Tickets",
        descripcion:".",
        color:"#8c649c",
        icono:"fa fa-calculator",
        empresas:[
            {
                nombreEmpresa: "BAC Entradas",
                imagen:"img/rapidito.png",
                productos:[
                    {
                        nombreProducto: "Olimpia vs Motagua",
                        descripcion: "Sol",
                        precio: 140
                    },
                    {
                        nombreProducto: "Motagua vs Olimpia",
                        descripcion: "Palco",
                        precio: 440
                    },
                   
                ]
            },
            {
                nombreEmpresa: "Todo Ticket",
                imagen:"img/rapidito.png",
                productos:[
                    {
                        nombreProducto: "Arcangel",
                        descripcion: "Preferencial",
                        precio: 800
                    },
                    {
                        nombreProducto: "Ozuna",
                        descripcion: "VIP 1",
                        precio: 2140
                    }
                ]
            },
            
        ]
    },

    {
        nombreCategoria:"Bebidas",
        descripcion:".",
        color:"#8c649c",
        icono:"fa fa-beer",
        empresas:[
            {
                nombreEmpresa: "Cerveria Hondureña",
                imagen:"img/rapidito.png",
                productos:[
                    {
                        nombreProducto: "Salva Vida",
                        descripcion: ".",
                        precio: 49
                    },
                    {
                        nombreProducto: "Imperial",
                        descripcion: ".",
                        precio: 29
                    },
                    
                ]
            },
            {
                nombreEmpresa: "Copan Dry",
                imagen:"img/rapidito.png",
                productos:[
                    {
                        nombreProducto: "Ginger Dry",
                        descripcion: ".",
                        precio: 149.99
                    },
                    {
                        nombreProducto: "Beer Artesanal",
                        descripcion: ".",
                        precio: 49.99
                    },
                    
                ]
            },
            
        ]
    },

    {
        nombreCategoria:"Pagos",
        descripcion:".",
        color:"#8c649c",
        icono:"fa fa-id-card",
        empresas:[
            {
                nombreEmpresa: "AMDC",
                imagen:"img/rapidito.png",
                productos:[
                    {
                        nombreProducto: "Impuestos",
                        descripcion: ".",
                        precio: 1000
                    },
                    {
                        nombreProducto: "Matricula",
                        descripcion: ".",
                        precio: 549
                    },
                ] 
            },
            {
                nombreEmpresa: "ENEE",
                imagen:"img/rapidito.png",
                productos:[
                    {
                        nombreProducto: "Energia",
                        descripcion: ".",
                        precio: 3149.99
                    },
                    {
                        nombreProducto: "Cambio de Luces",
                        descripcion: ".",
                        precio: 429.99
                    },
                ]
            },
            
        ]
    },
    {
        nombreCategoria:"Mandaditos",
        descripcion:".",
        color:"#8c649c",
        icono:"fa fa-motorcycle",
        empresas:[
            {
                nombreEmpresa: "Rapi-Auto",
                imagen:"img/rapidito.png",
                productos:[
                    {
                        nombreProducto: "Taxi",
                        descripcion: ".",
                        precio: 200
                    },
                    {
                        nombreProducto: "Encomienda",
                        descripcion: ".",
                        precio: 150
                    },
                ]
            },
            {
                nombreEmpresa: "RapiMoto",
                imagen:"img/rapidito.png",
                productos:[
                    {
                        nombreProducto: "MotoMami",
                        descripcion: ".",
                        precio: 149.99
                    },
                    {
                        nombreProducto: "Motopapi",
                        descripcion: ".",
                        precio: 229.99
                    },
                ]
            },
            
        ]
    },
];



let celda='';

let indiceCat=0,indiceEmp=0,indicePro=0,indiceUsu=0;

let usuarios, categorias;

let localStorage = window.localStorage;

function comprobarStorage(){
    if (localStorage.getItem('usuarios') == null) { 
        localStorage.setItem('usuarios', JSON.stringify(usuariosJSON));
    }
    if (localStorage.getItem('categorias') == null) { 
        localStorage.setItem('categorias', JSON.stringify(categoriasJSON));
    }
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    categorias =JSON.parse(localStorage.getItem('categorias'));
}
comprobarStorage();

 
function mostrarUsuarios(){
    usuarios.forEach(usuario => {
    let  opcion = document.createElement('option');
    opcion.text = usuario.nombre+" "+usuario.apellido;
    opcion.value = indiceUsu;
    document.querySelector("#usuarios").appendChild(opcion);
    indiceUsu++;
});
    indiceUsu=0;
}
mostrarUsuarios();

function mostrarCategorias() {
    celda='<div class="row">';
    categorias.forEach( function(categoria,indiceCat){
        celda +=`<div class="col-12 col-sm-6 col-md-4 col-xl-3 mx-auto my-1 rounded" onclick="mostrarEmpresas(${indiceCat})" style="background-color:${ categoria.color}">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col">
                                    <p class="text-left">
                                        <i class="${ categoria.icono} fa-5x" aria-hidden="true" style="color:white;" ></i>
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <p class="text-left">
                                        <span class="font-1">${ categoria.nombreCategoria}</span><br>
                                        <span class="font-2">${ categoria.empresas.length} Comercios</span>
                                    </p>
                                </div>
                            </div>
                        </div>    
                    </div>`;
    });
    celda+='</div>';
    document.getElementById("categorias").innerHTML= celda;
}
mostrarCategorias();

function cambiarUsuarios(){
    let indiceUsu = document.querySelector("#usuarios").value;
    document.querySelector("#saludo").innerHTML = `<p class="font-1 mb-0" style="color:#4b045b;">
                                                        ¡Hola ${usuarios[indiceUsu].nombre}!
                                                    </p>`;
    document.querySelector("#bienvenida").innerHTML = `<p class="font-2" style="color:#4b045b; font-size:x-large;">
                                                        Bienvenido a Rapidito, ¿Qué deseas hoy?
                                                    </p>`;
}
cambiarUsuarios();


function mostrarEmpresas(indiceCat){
  
    celda ='<div class="row">'; 
    document.getElementById("empresasTitulo").innerHTML = categorias[indiceCat].nombreCategoria;
    categorias[indiceCat].empresas.forEach(function(empresa,indiceEmp){
        celda+=`<div class="col-6 mb-3">
                    <div class="card" style="border-radius: 30px; margin-rigtht: .5rem">
                        <img class="card-img-top" src="img/rapidito.png" alt="Card image cap">
                        <div class="card-img-overlay px-0">
                            <h5 class="card-title font-1">${empresa.nombreEmpresa}</h5>  
                        </div>
                        <div class="card-body p-0">
                            <ul class="list-group">`;
                        empresa.productos.forEach(function(producto,indicePro){
                            celda+=`<li class="list-group-item d-flex justify-content-between align-items-center">
                                            <span class="font-3">
                                            <span class="font-2" style="color:#4b045b">${producto.nombreProducto}<br></span>
                                            ${producto.descripcion.substring(0,28)}
                                            </span>
                                            <span class="font-3">
                                                <button class="btn btn px-4 py-1"
                                                onclick="mostrarProducto(${indiceCat},${indiceEmp},${indicePro})">
                                                    Pedir
                                                </button>
                                                <p class="text-right font-3 font-weight-bold pt-4 m-0">
                                                    $${producto.precio}
                                                </p>
                                            </span>
                                        </li>`;
                        });
        celda+=`</ul>
                </div>
            </div>
        </div>`;
        });
    celda+="</div>";
    document.getElementById("empresas").innerHTML=celda;
    $("#empresasModal").modal("show");
}
function mostrarProducto(indiceCat,indiceEmp,indicePro){
    document.getElementById("producto").innerHTML = categorias[indiceCat].empresas[indiceEmp].productos[indicePro].nombreProducto;
    document.getElementById("descripcion").innerHTML =categorias[indiceCat].empresas[indiceEmp].productos[indicePro].descripcion;
    document.getElementById("precio").innerHTML = '$'+categorias[indiceCat].empresas[indiceEmp].productos[indicePro].precio;
    document.getElementById("procesar").innerHTML =`<button type="button" class="btn btn"
                                                    onclick="procesarOrden(${indiceCat},${indiceEmp},${indicePro})">
                                                        procesar mi orden
                                                    </button>`;
    $("#productosModal").modal("show");
}

function mostrarOrdenes(){
    celda='';
    indiceUsu = document.getElementById("usuarios").value;
    document.getElementById("usuarioTitulo").innerHTML = `${usuarios[indiceUsu].nombre}, estas son tus ordenes`;
    usuarios[indiceUsu].ordenes.forEach(orden=>{
        celda+=`<div class="row">
                        <div class="col-10 pt-2">
                            <p class="font-2" style="color:#4b045b;">${orden.nombreProducto}</p>
                            <p class="font-3 text-left">"${orden.descripcion}</p>
                        </div>
                        <div class="col-2 pt-5 text-bottom">
                            <p class=" font-3 font-weight-bold text-right pt-5 mb-0">${orden.precio}</p>
                        </div>
                    </div>
                    <hr class="mx-2">`;
    });
    document.getElementById("ordenes").innerHTML= celda;
    $("#ordenesModal").modal("show");
}


function procesarOrden(indiceCat,indiceEmp,indicePro){
    indiceUsu = document.getElementById("usuarios").value;
    usuarios[indiceUsu].ordenes.push(categorias[indiceCat].empresas[indiceEmp].productos[indicePro]);
    $("#productosModal").modal("hide");
    $("#empresasModal").modal("hide");
}
