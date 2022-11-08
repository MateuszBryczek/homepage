{
const welcome = () => {
   console.log("Witaj w ksoli developerze");
};

const toggleBackground = () => {
   const body = document.querySelector(".body");
   const color = document.querySelector(".color");

   body.classList.toggle("darkBody");
   color.innerText = body.classList.contains("darkBody") ? "Ustaw jasne tło" : "Ustaw ciemne tło";
};

const init = () => {
   const button = document.querySelector(".js-button");
   button.addEventListener("click", toggleBackground);

   welcome();
};
   init();
};
