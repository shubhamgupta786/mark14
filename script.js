
const initial_price=document.querySelector('#initial');
const quantity=document.querySelector('#quantity');
const current_price=document.querySelector('#current');
const btn=document.querySelector('#btn');
const output=document.querySelector('#op');
btn.addEventListener('click', handler);
function handler(){
var initial=initial_price.value;
var q1=quantity.value;

var current=current_price.value;
calculateProfitLoss(initial,q1,current);
//calculateProfitLoss(initial_price.value,quantity.value,current_price.value);
}



function calculateProfitLoss(initial,quantity,current){
//if(initial!='' &&current!=''&&quantity!=''){
if(initial>current){
var loss=(initial - current)*quantity;
var lossPercent=((loss/initial)*100).toFixed(2);
//console.log(lossPercent);

showOutput(`Hey the Loss is ${loss} and percent is ${lossPercent}%`  );
}
else if(initial < current){
var profit =(current - initial)*quantity;
var profitPercent=((profit/initial)*100).toFixed(2);

//console.log(profitPercent);
showOutput(`Hey the Profit is ${profit} and percent is ${profitPercent }%`);
}
else {
  var show =  "No pain no gain ";
//console.log(show);
//output.innerText=`No pain no gain`;
showOutput(show);
}




//}
}
//calculateProfitLoss(12,10,20);
function showOutput(message){
    //output.innerText='';
    //output.dispaly='none';
output.innerText=message;
if(message[8]=='P')
output.style.color='green';
else
output.style.color='red';


}