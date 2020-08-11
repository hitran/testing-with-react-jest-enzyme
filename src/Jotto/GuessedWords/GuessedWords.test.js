import React from 'react'
import { shallow } from 'enzyme'

import {findByTestAttr, checkProps} from '../../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
    guessedWords: [
        {
            guessedWord: 'train',
            letterMatchCount: 3
        }
    ]
}

/**
 * @param {any} props - Component props
 * @returns {ShallowWrapper} of GuessedWords component
 */
const setUp = (props = {}) => {
    const setUpProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setUpProps} />)
}

describe('if there are no words guessed', () => {
    let wrapper

    beforeEach(() => {
        wrapper = setUp({guessedWords: []})
    })
    test('renders without errors' , () => {
        const componentGuessedWords = findByTestAttr(wrapper, 'component-guessed-words')
        expect(componentGuessedWords.length).toBe(1)
    })

    test('renders instruction to guess word', () => {
        const instruction = findByTestAttr(wrapper, 'guess-instruction')
        expect(instruction.text().length).not.toBe(0)
    })
})
describe('if there are words guessed', () => {
    test('empty instruction', () => {})
    test('non-empty guessed words list', () => {})
})

it('does not throw error with expected props', () => {
    checkProps(GuessedWords, defaultProps)
})