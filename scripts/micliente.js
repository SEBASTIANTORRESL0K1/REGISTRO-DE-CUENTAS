let cliente;
document.addEventListener("DOMContentLoaded",() => {
    cliente= JSON.parse(localStorage.getItem('cliente'));
    let nombreCliente= document.getElementById('nombreCliente');
    nombreCliente.innerHTML=cliente.nombre;
    let arrayCuentas= document.getElementById('cuentas');
})
let agregarCuenta= document.getElementById('btnAgregarCuenta');
agregarCuenta.onclick=() =>{
    let nombreCuenta= document.getElementById('nombreCuenta').value;
    cliente.cuentas.push(nombreCuenta);
    let divCuentas=document.getElementById('cuentas');
    cuentas.innerHTML+='<div>'+nombreCuenta+'</div><button>Abrir cuenta</button>';
    console.log(cliente.cuentas);
}

