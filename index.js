romanToInt('LVIII'); // out 58


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanVal = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let number = 0;

    for(let i = 0; i < s.length; i++) {
        const key = s[i];
        const nextKey = s[i + 1];

        if (romanVal[key] < romanVal[nextKey]) {
            number += (romanVal[nextKey] - romanVal[key]);
            i++;
        } else {
            number += romanVal[key];
        }
    }

    return number;
};
