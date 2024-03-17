const textbox = document.querySelector('.wrapper textarea'),
checkBtn = document.querySelector('#check-btn'),
vowelCountshow = document.querySelector('#vowel-count');

vowelCountshow.innerHTML = 0;
checkBtn.addEventListener('click',()=>{
    let count = 0;
    const vowels = ['a','e','i','o','u'];
    for(letter of textbox.nodeValue.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }
    }
    vowelCountshow.innerHTML=count;
});
