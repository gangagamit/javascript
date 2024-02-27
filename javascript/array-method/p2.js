//Array-lenght
{
    let subject = ['maths','physics','chemistry','English'];
    console.log(subject);
    console.log(subject.length);
}
//Array-push
{
    let subject = ['maths','physics','chemistry','English'];
    subject.push('sanskrit');
    console.log(subject);
}
//Array-unshift
{
    let subject = ['maths','physics','chemistry','English'];
    subject.unshift('sanskrit','Economics');
    console.log(subject);
}
//Array-pop
{
    let subject = ['maths','physics','chemistry','English'];
    console.log(subject);
    subject.pop();
    console.log(subject);
}
//Array-shift
{
    let subject = ['maths','physics','chemistry','English'];
    console.log(subject);
    subject.shift();
    console.log(subject);
}
//Array-splice
{
    let subject = ['maths','physics','chemistry','English','economics','social','science'];
    console.log(subject);
    subject.splice(1,3);
    console.log(subject);
}
//All array blank
{
    let subject = ['maths','physics','chemistry','English','economics','social','science'];
    console.log(subject);
    subject.length = 0;
    console.log(subject); 
}
//Array-indexOf
{
    let subject = ['maths','physics','chemistry','English'];
    console.log(subject);
    let position = subject.indexOf('English');
    console.log(position);
}
//Array-split
{
    let text = 'Hello ! mister Harvy';
    let text1 = text.split(' ');
    console.log(text1);
}
//Array-join
{
    let subject = ['maths','physics','chemistry','English'];
    console.log(subject); 
    let subject1 = subject.join(' - ');
    console.log(subject1);
}
//Array-concat
{
    let subject = ['maths','physics','chemistry','English'];
    console.log(subject); 
    let subject1 = ['sanskrit','economics','science'];
    console.log(subject1);
    let subject2 = subject.concat(subject1);
    console.log(subject2);
}
//Array-sort
{
    
}