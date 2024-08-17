const displayContent = document.querySelector(".display-content");
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const divNone = document.querySelector("#display-none");
let secretMode = false;

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      element.getAttribute("class") === "btn-operator color" &&
      element.getAttribute("id") === "clear"
    ) {
      displayContent.innerHTML = "";
    } else if (
      element.getAttribute("class") === "btn-operator color" &&
      element.getAttribute("id") === "divide"
    ) {
      displayContent.innerHTML = displayContent.innerHTML + "/";
    } else if (
      element.getAttribute("class") === "btn-operator color" &&
      element.getAttribute("id") === "backspace"
    ) {
      displayContent.innerHTML = displayContent.innerHTML.slice(0, -1);
    } else if (
      element.getAttribute("class") === "btn-operator color" &&
      element.getAttribute("id") === "equals"
    ) {
      if (displayContent.innerHTML === "" && secretMode === false) {
        displayContent.innerHTML = "ERROR";
        setTimeout(() => {
          displayContent.innerHTML = "";
        }, 1000);
      } else if (displayContent.innerHTML === "" && secretMode === true) {
        displayContent.innerHTML = "SHR....ERORR";
        setTimeout(() => {
          displayContent.innerHTML = "";
        }, 1000);
      } else {
        displayContent.innerHTML = eval(displayContent.innerHTML);
      }
    } else if (element.getAttribute("class") === "btn-operator color") {
      displayContent.innerHTML =
        displayContent.innerHTML + `${element.getAttribute("id")}`;
    } else if (element.getAttribute("class") === "btn-number") {
      displayContent.innerHTML =
        displayContent.innerHTML + element.getAttribute("id");
    }
    if (displayContent.innerHTML === "2137") {
      secretMode = true;
      body.classList.add("second-mode");
      console.log(divNone.getAttribute("id"));
      divNone.removeAttribute("id");
    }
  });
});
