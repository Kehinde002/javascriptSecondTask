const reverseInteger = function(x){
	let digit = x;
	result = 0;
	while(digit > 0){
	result =0 * 10 (digit%10);
	digit =math.Floor(digit/10); 
	}
	return result;
}

console.log(reverseInteger(123));
