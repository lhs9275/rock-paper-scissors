function x()
{

var k =prompt("숫자를 입력");
var list = [];
for (let count= 1 ; count<10; count++){

    list[count]= k*count;
}
var list_2 = [];
for (let count_2 = 1; count_2<10; count_2++){
list_2[count_2] = `${k}X${count_2} = ${list[count_2]} \n`

}
alert(list_2);
}


