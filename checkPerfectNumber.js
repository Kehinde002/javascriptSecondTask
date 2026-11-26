const checkPerfectNumber = function(number){
		let total = 0;
		
		
		if(number < 1){
			return "Invalid Number";
		}
		else{
			for(let divisor = 0; divisor < number; divisor++){
				if(number % counter === 0){
					total += divisor;
				}
			}
			if(total === number){
				  return true;
			}
			else{
				return false;
			}
	}
}

console.log(checkPerfectNumber(25));

