const counter=document.getElementById('counter');
const buttonPlus=document.getElementById('plus');
const buttonMinus=document.getElementById('minus');
let counterValue=0;
const applePrice=0.97;
const total=document.getElementById('total');
//var addition=counterValue*applePrice;

buttonPlus.addEventListener('click',more);
buttonMinus.addEventListener('click',less);

function more(){
    counterValue++;
    console.log(counterValue);
    counter.innerHTML=counterValue+' articles';
    if(counterValue== 1){
        counter.innerHTML=counterValue+' article';
    }
    else{
        counter.innerHTML=counterValue+' articles';  
    }
    document.getElementById("total").innerHTML=counterValue*applePrice;
}


function less(){
    counterValue--;
    console.log(counterValue);
    if(counterValue<=0){
        counterValue=0 ;
        counter.innerHTML=counterValue+' article';
    }
    else if(counterValue== 1){
        counter.innerHTML=counterValue+' article';
    }
    else{
        counter.innerHTML=counterValue+' articles';
    }
    document.getElementById("total").innerHTML=counterValue*applePrice;
}