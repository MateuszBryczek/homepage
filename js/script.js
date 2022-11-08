{
const welcome = () => {
   console.log("Witaj w ksoli developerze");
};

const togglrBackground = () => {
   const body = document.querySelector(".body");
   const color = document.querySelector(".color");

   body.classList.toggle("darkBody");
   color.innerText = body.classList.contains(darkBody) ? "jasne tło" : "ciemne tło";
};

const init = () => {
   const button = document.querySelector(".js-button");
   button.addEventListener("click", togglrBackground);

welcome();
};
   init()
};
