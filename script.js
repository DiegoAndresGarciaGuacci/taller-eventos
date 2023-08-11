function handleButtonClick(event) {
    event.stopPropagation();
    showAlert();
  }

var divElement = document.querySelector("div");

divElement.addEventListener("click", function() {
  alert("Hola! Soy el div");
});

