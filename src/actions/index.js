export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
}

/**
 * @returns {object} Action object with CORRECT_GUESS action type
 */
export function correctGuess() {
    return { type: actionTypes.CORRECT_GUESS }
}