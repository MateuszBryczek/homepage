console.log("Witaj w ksoli developerze");

let changeBackground = document.querySelector(".main__button");
let color = document.querySelector(".color");
let body = document.querySelector(".body");

changeBackground.addEventListener("click", () => {
   body.classList.toggle("darkBody");
   if (body.classList.contains("darkBody")) {
      color.innerText = "Ustaw ciemne tło"
   } else {
      color.innerText = "Ustaw jasne tło"
   }
})