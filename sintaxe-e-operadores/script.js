function comparaNumeros(num1, num2){
    var iguais, maior10, menor20;
    iguais = (num1 === num2 ? true : false); 
    var soma = num1 + num2;
    maior10 = (soma>10 ? true : false);
    menor20 = (soma<20 ? true : false);
    var sIguais, sMaior10, sMenor20; 
    sIguais = (iguais == false ? " não são" : " são");
    sMaior10 = (maior10 == true? "maior" : "menor");
    sMenor20 = (menor20 == true ? "menor" : "maior"); 

    console.log("Os números " + num1 + " e " 
    + num2 + sIguais + " iguais. Sua soma é: " + soma +
    ", que é " + sMaior10 + " que 10 e " +sMenor20 + " que 20. ");
}