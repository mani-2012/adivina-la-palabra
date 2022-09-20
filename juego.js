poker=localStorage.getItem("mar");
fase=localStorage.getItem("lol");
console.log(poker);
console.log(fase);
document.getElementById("primer").innerHTML=poker+"= ";
document.getElementById("segundo").innerHTML=fase+"= ";
puntos=0;
punto=0;
document.getElementById("puntos").innerHTML=puntos;
document.getElementById("punto").innerHTML=punto;
function mani(){
    pluma=document.getElementById("palabra").value;
    mini=pluma.toLowerCase();
    uno=mini.charAt(1);
    console.log(uno);
    long2=Math.floor(mini.length/2);
    dos=mini.charAt(long2);

    tres=mini.charAt(mini.length-2);
    mari=mini.charAt(Math.floor(Math.random() * (mini.length - 1)));
    cubrebocas=mini.replace(uno,"_ ");
    cubrebocas2=cubrebocas.replace(dos,"_ ");
    cubrebocas3=cubrebocas2.replace(tres,"_ ");
    cubrebocas4=cubrebocas3.replace(mari,"_ ");
 document.getElementById("adivina").innerHTML=cubrebocas4;
 console.log(cubrebocas4);
}
function cooki(){
    get_answer =document.getElementById("respuesta").value;
    answer=get_answer.tolowerCase();
    console.log("answer in lower case" +answer);
    if (answer==mini)
    {
    if("lol" + 1){
    mar+mar +1;
    document.getElementById("mar").innerHTML+mar;
    }
    }
}