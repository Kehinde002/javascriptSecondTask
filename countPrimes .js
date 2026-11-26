const countPrimes = function(x){
	let count = 0;
	for(let number = 0; number <= x; number++){
	let numberCount = 0;
		for(let divisor = 1; divisor <= number; divisor++){
			if(number % divisor == 0){
				numberCount++;}
		}
	if(numberCount == 2){
		count++;
	}
	
}
	return count;
}

console.log(countPrimes(10));
