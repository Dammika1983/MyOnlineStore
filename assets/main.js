/*
 * Student Name: Dammika Pathirana
 * Student ID: 041089481
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: 23W
 * Assignment: 4
 * Date Submitted: 16/04/2023
 */


/*In the main.js file write a function named isValidEmail that takes a single String parameter named email.*/
function isValidEmail (email){
   if(!email) return false;
   if(typeof(email) !== "string") return false;
   if(/^\d$/.test(email[0])) return false;
     
    var reg = /^([\w-]+(?:\.[\w-]+)*)@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])?([a-zA-Z-]+\.[a-zA-Z]{2,})$/;
    if (reg.test(email)){
      return true;
    } else {
      return false;
    }  
}

/*Add the following test statements to your main.js file, below the isValidEmail function, to test the function.*/
console.log(isValidEmail("myEmail1@email.com"));// true
console.log(isValidEmail("my.Email1@e-mail.com"));// true
console.log(isValidEmail("myEmail1@email.c"));// false
console.log(isValidEmail("m@email1.com"));// false
console.log(isValidEmail(1));// false
console.log(isValidEmail(true));// false
console.log(isValidEmail("myEmail1@com"));// false
console.log(isValidEmail("my_Email1@e.com"));// true
console.log(isValidEmail("1m@email.com"));// false
console.log(isValidEmail("my!Email@email.com"));// false


/*write a function named isAgeOfMajority that takes three number parameters named birthYear, birthMonth, birthDay.
* 1.What are the possible return values from the Date constructor? Return the string indicating actual time.
* 2.Why concatenate them into a string, instead of simply passing each number to the constructor as an individual date part? It connect two string to build a one string.
*/
function isAgeOfMajority (birthYear, birthMonth, birthDay) {
    if(typeof(birthYear) !== "number" || typeof(birthMonth) !== "number" || typeof(birthDay) !== "number") {
        return false;
    }

    if(birthYear < 1920 || birthYear > 2010) {
        return false;
    }

    if(birthMonth < 1 || birthMonth > 12) {
        return false;
    }

    if(birthDay < 1 || birthDay > 31) {
        return false;
    }
  
    if (!((0 == birthYear % 4) && (0 != birthYear % 100) || (0 == birthYear % 400))) {
      if(birthMonth === 2 && birthDay > 28) {
        return false;
      }
    }
    
    const dateConcat = birthMonth+"/"+birthDay+"/"+birthYear;
    const dateGiven = new Date(dateConcat);
    const dateToday = new Date();
   
    const diffTime = Math.abs(dateToday - dateGiven);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if(diffDays > 6570) {
      return true;
    } else {
      return false;
    }
}

/*below the isAgeOfMajority function, to test the function*/
console.log(isAgeOfMajority(2005,2,25)); // true – just old enough
console.log(isAgeOfMajority(1997,2,29)); // false – not a leap year
console.log(isAgeOfMajority(2008,5,1)); // false
console.log(isAgeOfMajority(2000,1,1)); // true
console.log(isAgeOfMajority(1980,12,31)); // true
console.log(isAgeOfMajority("1980","12",31)); // false – wrong data type in parameter



