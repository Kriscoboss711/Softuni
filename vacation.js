function calculatePrice(groupCount,groupType,day){
    if(groupType == "Students" && day == "Friday"){
        let price = 8.45;
        if(groupCount >= 30){
            console.log(`The price is ${(price * groupCount) * 0.85}`);
        }else{
            console.log(`The price is ${(price * groupCount)}`);
        }
    }else if(groupType == "Students" && day == "Saturday"){
        let price = 9.80;
        if(groupCount >= 30){
            console.log(`The price is ${(price * groupCount) * 0.85}`);
        }else{
            console.log(`The price is ${(price * groupCount)}`);
        }
    }else if(groupType == "Students" && day == "Sunday"){
        let price = 10.46;
        if(groupCount >= 30){
            console.log(`The price is ${(price * groupCount) * 0.85}`);
        }else{
            console.log(`The price is ${(price * groupCount)}`);
        }
    }else if(groupType == "Regular" && day == "Friday"){
        let price = 15;
        if(groupCount >= 10 && groupCount <= 20){
            console.log(`The price is ${(price * groupCount) * 0.95}`);
        }else{
            console.log(`The price is ${(price * groupCount) }`);
        }
    }else if(groupType == "Regular" && day == "Saturday"){
        let price = 20;
        if(groupCount >= 10 && groupCount <= 20){
            console.log(`The price is ${(price * groupCount) * 0.95}`);
        }else{
            console.log(`The price is ${(price * groupCount)}`);
        }
    }else if(groupType == "Regular" && day == "Sunday"){
        let price = 22.50;
        if(groupCount >= 10 && groupCount <= 20){
            console.log(`The price is ${(price * groupCount) * 0.95}`);
        }else{
            console.log(`The price is ${(price * groupCount)}`);
        }
    }else if(groupType == "Bussiness" && groupCount >= 100){
        groupCount = groupCount - 10;
    
    }else if(groupType == "Bussiness" && day == "Friday"){
        let price = 10.90;
        console.log(`The price is ${price * groupCount}`);
        
    }else if(groupType == "Bussiness" && day == "Saturday"){
        let price = 15.50;
        console.log(`The price is ${price * groupCount}`);   
    }else if(groupType == "Bussiness" && day == "Sunday"){
        let price = 16;
        console.log(`The price is ${price * groupCount}`);   
    }
}

calculatePrice(30,"Students","Sunday");
calculatePrice(40,"Regular","Saturday");
calculatePrice(101,"Business","Sunday");

