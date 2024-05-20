let m = "주먹";
let j = "가위";
let p = "보";

var bot = "bot"; 


function rock(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 0){
        alert(`Bot: ${m} \n 다시~`);
        }
    else if (lee == 1){
        alert(`Bot: ${j}\n 마이턴`)
        time()
    }
    else if (lee == 2){
        alert(`Bot:${p}\n 피씨턴~`)
        time()

    }
};
function si(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 0){
        alert(`Bot: ${m} \n 피씨턴`);
        location.replace("MJP2");
        }
    else if (lee == 1){
        alert(`Bot: ${j}\n 다시`)
        time()
    }
    else if (lee == 2){
        alert(`Bot:${p}\n  마이턴`)
        time()

    }
};

function paeper(){
    let lee = Math.floor(Math.random()*3);
    if (lee == 0){
        alert(`Bot: ${m} \n  마이턴~`);
            }
    else if (lee == 1){
        alert(`Bot: ${j}\n 피씨턴`)
        time()
        }
    else if (lee == 2){
        alert(`Bot:${p}\n 다시~`)
        time()
    
    }
};
function time(){  

}