//Ciclos y funciones
//Dada la información sobre N docentes hora cátedra
// Nombre, categoria(1,2), horas laboradas

/*function calcular_Honorarios(categoria,horas){
    var vp;
    if(categoria===1){
        vp=horas*25000;
    }
    else{
        vp=horas*35000;
    }
    return vp;
}
var n,nombre,categoria,horas, vp, vtp=0;
n=parseInt(prompt("Docentes: "));
for(var i=1;i<=n;i++){
    nombre=prompt("Nombre: ");
    categoria=parseInt(prompt("Catgoria(1,2): "));
    horas=parseInt(prompt("Horas: "));
    vp=calcular_Honorarios(categoria,horas);
    vtp=vtp+vp;
    alert("Docente: "+nombre)
    alert("Honorarios: "+vp);
}
alert("Total: "+vtp);*/
/*var numeros=['1,2,3,4,5,6,7,8,9,10'];
var cp=0,ci=0;
for(var i=0;i<numeros.length;i++){
    if(numeros[i]%2==0){
        alert("Es par "+numeros[i]);
        cp++;
    }
    else{
        alert("Es impar "+numeros[i]); 
        ci++;  
    }
}
alert("Pares: "+cp);
alert("ImPares: "+ci);*/


var numeros=['a','e','f','g','i','l'];
var cv=0;
for(var i=0;i<numeros.length;i++){
    if((numeros[i]==='a') ||(numeros[i]==='e') || (numeros[i]==='i') ||(numeros[i]==='o') || (numeros[i]==='u') ) {
        alert("Es vocal "+numeros[i]);
        cv++;
    }
    
}
alert("Voacles: "+cv);



