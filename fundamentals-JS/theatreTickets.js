function calculateTickets(day,age){
    if(day == "Weekday"){
        if(age >=0 && age <= 18){
            console.log("12$")
        }
        if(age >18 && age <= 64){
            console.log("18$")
        }
        if(age >64 && age <= 122){
            console.log("12$")
        }
    }else if(day == "Weekend"){
        if(age >=0 && age <= 18){
            console.log("15$")
        }
        if(age >18 && age <= 64){
            console.log("20$")
        }
        if(age >64 && age <= 122){
            console.log("15$")
        }
    }else if(day == "Holiday"){
        if(age >=0 && age <= 18){
            console.log("5$")
        }
        if(age >18 && age <= 64){
            console.log("12$")
        }
        if(age >64 && age <= 122){
            console.log("10$")
        }
    }else{
        console.log("Error...")
    }
}

calculateTickets("Holiday",14);
calculateTickets("Weekend",44);
calculateTickets("Weekend",82);
calculateTickets("Weekday",92);
calculateTickets("blah blah",14);
