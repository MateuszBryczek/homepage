# homepage

Website prepared for the [YouCode](https://youcode.pl/frontend-developer-od-podstaw/) course.
![youcode-logo](https://youcode.pl/wp-content/uploads/2022/02/youcode-logo-ukraine.png)

Website have default polish language.

![](images/homepage-gif.gif)
## the script responsible for changing the background:

```javascript
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
```

## Tools used:
- HTML
- CSS
- Javascript
- Normalize.css
- Open Graph Protocol