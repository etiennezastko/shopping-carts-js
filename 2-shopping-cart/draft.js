
function moreApple(){
    counterValueApple++;
    
    counterApple.innerHTML=counterValueApple+' articles';
    if(counterValueApple== 1){
        counterApple.innerHTML=counterValueApple+' article';
    }
    else{
        counterApple.innerHTML=counterValueApple+' articles';  
    }
    document.getElementById("total").innerHTML=counterValueApple*applePrice;
}


function lessApple(){
    counterValueApple--;
    
    if(counterValueApple<=0){
        counterValueApple=0 ;
        counterApple.innerHTML=counterValueApple+' article';
    }
    else if(counterValueApple== 1){
        counterApple.innerHTML=counterValueApple+' article';
    }
    else{
        counterApple.innerHTML=counterValueApple+' articles';
    }
    document.getElementById("total").innerHTML=counterValueApple*applePrice;
}