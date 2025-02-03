function LogIn(input){
    let userName = input[0];
    let count = 0;

    for (let index = 1; index < input.length; index++) {
        if(count > 3){
            console.log(`Use ${userName} is blocked!`);
            break;
        }
        let reverseString = input[index];
        
        reverseString = reverseString.split('');
        reverseString = reverseString.reverse();
        reverseString = reverseString.join('');

        if(reverseString !== userName){
            console.log("Incorect password. Try again.")
        }else{
            console.log(`User ${userName} logged in`);
        }
        count ++;
    }
}

LogIn(["Acer", "login", "go", "let me in", "recA"]);
LogIn(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
