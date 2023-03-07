const btn = document.querySelector("#btn")
const sidebar = document.querySelector(".sidebar")

btn.onClick = function () {
  sidebar.classList.toggle("active")
}
