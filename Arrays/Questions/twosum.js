/*
Give an array of integers,
return the indnices of the two
numbers that add up to a given
target.

ex: 
arr: [1, 3, 7, 9, 2]
ind: [0, 1, 2, 3, 4]

twosum(11) = [3, 4]
twosum(4) = [0, 1]
*/

/*
STEP 1: Verify Constraints: ask questions to find edge cases and variables that may affect the answer to your question
- Are all the nums pos or can there be neg? -> Only pos
- Are there dupl nums in the array? -> No
- Will there always be a solution available? -> No **IMPORTANT**
- What should I return if there's no sol? -> Return Null
- Can there be  multiple pairs that add up to target? -> expect that only two add up to target

STEP 2: Write Out Test Cases:
- twosum(11) = [3, 4]
- twosum(4) = [0, 1]
- twosum(25) = NULL
- twosum(1) = NULL
- twosum(5) = NULL if arr = [5] (needs TWO NUMBERS)

STEP 3: Figure Out a Solution Without Code
- Testing out every combo
- Use two pointer technique
- One pointer at beginning, one at next index and test
- Then increment 2nd pointer and test for all items in list

- Once all tested, increment 1st pointer
- Increment 2nd pointer and test again

- repeat til all values tested h
*/

var twoSum = function(nums, target) {
    // brute force solution
    for (let p1 = 0; p1 < nums.length; p1++) { // O(n)
        const numberToFind = target - nums[p1];
        for (p2 = p1 + 1; p2 < nums.length;  p2++)  { // O(n) 
            if (numberToFind === nums[p2]) {
                return [p1, p2];
            }
        }
    }
    return null;
};  // O(n^2)

/*
Optimization:
- We want to increase space to decrease time complexity
- Try and come up with a solution that is O(n)
*/

/*
In the optimized function, we initialize a hash map and iterate
through the given list. For every item in the list, we state that the map value is
the value of the number at the pointer.

If the value at the pointer is over 0, then we return the map value.
If it's below, then the numtofind is the target - the value at the pointer.

Example: 
1. [1, 3, 7, 9, 2] , hash = {} , target = 11
2. [1, 3, 7, 9, 2] , hash = {10} , target = 11
3. [1, 3, 7, 9, 2] , hash = {10, 8} , target = 11
4. [1, 3, 7, 9, 2] , hash = {10, 8, 4} , target = 11
5. [1, 3, 7, 9, 2] , hash = {10, 8, 4, 2} , target = 11
6. [1, 3, 7, 9, 2] , hash = {10, 8, 4, 2} , target = 11 // 2 is already seen in hash so (3, 4) is coordinate

*/

var twoSumOptimized = function(nums, target) {
    const numsMap = {}; // initializing hashmap
 for (let p = 0; p < nums.length; p++) { // first pointer iterates
    const currentMapVal = numsMap[nums[p]]; // map val = current val at pointer
    if (currentMapVal >= 0) {
        return [currentMapVal];
    } else {
    const numberToFind = target - nums[p];
    numsMap[numberToFind] = p; // store the number to find and its index
    }
}
return null;
};


