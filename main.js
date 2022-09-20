function bien(){
    mar=document.getElementById("play_game1").value;
    lol=document.getElementById("play_game2").value;
    localStorage.setItem("mar",mar);
    localStorage.setItem("lol",lol);
    window.location="empieza_el_JUEGO.html";
 }