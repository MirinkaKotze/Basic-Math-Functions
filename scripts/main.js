// LESSON 26: TYPES OF MATH & DATA FUNCTIONS - BASIC MATH FUNCTIONS
// 1. Request a three-digit number from a user and check whether it has identical digits in it.
// Posibile identical options: 111 110 101 011
function threeDigitNumber() {
    const userNumber = prompt('Enter a three-digit number:');
    if ((userNumber[0] === userNumber[1]) &&  (userNumber[1] === userNumber[2])) {
        console.log('All three digits are identical');
    }    
    else if (userNumber[0] === userNumber[1]) {
        console.log('The 1st two digits are identical');   
    }   
    else if (userNumber[0] === userNumber[2]) {
        console.log('The 1st and last digits are identical');       
    }
    else if (userNumber[1] === userNumber[2]) {
        console.log('The last 2 digits are identical');     
    }
    else {
        console.log('No digits are identical');
    }
}

threeDigitNumber()

//[[OR POSIBLE OTHER OPTION #1 - DONE IN CLASS]]
function threeDigitNumber() {
    const yourNumber = prompt('Enter a three-digit number:');
    if (yourNumber.length === 3) {
        if (
            yourNumber[0] == yourNumber[1] ||
            yourNumber[0] == yourNumber[2] ||
            yourNumber[1] == yourNumber[2]
        ){
            console.log('Identical digits')
        }
    } else {
        console.log('Your number doesn`t have threee digits')
    }
}
threeDigitNumber()


// 2. Request a five-unit number from a user and check whether it is a palindrome.
// 5-unit palindrome's: first number === last number && 2nd number === 2nd last number
// Example: 71017, 60806, 12021, 65256 
function palindrome() {
    const userPalindrome = prompt('Enter a five digit number:');
    if ((userPalindrome[0] === userPalindrome[4]) && (userPalindrome[1] === userPalindrome[3])) {
        console.log('That was a five-digit palindrome number!');
    }
    else {
        console.log('That was not a five-digit palindrome number!');
    }       
}

palindrome()

// 3. Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 
function currencyConverter() {
    const userAmount = prompt('Please enter the amount you want to convert in USD:');
    const newCurrency = prompt('Please choose a currency between EUR, SEK or AUD:');
    if (newCurrency === 'EUR') {
        const EURrate = 0.88;
        const userAmountEuro = userAmount * EURrate;
        const userAmountEuroRounded = userAmountEuro.toFixed(2);
        console.log('The converted amount is: ' + userAmountEuroRounded + ' EUR.');
    }
    else if (newCurrency === 'SEK') {
        const SEKrate = 9.03;
        const userAmountSEK = userAmount * SEKrate;
        const userAmountSEKRounded = userAmountSEK.toFixed(2);
        console.log('The converted amount is: ' + userAmountSEKRounded + ' SEK.');
    }
    else if (newCurrency === 'AUD') {
        const AUDrate = 1.38;
        const userAmountAUD = userAmount * AUDrate;
        const userAmountAUDRounded = userAmountAUD.toFixed(2);
        console.log('The converted amount is: ' + userAmountAUDRounded + ' SEK.');
    }
    else {
        console.log('Please choose a valid currency!');
    }
}

currencyConverter();

// 4. Request a length of a circumference (AKA CIRCLE) and a perimeter of a square from a user.
// Define whether that circumference can fit in that square.
// THUS: Will the circle fit into the square?
// Ask for perimeter of sqaure + circumference of circle
// Calculate area of the two figures
// Compare (areaCircle vs areaSqaure)
function willItFit() {
    const circumference = prompt('What is the circumference of your circle?'); 
    const circleDiameter = circumference / Math.PI;
    const circleRadius = circleDiameter / 2;
    const circleArea = (circleRadius * circleRadius) * Math.PI;
    const circleAreaRounded = circleArea.toFixed(0);

    const perimeter = prompt('What is the perimeter of your square?');
    const sidelength = perimeter / 4
    const squareArea = sidelength * sidelength;

    if (squareArea > circleAreaRounded) {
        console.log('Your circle will fit into the sqaure!!');
    }
    else {
        console.log('OOPS!! Your circle doesn`t fit!!');
    }
}

willItFit()

// 5. Request a date (dd:mm:yy) and put out the one that goes after it. 
// Pay attention to the start of a new month, new year, and also leap years.
function theDateAfter() {
    const enteredDate = new Date(prompt('Type in a date (format mm-dd-yy).'));
    const nextDate = new Date(enteredDate);
    nextDate.setDate(nextDate.getDate() +1);
    console.log('The day after your entered date is: ' + nextDate);
}
theDateAfter()


//[[OR POSIBLE OTHER OPTION #5 - DONE IN CLASS]]
// 1. Input (parse the string that we will get from user) '01:12:2021' 
const year = yourDate.substring(6, 10);
console.log("this is the year ", year);
const month = yourDate.substring(3, 5)
console.log("This is the month ", month)
const day = yourDate.substring(0, 2);
console.log("this is the day ", day)

// 2. Solution with Date object
// es6 ==> 'Hello ' + name + '. Your are logged in' -> `Hello ${name}. Your are logged in.`
// '2021-12-31'

const currentDateObject = new Date(`${year}-${month}-${day}`);

currentDateObject.setDate(currentDateObject.getDate() + 1);

const nextDayString = currentDateObject.toDateString();

console.log('nextDayString: ', nextDayString);