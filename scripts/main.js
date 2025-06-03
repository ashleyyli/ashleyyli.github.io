let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.addEventListener("click", () => {
  const myDisplay = localStorage.getItem("display");
    if (myDisplay === "light") {
        localStorage.setItem("display", "dark");
    } else {
        localStorage.setItem("display", "light");
    }
});