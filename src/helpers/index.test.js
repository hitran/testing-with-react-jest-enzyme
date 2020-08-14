import { getLetterMatchCount } from './index'

describe('getLetterMatchCount', () => {
    const secretWord = 'party'
    test('returns correct count when no matching letter', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord)
        expect(letterMatchCount).toBe(0)
    })
    
    test('returns correct number when there are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord)
        expect(letterMatchCount).toBe(3)
    })

    test('returns correct count when there are duplicate letters in guessed word', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord)
        expect(letterMatchCount).toBe(3)
    })

    test('returns correct count without case sensitive', () => {
        const letterMatchCount = getLetterMatchCount('TrAin', secretWord)
        expect(letterMatchCount).toBe(3)
    })
})
