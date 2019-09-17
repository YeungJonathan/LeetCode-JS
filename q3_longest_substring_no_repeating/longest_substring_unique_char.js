/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	const memo = new Array(256).fill(0);
	let maxCount = 0
	let startIndex = 0
	let endIndex = 0
	
	while (endIndex < s.length){
		currentChar = s[endIndex];
		memo[currentChar.charCodeAt()] += 1
		if (memo[currentChar.charCodeAt()] < 2){
			if (maxCount < (endIndex - startIndex + 1)){
				maxCount = endIndex - startIndex + 1;
			}
		}else{
			while (memo[s[endIndex].charCodeAt()] > 1 && startIndex <= endIndex){
				currentChar = s[startIndex]
				memo[currentChar.charCodeAt()] -= 1
				startIndex += 1;
			}
		}
		endIndex += 1
	}
   return maxCount;
	
};