module.exports = function toReadable(number) {
    let twentyDigits = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    let tensMultiple = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let tensPower = "hundred";

    let digitsNum = number.toString().length;
    let numberEl = number.toString();
    let result = '';

    switch (digitsNum) {
        case 1:
        case 2:
            if (number < 20) {
                result = twentyDigits[number];
            } else {
                if (number.toString()[1] == '0') {
                    result = tensMultiple[numberEl[0]];
                } else {
                    result = tensMultiple[numberEl[0]] + " " + twentyDigits[numberEl[1]];
                }

            }
            break;

        case 3:
         if (numberEl[1] == '0') {
            if (numberEl[2] == '0') {
                result = twentyDigits[numberEl[0]] + ' ' + tensPower;
            } else {
                result = twentyDigits[numberEl[0]] + ' ' + tensPower + ' ' + twentyDigits[numberEl[2]];
            }
            } else if (numberEl[2] == '0') {
                console.log('hell');
                result = twentyDigits[numberEl[0]] + ' ' + tensPower + ' ' + tensMultiple[numberEl[1]];
            } else if (+(numberEl[1] + numberEl[2]) < 20) {
                result = twentyDigits[numberEl[0]] + ' ' + tensPower + ' ' + twentyDigits[+(numberEl[1] + numberEl[2])];
            } else {
                console.log(+(numberEl[1] + numberEl[2]));
                result = twentyDigits[numberEl[0]] + ' ' + tensPower + ' ' + tensMultiple[numberEl[1]] + ' ' + twentyDigits[numberEl[2]];
            }
            break;
    }

    return result;
}

