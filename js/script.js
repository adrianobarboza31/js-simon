// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
// tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
bo=document.getElementById("testo")
let testo= document.getElementById("bo")
const bottonePrincipale=document.getElementById("btn")
let nrandom=5
let numeri=[]
let array=[]
let array2=[]
let timers=30
const bottone=document.getElementById("num")
const secondi= document.getElementById("timer")
const timer= setInterval(myfunction, 1000);
console.log(numeri)
function myfunction(){ 
    while(numeri.length<nrandom){
        let random= Math.floor(Math.random() * 100) + 1;
        if (!numeri.includes(random)){
            numeri.push(random)
        }
    }
    secondi.innerHTML=timers
    timers--
    if(timers<0){
        clearTimeout(timer)
        bo.innerHTML=""
        bottone.addEventListener("click",inseriti)
    function inseriti(){
        const inserito=parseInt(document.getElementById("adri").value)
            console.log(inserito)
            if(!array2.includes(inserito)){
                array2.push(inserito)
                document.getElementById("adri").value=""
                
                if(array2.length<=nrandom){
                    if (numeri.includes(inserito)){
                        array.push(inserito)
                    }
                   }else{
                    bottone.removeEventListener("click",inseriti)
                   }
                   console.log(array2)
                   
                   if(array2.length==5){
                    testo.innerHTML="hai trovato"+" "+ `<strong>${array.length}</strong>`+" "+"numero/i"+" "+"che è/sono:["+" "+`<strong>${array}</strong>`+"]"
                   }
            }
            
        
    }
    }else{
        bo.innerHTML=numeri
    }
}


   
