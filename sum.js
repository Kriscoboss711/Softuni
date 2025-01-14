function sum(start,end){
    let sum = 0;
    let sequence = "";

    for(let index = start; index <= end; index++){
        sum += index;
        sequence += index + " ";
    }
    console.log(sequence);
    console.log(`Sum: ${sum}`);
}

sum(5,10);