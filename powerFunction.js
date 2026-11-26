const isPowerOfTwo = function(x){
	let result = 1;
	if (x < 1){
		return "Invalid"
	}
	else{
		for(let number = 1; number <= x; number++){
			if (number % 2 === 0){
				result *= number;
				if ( result === x){
				}
			}
		}
		return result;
	}
			
console.log(isPowerOfTwo(16);
