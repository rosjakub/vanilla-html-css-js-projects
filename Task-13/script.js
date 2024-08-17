const displayContent = document.querySelector(".display-content");
const buttons = document.querySelectorAll("button");

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      element.getAttribute("class") === "btn-operator" &&
      element.getAttribute("id") === "clear"
    ) {
      displayContent.innerHTML = " ";
    } else if (
      element.getAttribute("class") === "btn-operator" &&
      element.getAttribute("id") === "divide"
    ) {
      displayContent.innerHTML = displayContent.innerHTML + " / ";
    } else if (
      element.getAttribute("class") === "btn-operator" &&
      element.getAttribute("id") === "*"
    ) {
      displayContent.innerHTML = displayContent.innerHTML + " * ";
    } else if (
      element.getAttribute("class") === "btn-operator" &&
      element.getAttribute("id") === "backspace"
    ) {
      displayContent.innerHTML = displayContent.innerHTML.slice(0, -1);
    } else if (element.getAttribute("class") === "btn-number") {
      displayContent.innerHTML =
        displayContent.innerHTML + element.getAttribute("id");
    }
  });
});
