function getFullYear() {
    return new Date().getFullYear();
}

function setCopyrightText() {
    var copyright = document.getElementById('copyright');
    if (copyright) {
        var content = "&copy;" + " ";
        content += getFullYear() + " ";
        content += "&bull;" + " ";
        content += "all rights reserved.";
        copyright.innerHTML = content;
    }
}

function toggleMenu() {
    document.getElementById("mainMenuList").classList.toggle("open");
}

function setMenuToggleHandler() {
    let button = document.getElementById("menuBtn");
    button.onclick = toggleMenu;
}

window.addEventListener("DOMContentLoaded", (e) => {
    setMenuToggleHandler();
    setCopyrightText();
});