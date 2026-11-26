import java.util.Scanner;

public class PerfectNumber{
  	public static void main(String[] args){
		Scanner input = new Scanner(System.in);
		System.out.print("Enter a positive number: ");
		int userInput = input.nextInt();
		
		String result = isPrime(userInput);
		System.out.println(result);
		
	}







    public static String isPrime(int number){
		int total = 0;
		
		
		if(number < 1){
			return "Invalid Number";
		}
		else{
			for(int counter = 0; counter < number; counter++){
				if(number % counter == 0){
					total += counter;
				}
			}
			if(total == number){
				  return "its a Perfect Number";
			}
			else{
				return "its Not a Perfect Number";
			}
			
		}
		
}
				
	
		
}
