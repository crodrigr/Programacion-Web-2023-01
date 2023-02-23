/*var base,altura,area,perimetro;
base=parseInt(prompt("Base: "));
altura=parseInt(prompt("Altura: "))
area=base*altura;
perimetro=2*base+2*altura;
alert("Area: "+area);*/

/*var numero;
numero=prompt("Número entero: ");
if(numero%2===0){
    alert("El número "+numero+" es Par");
}
else{
    alert("El número "+numero+" es IMPAR");
}*/

var salario,retencion;
salario=parseFloat(prompt("Salario: "))
if (salario<=1000000){
    retencion=0;
}
else if (salario<=5000000){
    retencion=salario*0.10;
}
else{
    retencion=salario*0.10;
}
alert("Retención: "+retencion);


    


