
/// <reference path="ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" />

//$(".kutu").append("<div class='boncuk'></div>");


$("#btnEkle").click(function () {
    konumBul();
});

function degerBul(e) {
    var x = e.pageX;
    var y = e.pageY;

    $("#txtKonum").val(x + "-" + y);

    //başla

    //bitiş
}

function degerSil()
{
    $("#txtKonum").val("");
}



function konumBul()
{
    var kutuDiv = $(".kutu").offset();
    
    var anahomora = kutuDiv.left;
    anahomora += 480;

    var leviyosaa=kutuDiv.top;
    leviyosaa += 480;

    var degerx = Math.floor(Math.random() * anahomora);

    while (degerx < anahomora - 480 || degerx > anahomora) {
        degerx = Math.floor(Math.random() * anahomora);
    }

    var degery = Math.floor(Math.random() * leviyosaa);

    while (degery < leviyosaa - 480 || degery > leviyosaa) {
        degery = Math.floor(Math.random() * leviyosaa);
    }
    
    
    var renk = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ");";

    $(".kutu").append("<div class='boncuk' style='left:"+degerx+"px;top:"+degery+"px;background-color:"+renk+"'></div>");


}