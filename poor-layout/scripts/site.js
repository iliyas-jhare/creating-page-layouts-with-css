function getFullYear() {
    return new Date().getFullYear();
}

function setCopyrightText() {
    var copyright = document.getElementById('copyright');
    if (copyright) {
        var content = "Copyright ©" + " ";
        content += getFullYear() + " ";
        content += "Bethany's Pie Shop. All rights reserved.";
        copyright.innerHTML = content;
    }
}

function createAnchor(image) {
    var anchor = document.createElement('a');
    anchor.href = image.src;
    anchor.target = "_blank";
    anchor.appendChild(image);
    return anchor;
}

function setDataAnchor(data) {
    Array.from(data.getElementsByTagName("img"))
        .forEach(image => data.appendChild(createAnchor(image)));
}

function setAnchorIcon(data) {
    var image = document.createElement('img');
    image.classList.add('anchor-icon');
    image.src = new URL('/poor-layout/images/box-arrow-up-right.svg', window.location.origin);
    image.alt = 'Box arrow up right';
    data.appendChild(image);
}

function setAnchorTarget(data) {
    Array.from(data.getElementsByTagName('a'))
        .forEach(anchor => {
            anchor.setAttribute("target", "_blank");
            if (anchor.innerHTML === "Open") {
                setAnchorIcon(anchor);
            }
        });
}

function setTableAnchors() {
    Array.from(document.getElementsByTagName("td"))
        .forEach(data => {
            setDataAnchor(data);
            setAnchorTarget(data);
        });
}

function onFavourite() {
    if (localStorage) {
        localStorage.setItem("applepie", true);
        window.location.reload();
    }
}

function setFavouriteText() {
    var favourite = document.getElementById('favourite');
    if (favourite) {
        if (localStorage && localStorage.getItem('applepie') === 'true') {
            favourite.innerHTML = "Apple pie is one of your favourite";
        } else {
            favourite.innerHTML = "";
        }
    }
}

window.addEventListener("DOMContentLoaded", (e) => {
    setCopyrightText();
    setTableAnchors();
    setFavouriteText();
});