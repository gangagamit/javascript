// while loop for loop and do while loop 
/*1)countdown using a while loop

 {
     let i = 10;
     while(i>=0)
     {
         document.write(i+"<br>");
         i--;
     }
 }
 {
     let i;
     for(i = 10; i >=0; i--)
     {
         document.write(i+"<br>");
     }
 }

{
    
    do
    {   
        let i = 10;
        document.write(i+"<br>");
        i--;
    }while(i >= 0);
}
*/
// 2)sum of numbers from 1 to 10
// for loop
 {
     let i = 1;
     let total = 0;
     for(i = 1; i <= 10; i++)
     {
         document.write(i+"<br>");
         total = total + i;
     }
     document.write(total+"<br>");
 }
 //while loop
 {
     let i = 1;
     let total = 0;
     while(i <= 10)
    {
         document.write(i+"<br>");
         total = total + i;
         i++;
     }
     document.write(total+"<br>");
 }
{
    do{
        let i =1;
        let total = 0;
        document.write(i+"<br>");
        i++;
        total = total + i;
        document.write(total+"<br>");
    }while(i<=10);
}
