function countdown(num){
    let countDown = setInterval(function(){
        if (num === 0){
            console.log("DONE!")
            clearInterval(countDown)
        } else{
            console.log(num)
            num = num - 1;
        }
    }, 1000);
}
countdown(4)


function randomGame(){
    let num = 0
    let timer = setInterval(function(){
        let guess = Math.random()
        if (guess > .75){
            console.log(`it took me ${num} tries to get it right!`)
            clearInterval(timer)
        } else{
            console.log(guess , num)
            num++
        }
    }, 1000);
}
randomGame()

