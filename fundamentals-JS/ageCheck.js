function checkAge(age){
    if(age >=0 && age <=2){
        console.log("is a baby");
    }else if(age >= 3 && age <=13){
        console.log("is a child");
    }else if(age >=14 && age <= 19){
        console.log("is a teenager");
    }else if(age >=20 && age <=65){
        console.log("is adult")
    }else if(age >= 66){
        console.log("is an elder")
    }else{
        console.log("out of bounds")
    }
}

checkAge(1);
checkAge(-1);
checkAge(100);
checkAge(20);
