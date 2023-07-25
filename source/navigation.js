function ativar_tempo() {
    let input_troca = document.getElementById("input_option");
    /*------ declarando botão que ativa essa função */
    let pace_calculator = document.getElementById("pace_calculator");
    /*decalarando uma div que transiciona*/
    let tempo_calculator = document.getElementById("tempo_calculator");
    /*-----------------------------*/
    if(pace_calculator.style.display=='block'){
        tempo_calculator.style.display='block';
        pace_calculator.style.display='none';   
        }

    
}
function ativar_pace()  {
    /*input que ativa função*/
    let input_troca = document.getElementById("input_option");
    /*divs sendo declaradas*/
    let pace_calculator = document.getElementById("pace_calculator");
    /*-------------------------------------------*/
    let tempo_calculator = document.getElementById("tempo_calculator");
    /*-------------------*/
    if(pace_calculator.style.display=='none'){
        tempo_calculator.style.display='none';
        pace_calculator.style.display='block';   
        }
}