
{
    // let num = 1234;
    // let result = 0;
    // while(num > 0)
    // {
    //     rightmost = num % 10;
    //     result = result * 10 + rightmost;
    //     num = Math.floor(num/10);
    // }
    // console.log("Reverse number is : " + result);
}
{
    let r;
    let n = 12345;
    let rev = 0;
    while(n != 0)
    {
        r = n%10;
        rev = rev * 10 + r;
        n = parseInt(n/10);
    }
   console.log(rev);
}
