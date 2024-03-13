{
       
function wordsLen(str) { 
    const array = str.trim().split(/\s+/); 
    return array.length; 
} 
  
const str = "lorem  wjdyuiwqd qwduhwqiudbjsakdsjadjh wqjhjdgqydw qysgsyjsbx  wjdh asdh wshds hasv"; 
  
console.log("Word count:" ,wordsLen(str));
}