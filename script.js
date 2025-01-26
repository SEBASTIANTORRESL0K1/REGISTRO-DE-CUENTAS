
let clientes= [];

class Cliente{
    constructor(primerNombre, segundoNombre, primerApellido, segundoApellido, numTelefono, colonia, calle, numero, referencias){
        this.primerNombre=primerNombre;
        this.segundoNombre=segundoNombre;
        this.primerApellido=primerApellido;
        this.segundoApellido=segundoApellido;
        this.numTelefono=numTelefono;
        this.colonia=colonia;
        this.calle=calle;
        this.numero=numero;
        this.referencias=referencias;
        this.cuentas=[];
    }
    agregarCuenta(cuenta){
        this.cuentas.push(cuenta);
    }
}
class Cuenta{
    constructor(){
        this.movimientos=[];
    }
    agregarMovimiento(movimiento){
        this.movimientos.push(movimiento);
    }
    mostrarMovimientos(){
        for(let i=0;i<this.movimientos.length;i++){
            console.log(`Tipo: ${this.movimientos[i].tipo}, Fecha: ${this.movimientos[i].fecha}, Monto: ${this.movimientos[i].monto}`);
        }
    }
    mostrarDeuda(){
        let total=0;
        for(let i=0;i<this.movimientos.length;i++){
            if(this.movimientos[i].tipo==false){
                total+=this.movimientos[i].monto;
            } else{
                total-=this.movimientos[i].monto;
            }
            
        }
       return total;
    }
}
class Movimiento{
    constructor(tipo, monto){
        this.tipo=tipo;
        this.fecha=new Date();
        this.monto=monto
    }
    /*true sera para pagos 
        false sera para nueva ropa
    */
    }
let sebas= new Cliente("sebas","","Torres,","","312","La Albarrada","Colon","445","");
let cuenta1=new Cuenta();
clientes.push(sebas);
sebas.agregarCuenta(cuenta1);
cuenta1.agregarMovimiento(new Movimiento(false,1000));
cuenta1.agregarMovimiento(new Movimiento(false,500));
cuenta1.agregarMovimiento(new Movimiento(true,1500));
console.log(clientes[0].cuentas[0].mostrarDeuda());
