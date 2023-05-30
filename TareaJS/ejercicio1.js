function mayorEdad (){
    const edad= parseFloat(prompt("Cuantos años tienes?"));
    if(edad >=18){
        return document.write("Es mayor de edad ");
        
    } else if( edad <= 18 ){
        return document.write("Eres menor de edad")

    }

  
}

mayorEdad()