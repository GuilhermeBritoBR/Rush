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
function tempo_calculator() {
    let distancia = document.getElementById("distance").value;
    /*-----------------------*/
    let minuto = document.getElementById("mins").value;
    /*-----------------------*/
    let segundo_sem_conversao = (document.getElementById("seconds").value);
    /*-------------------------*/
    /*(50s/60)x5 = 0.83333x5 = 4.16666 */
    let segundo_pad = parseFloat(((segundo_sem_conversao)/60).toFixed(2));
    let segundo = parseFloat(((segundo_pad)*distancia).toFixed(1));
    // let segundo_bruto;
    
    
    let tempo_bruto = ((minuto)*distancia);
    /*--------------------------*/
    let tempo = tempo_bruto+segundo;
    /*--------------------*//*-----------*/
    // if(segundo_pad >= 0.6){
    //     /*------------------------------*/
    //     /*((4.1666- 4)x0.6)=0.1+4*/
    //   segundo_bruto = (((segundo-segundo.toFixed(2))*0.60)+segundo.toFixed(2));
    //     /*------------------------*/
    // }else{
    //     segundo_bruto = segundo;

    // }
    /*-------------------------*/
    let print_result_tempo = document.getElementById("print_result_tempo");
    /*printando*/
    print_result_tempo.innerHTML = tempo.toFixed(2);
    
    /*-----------------------*/

}