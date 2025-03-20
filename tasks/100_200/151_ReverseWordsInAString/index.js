/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => s.split(' ').filter(Boolean).reverse().join(' ');
