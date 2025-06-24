// Click on name
// Alert user that name was clicked on

function alertNameClicked() {
    const name = document.getElementById("name")
    name.addEventListener("click", alert("Name/Description was clicked on"))
}
