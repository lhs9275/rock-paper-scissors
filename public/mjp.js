let m = '묵';
let j = '찌';
let p ='빠';


function rock(){
    let lee = Math.floor(Math.random()*3);
    let result;
    if (lee == 0){
        result =`Bot: ${m} \n 다시`;
    }
    else if (lee == 1){
        result =`Bot: ${j}\n 마이턴`;
    }
    else if (lee == 2){
        result =`Bot:${p}\n 피씨턴~`;
    }

alert(result);


$.ajax({
    url: '/updateResult',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ result: result }),
    success: function() {
        window.location.replace("/MJP2");
    }
});



};

function si(){
    let lee = Math.floor(Math.random()*3);
    let result;
    if (lee == 0){
        result = `Bot: ${m} \n 피씨턴`;
    }
    else if (lee == 1){
        result = `Bot: ${j}\n 다시`;
    }
    else if (lee == 2){
        result = `Bot:${p}\n  마이턴`;
    }

    alert(result);
    
    $.ajax({
        url: '/updateResult',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ result: result }),
        success: function() {
            window.location.replace("/MJP2");
        }
    });

};

function pa(){
    letresult;
    let lee = Math.floor(Math.random()*3);
    if (lee == 0){
        result=`Bot: ${m} \n  마이턴~`;
    }
    else if (lee == 1){
        result =`Bot: ${j}\n 피씨턴`;
    }
    else if (lee == 2){
        result = `Bot:${p}\n 다시~`;
    }
    
    alert(result);

    $.ajax({
        url: '/updateResult',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ result: result }),
        success: function() {
            window.location.replace("/MJP2");
        }
    });
};
