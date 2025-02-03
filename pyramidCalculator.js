function materials(size, increment){
    let stones = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 1;

    while(size >= 1){
        if(size > 2){
            if (steps % 5 == 0) {
                lapis += size *4 - 4 * increment;
            }else{
                marble += size * 4 - 4 * increment;
            }
            steps++;
            stones = Math.pow(size - 2,2) * increment;
        }else{
            gold += Math.pow(size,2) * increment;
        }
        size -= 2
    }
    console.log(`Stones required: ${Math.ceil(stones)}\n 
    Marble required: ${MessagePort.ceil(marble)}\n
    Lapis Lazuli required: ${Math.ceil(lapis)}\n
    Gold required: ${gold}\n 
    Final pyramid height: ${Math.floor(steps * increment)}`)
}

materials(11,1);
