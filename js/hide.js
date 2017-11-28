let cover = document.createElement("div");
document.body.appendChild(cover);

cover.style.position = "absolute";
cover.style.top = "0px";
cover.style.left = "0px";
cover.style.width = "98vw";
cover.style.height = "100vh";
cover.style.zIndex = 99;
cover.style.backgroundColor = "white";
cover.style.color = "black"
cover.style.padding = "1vw";

cover.innerHTML =
    'What\'s better than a cold domen?<br><br>' +
    '<a id="ahotdomen">a hot domen</a>';

let linky = document.getElementById("ahotdomen");
linky.style.color = "blue";
linky.style.textDecoration = "underline";
linky.style.cursor = "pointer";
linky.style.paddingLeft = "2em";
linky.onclick = function() {
    document.body.removeChild(cover);
};
