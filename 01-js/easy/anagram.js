/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length===str2.length){
    let count = {}
    for(let char of str1.toLowerCase())
      count[char] = count[char] !== undefined ? count[char]+1: 1;
    for(let char of str2.toLowerCase())
      count[char] = count[char] !== undefined ? count[char]-1: -1;
    return Object.values(count).every(count=> count === 0)
  }
  return false;
}

module.exports = isAnagram;
