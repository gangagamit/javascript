//Guess tha number game using a while loop

{
    let guessnum = 10;
    let num = 0;

    while(num<guessnum)
    {

        let userguess = prompt("Enter a number between 1 to 100");
        if(userguess<guessnum)
        {
            alert("your guessnumber is to low");
        }
        else if(userguess>guessnum)
        {
            alert("your guessnumber is to high");
        }
        else if(userguess==guessnum)
        {
            alert("congratulation number is correct");
            break;
        }
        else{
            alert("Sorry!! try again");
            
        }
        num++;
    }
}