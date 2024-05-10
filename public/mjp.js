
function rock(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 1){
        alert("Bot:가위\n  마이턴~");
        location.replace("MJP2");

        }
    else if (lee == 0){
        alert("Bot:주먹\n 다시")
        time()
    }
    else if (lee == 2){
        alert("Bot:보\n 피씨턴~ ")
        time()

    }
}
function si(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 1){
        alert("Bot:주먹\n 다시")
    }
    else if (lee == 0){
        alert("Bot:보\n 피씨턴~ ")
    }
    else if (lee == 2){
        alert("Bot:가위\n  마이턴~");
    }
}
function paeper(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 1){
        alert("Bot:보\n 피씨턴~ ")
    }
    else if (lee == 0){
        alert("Bot:가위\n  마이턴~");
    }
    else if (lee == 2){
        alert("Bot:주먹\n 다시")
    }
}


function time(){  

}