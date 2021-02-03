/*make random messaging app; focus will be astrology predictor 
start with making making array of signs, luck, and sayings*/



//make functions to call selections from arrays randomly 

 function tellFortune()  {
     
    let signs = ['Dragon', 'Moon', 'Sun', 'Tiger', 'Hare']
    let luck = ["high", "low", "hard to read"]
    let phrase = ["trust no one", "look for a friend in need", "be ready for change", "hold fast to your values"]
    
    
    const randomSign = signs[Math.floor(Math.random() * signs.length)];
    
    const randomLuck = luck[Math.floor(Math.random() * luck.length)];
     
    const randomPhrase = phrase[Math.floor(Math.random() * phrase.length)];
     

     
    //above creates random choice from the arrays and returns them  as random*
    
    //interpolate them all together 
    
    console.log(`Your sign is ${randomSign}.`)
    console.log(`Your luck today is ${randomLuck}.`)
    console.log(`Today, you should ${randomPhrase}.`)
 }

 tellFortune()