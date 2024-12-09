//Dichiarazione variabili selezionando gli elementi (lampadina accesa e spenta, bottone, testo bottone) dell'index HTML

const element1 = document.getElementById('dark')
const element2 = document.getElementById('light')
const btnChangeStatusElm = document.getElementById('btnChangeStatus')
const btnText = document.querySelector('p')



//invocazione della funzione al click del bottone 

btnChangeStatusElm.addEventListener("click", function(){
 
    //cambi di stato degli elementi "lampadina" tramite il toggle per switchare le classi
    element1.classList.toggle("statusOff")
    element1.classList.toggle("statusOn")
    element2.classList.toggle("statusOn")
    element2.classList.toggle("statusOff")

    //condizione per il cambio del testo nel bottone
    //SE la lampadina grigia è visibile e quella gialla no ALLORA il testo del bottone sarà "accendi"
    if(element1.classList.contains("statusOn") && element2.classList.contains("statusOff")){
        btnText.innerHTML = "Accendi"

        //ALTRIMENTI SE la lampadina grigia non è visibile e quella gialla è visibile il testo del bottone sarà "spegni"
    } else if(element1.classList.contains("statusOff") && element2.classList.contains("statusOn")) {
        btnText.innerHTML = "Spegni"
    }
})