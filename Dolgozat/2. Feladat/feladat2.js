document.addEventListener("DOMContentLoaded", function(){
    const vezeteknev = document.querySelector("#vezeteknev")
    const keresztnev = document.querySelector("#keresztnev")
    const eletkor = document.querySelector("#eletkor")
    const bekezdes = document.querySelector("#bekezdes")

    function Modositas(){
        bekezdes.textContent = `${vezeteknev.value} ${keresztnev.value} (${eletkor.value} év)`;
    }

    vezeteknev.addEventListener("change", Modositas)
    keresztnev.addEventListener("change", Modositas)
    eletkor.addEventListener("change", Modositas)

});