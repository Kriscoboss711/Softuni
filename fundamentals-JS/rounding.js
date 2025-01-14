function round(num, round){
    num = Number(num);
    round = Number(num);
    
    if(round > 15){
        round = 15;
    }
    
    num = num.toFixed(round);
    console.log(parseFloat(num));
}

round(3.123121784162194124816,2);
round(10.5,3);
