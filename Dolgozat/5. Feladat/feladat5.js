document.addEventListener("DOMContentLoaded", function(){
    const teljesnev = document.querySelector("#teljesnev")
    const telefon = document.querySelector("#telefon")
    const irszam = document.querySelector("#irszam")
    const varos = document.querySelector("#varos")
    const utca = document.querySelector("#utca")
    const hazszam = document.querySelector("#hazszam")
    const alap = document.querySelector("#alap")
    const feltet = document.querySelector("#feltet")
    const megjegyzes = document.querySelector("#megjegyzes")
    const felvetel = document.querySelector("#felvetel")

    felvetel.addEventListener("click", function(){
        const kivalasztottak =  feltet.selectedOptions
        const kivalasztottFeltetek = Array.from(kivalasztottak).map(function(option){
            return option.value
        })   
        const adatok = {
            megrendelo:{
                teljesnev:teljesnev.value,
                telefon:telefon.value,
                irszam:irszam.value,
                varos:varos.value,
                utca:utca.value,
                hazszam:hazszam.value
            },
            pizza:{
                alap:alap.value,
                feltet:kivalasztottFeltetek
            },
            egyeb:{
                megjegyzes:megjegyzes.value
            }
        }
        console.log(adatok);
    })
})