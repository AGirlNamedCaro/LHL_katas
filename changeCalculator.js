/**
 * Challenge: 
 * Create a function that takes in a total amount of a bill
 * and the total cash given to pay the bill
 * return an OBJECT that describes the total amount of 
 * change for the cashier to give back
 * EX: 17.87, 20.000 input
 * {twoDollar: 1, dime: 1, penny: 3} output
 * 26.23, 40.00 input
 * {tenDollar:1, twoDollar:1, oneDollar: 1, quarter: 3, penny: 2}
 * Input: 
 */

 const calculateChange = (billTotal, cash) => {
   /**
    * PSEUDO CODE
    * Subtract Cash - billTotal in order to get the change
    * Format the change to have a decimal point
    * check the length of the number <= 3 under 9 
    * Identify the first number -- add it to the object and subtract it 
    * from the change
    * identify what's left and follow the same pattern
    */

    let change = (cash - billTotal) / 100
    console.log(change)
    const object = {}
    let count1 = 0;
    let count2 = 0;
    let count5 = 0;

    if(change.toString().length < 5) {
      //Checking whether its under 9$
      for(const num of change.toString()) {
       if(change.toString()[0] > 0) {

         switch(num) {
 
           case '1':
             count1++
             object['oneDollar'] = count1
             break;
           case '2':
             count2++
             object['twoDollar'] = count2
             break;
         }
         if(num === '.') {
           console.log('decimal point')
         }
         else {
           change = change - parseFloat(num)
           console.log('currentChange: ', change.toFixed(2), 'num: ', num)
         }
       }
       else {
         if(change.toString()[3] > 0) {
           console.log(change)
         }

       }
        
        
      }
      
    }
    else {

    }

    // console.log(object)
    
 
 }

 

 console.log(calculateChange(1787, 2000));
//  console.log(calculateChange(2623, 4000));