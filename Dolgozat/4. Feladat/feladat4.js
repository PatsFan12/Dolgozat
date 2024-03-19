document.addEventListener("DOMContentLoaded", function(){ 
    const szam = document.querySelector("#szam")
    const kiir = document.querySelector("#kiir")
    const lekerdezes = document.querySelector("#lekerdezes")

    const napok = ["Hetfo", "Kedd", "Szerda", "Csutortok", "Pentek",  "Szombat", "Vasarnap"]

    lekerdezes.addEventListener("click", function(){
        const szam1 = parseInt(szam.value)
        if (szam1>=1 && szam1<=7) {
            kiir.textContent = napok[szam1-1]
        }
        else{
            kiir.textContent = "Nem megfelelő számot adott meg"
        }
    })
})