document.addEventListener("DOMContentLoaded", function(){
    const szam = document.querySelector('#szamBevitel');
    const hozzaad = document.querySelector('#hozzaad');
    const kiir = document.querySelector('#kiir');
    const pKiir = document.querySelector('#kiiratas');

    const szamokTomb = [];

    hozzaad.addEventListener('click', function(){
        szamokTomb.push(szam.value);
        szam.value = "";
    })

    kiir.addEventListener('click', function(){
        let tartalom = ""
        for (const szam of szamokTomb.reverse()) {
            tartalom += szam + ", ";
        }
        tartalom = tartalom.slice(0,-2);
        pKiir.textContent = tartalom;
    })
})