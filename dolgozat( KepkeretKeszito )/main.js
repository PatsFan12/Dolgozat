import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  const url = document.getElementById("url");
  const szelesseg = document.getElementById("szelesseg");
  const keretVastagsag = document.getElementById("keretVastagsag");
  const szin = document.getElementById("szin");
  const kep = document.getElementById("kep");
  const button = document.getElementById("button");

  function frissites(){
    if (url.value) {
      kep.src = url.value;
      kep.style.width = `${parseInt(szelesseg.value)}px`;
      kep.style.borderWidth = `${parseInt(keretVastagsag.value)}px`;
      kep.style.borderColor = szin.value;
      kep.style.borderStyle = 'solid';
    }
  }

  url.addEventListener("input", () => {
    frissites();
  })

  szelesseg.addEventListener("input", () => {
    frissites();
  })
  
  keretVastagsag.addEventListener("input", () => {
    frissites();
  })

  szin.addEventListener("input", () => {
    frissites();
  })

  button.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode")
    }
    else{
      document.body.classList.add("dark-mode")
    }
  })

})