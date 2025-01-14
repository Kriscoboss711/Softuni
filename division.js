function devide(num){
    if(num % 10 === 0){
        console.log(`the number is divisible by 10`);
    }else if(num % 7 === 0){
        console.log("the number is divisible by 7");
    }else if(num % 6 === 0){
        console.log("the number is divisible by 6");
    }else if(num % 3 === 0){
        console.log("the number is divisible by 3");
    }else if(num % 2 === 0){
        console.log("the number is divisible by 2");
    }else{
        console.log("not divisible");
    }
}

devide(30);
devide(15);
devide(12);
devide(1643);
