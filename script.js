/// <reference path="ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" />

function yemAt()
{

    var yem = document.createElement("div");
    yem1=$(yem);
    yem1.addClass("yem");
    yem1.css("top", Math.floor(Math.random() * window.screen.height));
    yem1.css("left", Math.floor(Math.random() * window.screen.width));
    yem1.css("background-color", "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");


    $("#zemin").append(yem);

    var deger=$("#sayac").text();
    deger=deger-1;
    deger=deger+2;
    $("#sayac").text(deger);



}

setInterval(yemAt, 1);