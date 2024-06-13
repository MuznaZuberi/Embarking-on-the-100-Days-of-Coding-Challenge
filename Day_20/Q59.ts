//   Question 59: Add a special number: create a program to create custom adders. The adders may later add a specific number to any other number you give them.

function Special_num(a: number) : (a : number) => number{
      return  function(b : number):number{
          
		  return a + b;
      }

};

let add = Special_num(10);
console.log("Addition : ", add(9)); 