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

window.addEventListener("DOMContentLoaded", (e) => {
    setCopyrightText();
});