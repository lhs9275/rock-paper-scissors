
function rock(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 1){
        alert("Bot:찌\n  마이턴~");
        location.replace("MJP2");

        }
    else if (lee == 0){
        alert("Bot:묵\n 끝")
        time()
    }
    else if (lee == 2){
        alert("Bot:빠\n 피씨턴~ ")
        time()

    }
}
function si(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 1){
        alert("Bot:묵\n 끝")
    }
    else if (lee == 0){
        alert("Bot:빠\n 피씨턴~ ")
    }
    else if (lee == 2){
        alert("Bot:찌\n  마이턴~");
    }
}
function paeper(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 1){
        alert("Bot:빠\n 피씨턴~ ")
    }
    else if (lee == 0){
        alert("Bot:찌\n  마이턴~");
    }
    else if (lee == 2){
        alert("Bot:묵\n 끝")
    }
}


function time(){  

}