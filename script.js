const themeBtn =
document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle(
        "dark-theme"
    );

    if(document.body.classList.contains(
        "dark-theme"
    )){
        themeBtn.textContent = "☀️";
    }

    else{
        themeBtn.textContent = "🌙";
    }

});