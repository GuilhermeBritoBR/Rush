function calculator()    {
    let distancia = document.getElementById("distancia").value;
    let hora = document.getElementById("hora").value;
    let minuto = document.getElementById("minuto").value;
    let segundo = document.getElementById("segundo").value;
    /*Declarando todos os id para receber os dados primeiro*/

    /*formando o tempo*/
    let pace_bruto = ((hora*60)+minuto+(segundo/60))/distancia/10;
    /*acima de 10 minutos de pace bruto, o algoritimo realiza a divisão para resultar no pace fiél*/
    if(pace_bruto >= 10){
        pace_bruto = pace_bruto/10;
    }
    /*------------*/
    let pace_simples = Math.floor(pace_bruto);
    /*simplificando o tempo para progredir conta e retirar as decimais*/
    let resto = (pace_bruto - pace_simples)*0.6;
    /*calculando se o valor decimal for maior que 60, já que não existe 61 segundos*/
    let pace = pace_simples+resto;
    /*o pace é essa soma!*/ 
    /*declarando o P que vai printar o resultado*/
    let print_result = document.getElementById("print_result");
    /*printando*/
    /*-----------------------*/
    print_result.innerHTML= pace.toFixed(2);
}