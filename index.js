const awal = document.getElementById("halo");
awal.innerHTML = "INI FAJAR";

const akhir = document.getElementById("end");
akhir.innerText = "";
const newElement = document.createElement("p");
newElement.innerHTML = "INI AKHIR YANG BARU";
akhir.appendChild(newElement);

const pvid = document.querySelector(".vid");
pvid.onclick = ganti();
function ganti() {
  pvid.style.backgroundcolor = "red";
}

const button = document.querySelector(".klik");
button.onclick = alert();
(function alert() {
  alert("ON DELEVERY!!");
});
