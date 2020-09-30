const btn = document.getElementById("jsBtn"),
  modal = document.getElementById("jsModal");

function modalHandler() {
  modal.classList.toggle("display");
}

btn.addEventListener("click", modalHandler);
