const reverseString = function(value:string){
    let resultString = '';
  
    for(var i = value.length - 1; i >= 0; i--){
      resultString += value[i]; 
    }
  
    return resultString;
  }
  
  console.log(reverseString("Hi I Am Yousaf")) 