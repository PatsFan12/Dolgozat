document.addEventListener("DOMContentLoaded",function(){
    const aoldal = document.querySelector("#aOldal")
    const boldal = document.querySelector("#bOldal")
    const szamitas = document.querySelector("#szamitasBtn")
    const kiir = document.querySelector("#eredmeny")

    szamitas.addEventListener("click", function(){
        const a = parseFloat(aOldal.value);
        const b = parseFloat(bOldal.value);

        kiir.innerHTML = `Terulet: ${a*b} cm²<br>Kerulet: ${(a+b)*2} cm`
    })

})