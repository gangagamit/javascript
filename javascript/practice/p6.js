// {
//     let i,n=10,k,a=0,b=1;
//     for(i=1;i<=n;i++)
//     {
//         k=a+b;
//         a=b;
//         b=k;
//         document.write(a+"<br>");
//     }
// }
{
    let i,n=10,k,a=0,b=1;
    while(i<=n)
    {
        k=a+b;
        a=b;
        b=k;
        document.write(a);
    } 
}