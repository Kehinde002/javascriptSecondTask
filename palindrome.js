const isPalindromeNumber = function(x){
	let digit = x;
	let result = 0;
	while(digit > 0){
	  result = result * 10 +(digit%10);
	  digit =math.Floor(digit/10); 
	  if (result === digit){
	    return true
	  }
	  else{
      		return false
    }
	
	
	}
}

console.log(isPalindromeNumber(321));
