
function rock(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 1){
        alert("Bot:가위\n 승리");
    }
    else if (lee == 0){
        alert("Bot:주먹\n 비김")
    }
    else if (lee == 2){
        alert("Bot:보\n 패배")
    }
}
function si(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 1){
        alert("Bot:가위\n 비김");
    }
    else if (lee == 0){
        alert("Bot:주먹\n 패배")
    }
    else if (lee == 2){
        alert("Bot:보\n 승리")
    }
}
function paeper(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 1){
        alert("Bot:가위\n 패배");
    }
    else if (lee == 0){
        alert("Bot:주먹\n 승리")
    }
    else if (lee == 2){
        alert("Bot:보\n 비김")
    }
}
