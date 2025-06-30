function alertNameClicked() {
    alert("Welcome to Shehu Muhammad's Life Resume!");
    window.open("https://github.com/Shehu-Muhammad")
}

function toggleSection(id) {
    const el = document.getElementById(id);
    const button = document.querySelector(`button[onclick="toggleSection('${id}')"]`);

    if (el.style.display === "none" || el.style.display === undefined) {
        el.style.display = "block";
        button.textContent = "Hide";
    } else {
        el.style.display = "none";
        button.textContent = "Show";
    }
}