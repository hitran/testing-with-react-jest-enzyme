/**
 * 
 * @param {string} guessedWord
 * @param {string} secretWord
 * @returns {number} - the number of letter matched between guessedWord and secretWord
 */
export function getLetterMatchCount (guessedWord, secretWord) {
   const secretWordSet = new Set(secretWord.split(''))
   const guessedWordSet = new Set(guessedWord.split(''))
   
   return [...secretWordSet].filter(letter => guessedWordSet.has(letter)).length
}