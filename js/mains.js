function suma (){

    let A =0;
    let B =0;
    let S =0;

    alert("por favor ingrese el primer valor");
    A = parseInt(prompt(""));

    alert("por favor ingrese el segundo valor");
    B = parseInt(prompt(""));
    
    S = A + B;

    alert("el resultado de la suma es: " + S);

}
function opBasicas (){
    let A =0;
    let B =0;
    let S =0;
    let R =0;
    let D =0;
    let M =0;

  
    A = parseInt(prompt("por favor ingrese el primer valor"));

    B = parseInt(prompt("por favor ingrese el segundo valor"));
    
    S = A + B;
    R = A - B;
    D = A / B;
    M = A + B;

    alert("el resultado de la suma es: " + S + " \nEl resultado de la resta es: " + R + " \nEl resultado de la divison es: " + D + " \nEl resultado de la multiplicacion es: " + M);

}
function Mayorde(){
    let A =0;
    let B =0;
    A=parseInt(prompt("ingrese el primer valor"));
    B=parseInt(prompt("ingrese el segundo valor"));
    if(A == B){
        alert("Los numeros ingresados son iguales");
    }
    else if (A>B){
        alert("El valor: " + A + " es mayor a: " +B);
    }
    else if(B>A){
        alert("El valor: " + B + " es mayor a: " +A)
    }


}
function Mayorde3() {
    let A =0;
    let B =0;
    let C =0;
    A=parseInt(prompt("Ingrese el primer valor"));
    B=parseInt(prompt("ingrese el segundo valor"));
    C=parseInt(prompt("ingrese el tercer numero"));
    if(A==B && A==C){
    alert("los tres valores son iguales");
    }
    else if(A>B && A>C){
        alert("El valor mayor de los tres numeros digitados es: "+A);
    
    }
    else if(B>A && B>C){
        alert("El valor mayor de los tres numeros digitados es: "+ B);
    }
    else{
        alert("El valor mayor de los tres numero digitados es: " + C);
    }

}
function paroimpar(){
    let A=0;
    A=parseInt(prompt("Igrese el numero para saber si es par o impar"));
    if(A % 2 == 0){
        alert("El numeor ingresado es par");
    }
    else{
        alert("El numero ingresado es impar");
    }
}
function cuadrado(){
    let A= 0;
    let C= 0;
    A=parseInt(prompt("ingrese el un valor para saber su cuadrado"));
    C = A * A;
    alert("El cuadrado del valor digitado es: "+ C);

}
function areadetriangulo(){
    let B=0;
    let H=0;
    let A=0;
    B=parseInt(prompt("Ingrese la base del triangulo"));
    H=parseInt(prompt("Ingrese la altura del triangulo"));
    A=(B*H)/2;
    alert("El area del triangulo es: " + A);

}
function metrosacentimetrosypulgadas(){
    let M=0;
    let C=0;
    let P=0;
    M=parseInt(prompt("Ingrese los metros que quiere convertir a centimetros y pulgadas"));
    C= M *100;
    P= M *39.3701;
    alert("Los metros que ingreso equivales a: " + C + " centimetros" + (" y equivale a: " + P + " pulgadas"));

}
function añodenacimiento(){
    let A=2023;
    let B =0;
    let C=0;
    B=parseInt(prompt("Ingrese su edad"));
    C=A-B;
    alert("Usted nacio en el año " + C);
}
function cdt(){
    let A= 0;//es dinero a invertir
    let B= 0;//años a invertit
    let C= 0.204;//porcentaje ya convertido de mensual a anual
    let D= 0;//multiplicacion entre el dinero invertido y el porcentual
    let E= 0;//multiplicacion del porcentual ya multiplicado y los años al que los quiere invertir
    let F= 0;//suma entre el dinero incial inveertido y el dinero por el porcentual
    A=parseInt(prompt("Ingrese el monto de dinero que va ainvertir"));
    B=parseInt(prompt("Ingrese por la cantidad de años a dejar el dinero en el banco"));
    D= A*C;
    E= D*B;
    F= E+A;
    alert("Usted quiere invertir: "+ A +"  \nCon un interes mensual al 1.7%, que equivale a 20.4% anual\nAl año tiene una ganancia de: "+ D + "\nEn :" + B + " años tendria una ganacia de: "+ E+ "\nTotal de la ganacia es de :"+ F );
}
function notas(){
    let n1= 0;
    let n2= 0;
    let n3= 0;
    let n4= 0;
    let n5= 0;
    let n6= 0;
    let n7= 0;
    let nTotal =0;
    n1=parseInt(prompt("ingrese la primera nota"));
    n2=parseInt(prompt("ingrese la segunda nota"));
    n3=parseInt(prompt("ingrese la tercer nota"));
    n4=parseInt(prompt("ingrese la cuarta nota"));
    n5=parseInt(prompt("ingrese la quinta nota"));
    n6=parseInt(prompt("ingrese la sexta nota"));
    n7=parseInt(prompt("ingrese la septima nota"));
    nTotal =(n1+n2+n3+n4+n5+n6+n7)/7;
    if (nTotal <6.1 && nTotal>0){
        alert("Usted reprobo con un promedio de: "+nTotal);
 
    }
    else{
        alert("Usted aprobo con un promedio de: " + nTotal)
    }

}
function kilos_de_manzana(){
    let M=0; //variable de la cantidad de kilos
    let descuento=0;//variable del procentual del descuento
    let total_a_pagar =0;//variable que calcula el total a pagar
    const precio_por_kilo=4500;//contante del precio del kilo
    let operacion1=0;
    let operacion2=0;
    M=parseInt(prompt("Ingrese la cantidad de kilos de manzanas a comprar"));//ingrese el dato de la variable M
    if (M<=2){
        total_a_pagar=M*precio_por_kilo;
        alert("Usted compro una cantidad de :"+M+"Kilos sin descuento\nValor por kilo: 4.500\nValor sin descuento: "+operacion1+"\nValor total: " + total_a_pagar)
    }
    if (M>=3 && M<=5){
        descuento=0.1
        operacion1=M*precio_por_kilo;
        operacion2=operacion1*descuento
        total_a_pagar=operacion1-operacion2
        alert("Usted compro una cantidad de :"+M+"Kilos con un descuento del 10%\nValor por kilo: 4.500\nValor sin descuento: "+operacion1+"\nValor total: " + total_a_pagar)
    }
    if (M>=6 && M<=10){
        descuento=0.15
        operacion1=M*precio_por_kilo;
        operacion2=operacion1*descuento
        total_a_pagar=operacion1-operacion2
        alert("Usted compro una cantidad de :"+M+"Kilos con un descuento del 15%\nValor por kilo: 4.500\nValor sin descuento: "+operacion1+"\nValor total: " + total_a_pagar)
    }
    if (M>=11){
        descuento=0.2
        operacion1=M*precio_por_kilo;
        operacion2=operacion1*descuento
        total_a_pagar=operacion1-operacion2
        alert("Usted compro una cantidad de :"+M+"Kilos con un descuento del 20%\nValor por kilo: 4.500\nValor sin descuento: "+operacion1+"\nValor total: " + total_a_pagar)
    }
}   
function horas_de_trabajo(){
    let horas=0;
    const pago1=10000;//pago de las horas menos o iguales a 40
    const pago2=20000;//pago de las horas que son mayores a 40
    let operacion1=0;//operacion de las horas trabajadas por el saldo hasta las 40 horas
    let operacion2=0;//operacion para sacar la cantidad de horas extras trabajadas
    let operacion3=0;//operacion para sacar el sueldo de las horas extra
    let operacion4=0;//operacion para sumar los valores de las horas extras y las 40 horas semanales
    horas=parseInt(prompt("Ingrese las horas que trabajo en la semana"));
    if(horas <=40){
        operacion1=horas*pago1;
        alert("Usted esta semana trabajo: "+horas+ "\nUsted tiene un pago de: "+operacion1);

    }
    if (horas>40){
        operacion2=horas-40;
        operacion1=40*pago1;
        operacion3=operacion2*pago2;
        operacion4=operacion1+operacion3
        alert("Usted esta semana trabajo: "+horas+"\nHoras extras que hizo: "+operacion2+"\nCon un total de pago semanal de: "+operacion4+"\nPago de las horas extras: "+operacion3)

    }
}