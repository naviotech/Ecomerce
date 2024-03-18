//variables globales
const desplegable = document.querySelector(".mobilDesplegable");
const burguer = document.querySelector(".icon-nav-mobile");
const iconoCarrito = document.querySelector(".icon-shopping");
const carrito = document.querySelector(".carrito");
let listaCarrito = [];
let compras = document.querySelector(".comprar");
let eliminarTodo = document.querySelector(".eliminarCarrito");
let seccion = document.querySelector(".lista");
let seccionSummary = document.querySelector(".contenido-summary");
let contenidoOrder = document.querySelector("#contenido-order");
let totalOrder = document.querySelector(".grandTotalOrder")
let iconoSuma = document.querySelector("a .icon-plus");
let iconoResta = document.querySelector("a .icon-minus");
let cabecera = document.querySelector(".cabecera");
let precioTotal = document.querySelector(".precio");
let precioTotalSummary = document.querySelector(".totalSinImpuestos");
let impuestos = document.querySelector(".vat");
let shiping = document.querySelector(".shipping");
let grandTotal = document.querySelector(".grandTotal");
//desplegables------------------------------------------------------------------------
burguer.addEventListener("click",()=>{
    const computedStyle = window.getComputedStyle(desplegable);
    if (computedStyle.getPropertyValue("display") === "flex") {
        desplegable.style.display = "none";
        burguer.classList.add("icon-nav-mobile");
        burguer.classList.remove("icon-close");
    } else {
        desplegable.style.display = "flex";
        burguer.classList.remove("icon-nav-mobile");
        burguer.classList.add("icon-close");
    }
});
iconoCarrito.addEventListener("click",()=>{
    let estilos = window.getComputedStyle(carrito);
    if (estilos.getPropertyValue("display") === "flex") {
        carrito.style.display = "none";
    } else {
        carrito.style.display = "flex";
        
    }
});

//formulario------------------------------------------------------------------------------------
let ciudad = document.querySelector("#city");
let pais = document.querySelector("#country");
let direccion = document.querySelector("#adress");
let telefono = document.querySelector("#telefono");
let email = document.querySelector("#email");
let nombre = document.querySelector("#nombre");
let eMoney = document.querySelector("#payment");
let targeta = document.querySelector(".paymentTargeta");
let cash = document.querySelector("#delivery");
let target = document.querySelector("#target");
let pin = document.querySelector("#secretNumber");
let infoCash = document.querySelector(".infoCash");
let zipCode = document.querySelector("#code");
let boton = document.querySelector("#buttonSummary");
let botonPopover = document.querySelector("#botonPopover");
if(eMoney != null){
    eMoney.addEventListener("click",()=>{
        let mediaQuery = window.matchMedia("(min-width: 768px)");
        if (!mediaQuery.matches){
            targeta.style.display = "flex";
        }else{
            targeta.style.display = "grid";
        }
        target.required = true;
        pin.required = true;
        infoCash.style.display = "none";
        validarFormulario();
    });
    cash.addEventListener("click",()=>{
        targeta.style.display = "none";
        infoCash.style.display = "flex";
        target.required = false;
        pin.required = false;
        target.value = "";
        target.classList.remove("valido");
        target.classList.add("noValido");
        pin.value = "";
        target.classList.remove("valido");
        pin.classList.add("noValido");
        validarFormulario();
    })
}

const validarNombre = ()=>{
    
    let regexp = /\d/g;
    if(nombre.value.length >= 3 && !nombre.value.match(regexp)){
        nombre.classList.add("valido");
        nombre.classList.remove("noValido");
        nombre.style.outlineColor = "green";
    }else{
        nombre.classList.add("noValido");
        nombre.classList.remove("valido");
        nombre.style.outlineColor = "red";
    }
    validarFormulario();
}
const validarEmail = ()=>{
    
    let regexp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(!email.value.match(regexp) ){
        email.classList.add("noValido");
        email.classList.remove("valido");
        email.style.outlineColor = "red";
    }else if(email.value.match(regexp)){
        email.classList.add("valido");
        email.classList.remove("noValido");
        email.style.outlineColor = "green";
    }
    validarFormulario();
}
const validarTelefono = ()=>{
    
    let regexp = /[^0-9]/g;
    if(telefono.value.length >= 9 && !telefono.value.match(regexp)){
        telefono.classList.add("valido");
        telefono.classList.remove("noValido");
        telefono.style.outlineColor = "green";
    }else{
        telefono.classList.add("noValido");
        telefono.classList.remove("valido");
        telefono.style.outlineColor = "red";
    }
    validarFormulario();
}
const validarDireccion = ()=>{
    
    if(direccion.value.length >= 6){
        direccion.classList.add("valido");
        direccion.classList.remove("noValido");
        direccion.style.outlineColor = "green";
    }else{
        direccion.classList.add("noValido");
        direccion.classList.remove("valido");
        direccion.style.outlineColor = "red";
    }
    validarFormulario();
}
const validarCiudad= ()=>{
    
    if(ciudad.value.length >= 2){
        ciudad.classList.add("valido");
        ciudad.classList.remove("noValido");
        ciudad.style.outlineColor = "green";
    }else{
        ciudad.classList.add("noValido");
        ciudad.classList.remove("valido");
        ciudad.style.outlineColor = "red";
    }
    validarFormulario();
}
const validarPais = ()=>{
    if(pais.value.length >= 2){
        pais.classList.add("valido");
        pais.classList.remove("noValido");
        pais.style.outlineColor = "green";
    }else{
        pais.classList.add("noValido");
        pais.classList.remove("valido");
        pais.style.outlineColor = "red";
    }
    validarFormulario();
}
const validarZipCode = ()=>{
    if(zipCode.value.length >= 4){
        zipCode.classList.add("valido");
        zipCode.classList.remove("noValido");
        zipCode.style.outlineColor = "green";
    }else{
        zipCode.classList.add("noValido");
        zipCode.classList.remove("valido");
        zipCode.style.outlineColor = "red";
    }
    validarFormulario();
}
const validarTargeta = ()=>{
    if(target.value.length == 16){
        target.classList.add("valido");
        target.classList.remove("noValido");
        target.style.outlineColor = "green";
    }else{
        target.classList.add("noValido");
        target.classList.remove("valido");
        target.style.outlineColor = "red";
    }
    validarFormulario();
}
const validarPin =()=>{
    if(pin.value.length == 3){
        pin.classList.add("valido");
        pin.classList.remove("noValido");
        pin.style.outlineColor = "green";
    }else{
        pin.classList.add("noValido");
        pin.classList.remove("valido");
        pin.style.outlineColor = "red";
    }
    validarFormulario();
}
const añadirListeners = ()=>{
    email.addEventListener("input", validarEmail);
    nombre.addEventListener("input",validarNombre);
    telefono.addEventListener("input",validarTelefono);
    direccion.addEventListener("input",validarDireccion);
    ciudad.addEventListener("input",validarCiudad);
    pais.addEventListener("input",validarPais);
    zipCode.addEventListener("input",validarZipCode);
    if(eMoney != null && eMoney.checked){
        target.addEventListener("input", validarTargeta);
        pin.addEventListener("input", validarPin);
    }
    botonPopover.addEventListener("click",()=>{
        listaCarrito = [];
        crearHtml();
        window.location.href = "index.html";
    })
}
const validarFormulario = ()=>{
    if (email != null){
        if(listaCarrito.length == 0){
            boton.disabled = true;
        }else if(email.classList.contains("valido") && nombre.classList.contains("valido") && telefono.classList.contains("valido") && direccion.classList.contains("valido") && ciudad.classList.contains("valido") && pais.classList.contains("valido") && zipCode.classList.contains("valido")){
            if(eMoney.checked && target.classList.contains("valido") && pin.classList.contains("valido")){
                boton.disabled = false;
                
            }else if(cash.checked){
                boton.disabled = false;
                
            }else if(target.classList.contains("noValido") || pin.classList.contains("noValido")){
                boton.disabled = true;
            }
            
        }else if(email.classList.contains("noValido") || nombre.classList.contains("noValido") || telefono.classList.contains("noValido") || direccion.classList.contains("noValido") || ciudad.classList.contains("noValido") || pais.classList.contains("noValido") || zipCode.classList.contains("noValido")){
            boton.disabled = true;
        }else{
            boton.disabled = true;
        }
    }
    
}
if(email != null){
    añadirListeners();
    validarFormulario();
}


//Carrito---------------------------------------------------------------------------------------
const agregarAlCarrito = (e)=>{
    e.preventDefault();
    let precio = e.target.previousElementSibling.firstElementChild.textContent.replace(",","");
    let titulo = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    let posImagen = e.target.parentElement.previousElementSibling.firstElementChild.src;
    const regexp = /img/i;
    const indice = posImagen.search(regexp);
    let imagen = posImagen.substring(indice);
    producto(imagen,titulo,precio);
}

const producto = (imagen,titulo,precio)=>{
    const objeto = {
        imagen: imagen,
        titulo: titulo,
        precio: Number(precio),
        cantidad: 1
    }
    const respuesta = listaCarrito.some((e)=>e.titulo === objeto.titulo);
    if(respuesta){
        const newLista =  listaCarrito.map((e) => {
            if(e.titulo === objeto.titulo){
                e.cantidad += 1;
                e.precio = objeto.precio * e.cantidad;
                return e
            }else{
                return e
            }
        });
        listaCarrito = [...newLista];
    }else{
        listaCarrito.push(objeto);
    }
    
    crearHtml();
    
}

const crearHtml = ()=>{
    limpiarHtml()
    sincronizarLocalStorage()
    //-----actualizamos numero items en carrito y precio total
    let numItems = cabecera.firstElementChild.firstElementChild;
    numItems.textContent = listaCarrito.length;

    iconoCarrito.setAttribute("data-content",listaCarrito.length)

    let price = precioTotal.firstElementChild;
    let result= listaCarrito.reduce((acumulador, e)=>{return acumulador + e.precio},0);
    price.textContent = result;

    listaCarrito.forEach((e)=>{
        //Añadimos el HTML al despegable carrito
        const divProductos = document.createElement("div");
        divProductos.className = "listaCarrito";

        divProductos.innerHTML = `
        <div class="cabeceraCarrito"> 
            <figure class="figureCarrito"><img src="${e.imagen}"></figure>
            <article class="headerCabeceraCarrito">
            <h3>${e.titulo}</h3>
            <p>$ ${e.precio}</p>
            </article>
        </div>
        <div class="cantidadProducto">
            <p class="cantidad"><a href="#"class="icon-minus"></a>${e.cantidad}<a href="#" class="icon-plus"></a></p>
        </div>
        
        `
        seccion.append(divProductos);
    })
    
    if(seccionSummary != null){
        limpiarSumary();
        //Actualizamos precios totales
        let grandTotalTotal = totalOrder.firstElementChild.firstElementChild.firstElementChild;
    
        let total = precioTotalSummary.firstElementChild.firstElementChild.firstElementChild;
        let resultado= listaCarrito.reduce((acumulador, e)=>{return acumulador + e.precio},0);
        total.textContent = resultado;
        let impuesto = impuestos.firstElementChild.firstElementChild.firstElementChild;
        impuesto.textContent = (resultado * 0.20).toFixed(2);
        let ship = shiping.firstElementChild.firstElementChild.firstElementChild;
        let totalPagar = grandTotal.firstElementChild.firstElementChild.firstElementChild;
        totalPagar.textContent = (Number(total.textContent) + Number(impuesto.textContent) + Number(ship.textContent)).toFixed(2);
        grandTotalTotal.textContent = (Number(total.textContent) + Number(impuesto.textContent) + Number(ship.textContent)).toFixed(2);
        console.log(totalPagar.textContent)
        console.log(grandTotalTotal.textContent)

        if(listaCarrito.length >= 1){
            ship.textContent = 50;
        }else{
            ship.textContent = 0;
            impuesto.textContent = 0;
            totalPagar.textContent = 0;
        }

        listaCarrito.forEach((e)=>{
            //Añadimos el HTML al summary
            const divProductosSumary = document.createElement("div");
            divProductosSumary.className = "contenidoCarritoSummary";
            divProductosSumary.innerHTML=`
            <div class="cabeceraCarritoSummary"> 
                <figure class="figureCarritoSummary"><img src="${e.imagen}"></figure>
                <article class="headerCabeceraCarritoSummary">
                <h3>${e.titulo}</h3>
                <p>$ ${e.precio}</p>
                </article>
            </div>
            <div class="cantidadProductoSummary">
                <p class="cantidadSummary">x${e.cantidad}</p>
            </div>
            `
            seccionSummary.append(divProductosSumary);
            contenidoOrder.append(divProductosSumary);
        })
    } 
    
    
}
const limpiarHtml = ()=>{
    while(seccion.firstChild){
        seccion.removeChild(seccion.firstChild);
    }
}

const limpiarSumary = ()=>{
    while(seccionSummary.firstChild && contenidoOrder.firstChild){
        seccionSummary.removeChild(seccionSummary.firstChild);
        contenidoOrder.removeChild(contenidoOrder.firstChild);

    }
}
function sincronizarLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(listaCarrito));
}

eliminarTodo.addEventListener("click",()=>{
    listaCarrito= [];
    let numItems = cabecera.firstElementChild.firstElementChild;
    numItems.textContent = listaCarrito.length;
    let price = precioTotal.firstElementChild;
    price.textContent = 0;
    let totalPagar = grandTotal.firstElementChild.firstElementChild.firstElementChild;
    totalPagar.textContent = 0;
    crearHtml();
})
if(compras != null){
    compras.addEventListener("click", agregarAlCarrito);
}

document.addEventListener("DOMContentLoaded", () => {
    const cursosStorage = localStorage.getItem('carrito');
    if(cursosStorage !== null){
        listaCarrito = JSON.parse(cursosStorage);
        crearHtml();
    }
})
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("icon-plus")){
        let item = e.target.parentElement.parentElement.previousElementSibling.lastElementChild.firstElementChild.textContent;
        const newList = listaCarrito.map((e)=>{
            if(e.titulo == item){
                let saberPrecioUnidad = e.precio / e.cantidad;
                e.cantidad ++;
                e.precio = saberPrecioUnidad * e.cantidad;
                return e;
            }else{
                return e;
            }
        })
        listaCarrito = [...newList];
        crearHtml();
    }else if(e.target.classList.contains("icon-minus")){
        let item = e.target.parentElement.parentElement.previousElementSibling.lastElementChild.firstElementChild.textContent;
        const newList = listaCarrito.map((e)=>{
            if(e.titulo == item && e.cantidad == 1){
                e.cantidad --;
                e.precio = 0;
                return e;
            }else if(e.titulo == item){
                let saberPrecioUnidad = e.precio / e.cantidad;
                e.cantidad --;
                e.precio = saberPrecioUnidad * e.cantidad;
                return e;
            }else{
                return e;
            }
        })
        const filtro = newList.filter(e => e.cantidad > 0);
        listaCarrito = [...filtro];
        crearHtml();
    }
})