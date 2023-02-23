//Condicionales

/*let helado = 'chocolate';
if (helado === 'chocolate') {
  alert('Sí es un helado de chocolate');
} else {
  alert('No es un helado de chocolate');
}*/

/*var edad = 0;
if (edad) {
   alert('valor diferente de cero');
} else{
   alert('valor igual a cero');
}*/

/*var nombre = 'Juan'; 
if (nombre) {
   alert(nombre + " está autorizado");
} else{
   alert('Ningún usuario');
}*/

//Condicionales anidados
/*function cualifica_nota(){
    let nota=4.6;
    if (nota<3.0)
        alert('Nota baja');
    else if(nota<4.0)
        alert('Nota media');
    else
        alert('Nota Alta');
}
cualifica_nota();*/

//Selección múltiple Switch
var estrato,tb;
estrato=parseInt(prompt("Estrato: ")) ;
alert(estrato);
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
}
alert(tb);

//Ciclo for - 1
/*var n=0;
for (var i = 0; i < 9; i++) {
   n += i;
}
alert (n);*/

//Ciclo for - 2
/*let cadena = 'UNAB';
for (let valor of cadena) {
  alert(valor);
}*/

//Ciclo do while
/*let i = 0; 
 do { 
    i += 1; 
    alert(i); 
 } 
 while (i < 5);*/



