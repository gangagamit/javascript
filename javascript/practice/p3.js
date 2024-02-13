{
    let i;
    let c;
    let n = 4;
    for(i = 1; i<= 10; i++)
    {   
        c = n * i;
        document.write(`${n}*${i} =`+ c +"<br>");
    }
    
}
{
    let i = 1;
    let c;
    let n = 4;
    while(i<=10)
    {
        c = n * i;
        document.write(`${n}*${i} =`+ c +"<br>");
        i++;
    }
}

{
    let i = 1;
    let c;
    let n = 4;
    do{
        c = n * i;
        document.write(`${n}*${i} =`+ c +"<br>");
        i++;
    }while(i<=10);
}