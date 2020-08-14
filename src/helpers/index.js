/**
 * 
 * @param {string} guessedWord
 * @param {string} secretWord
 * @returns {number} - the number of letter matched between guessedWord and secretWord
 */
export function getLetterMatchCount (guessedWord, secretWord) {
   const secretWordSet = new Set(secretWord.toLowerCase().split(''))
   const guessedWordSet = new Set(guessedWord.toLowerCase().split(''))
   return [...secretWordSet].filter(letter => guessedWordSet.has(letter)).length
}