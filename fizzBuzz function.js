const fizzBuzz = function(x){
	if(x % 3 === 0 && x % 5 === 0){
		return "Fizz";
	}
	else if (x % 3 === 0){
		return "Buzz";
	}
	else if (x % 5 === 0){
		return "FizzBuzz";
	}
	else{
		return x;
}

console.log(fizzBuzz(15));
