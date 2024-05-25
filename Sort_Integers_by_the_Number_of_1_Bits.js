// 1356. Sort Integers by the Number of 1 Bits

// You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.
// Return the array after sorting it.



/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    
    function countOnes(num) {
        return num.toString(2).split('1').length - 1;
    }

    arr.sort((a, b) => {
        let countA = countOnes(a);
        let countB = countOnes(b);
        if (countA === countB) {
            return a - b; // Sort by numerical value if count of 1's is the same
        }
        return countA - countB; // Otherwise, sort by the count of 1's
    });

    return arr

};