const ingresos = [

];

const gresos = [

]

let totalIngresos = () =>{
    let totalIngresos = 0;
    for(let ingreso of ingresos){
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}

let totalEgresos = () =>{
    let totalEgresos = 0;
    for(let egreso of egresos){
        totalEgresos += egreso.valor;
    }
    return totalEgresos;
}

let cargarCabecero = ()=>{
    let presupuesto = totalIngresos()-totalEgresos();
    let porcentajeEgreso= totalEgresos()/totalIngresos();
}

const formatoMoneda = (valor) =>{
    return valor.toLocaleString("es-MX", {style: "currency", currency: "MXN", minimumFractionDigits: 2})
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString("es-MX", {style: "percent", minimumFractionDigits: 2})
}

const cargarIngresos = () =>{
    let ingresosHtml ="";
    for(ingreso of ingresos){
        ingresosHtml += crearIngresos(ingreso);
    }

    document.getElementById("lista-ingresos")
}



