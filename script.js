/// <reference path="ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" />

function yemAt()
{

    var yem = document.createElement("div");
    yem1=$(yem);
    yem1.addClass("yem");
    yem1.css("top", Math.floor(Math.random() * window.screen.height));
    yem1.css("left", Math.floor(Math.random() * window.screen.width));
    yem1.css("background-color", "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");

    
    yem.style.position = "absolute";

    $("#zemin").append(yem);

}

setInterval(yemAt, 1);