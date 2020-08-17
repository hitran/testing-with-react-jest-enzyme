import { correctGuess, actionTypes } from './'

describe('correctGuess', () => {
    test('returns an action with action type "CORRECT_GUESS" ', () => {
        const action = correctGuess()
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS})
    })
})