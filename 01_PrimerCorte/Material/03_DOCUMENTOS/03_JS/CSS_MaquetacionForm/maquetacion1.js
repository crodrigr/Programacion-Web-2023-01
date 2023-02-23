function facturacion(){
    var tb=0,vimpulsos=0,vpagar=0;
    var id=document.getElementById("id").value;
    var nombre=document.getElementById('nombre').value;
    var estrato=parseInt(document.getElementById("estrato").value); 
    var impulsos=parseInt(document.getElementById("impulsos").value);
    
    switch (estrato) {
        case 1:
            tb=10000;
            break;
        case 2:
            tb=15000;
            break;  
        case 3:
            tb=20000;
            break;
        case 4:
            tb=25000;
            break;
        case 5:
            tb=30000;
            break;  
    }
    vimpulsos=impulsos*100;
    vpagar=tb+vimpulsos;
    alert("Nombre abonado: "+nombre);
    alert("Valor servicio: "+vpagar);

}