import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Counter from './Counter'
import { findByTestAttr } from '../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() })
/**
 * Refactor function to create ShallowWrapper for component Counter
 * @param {object} props - component specific props for this setup
 * @param {any} state - intitial state for this setup
 * @returns {ShallowWrapper}
 */

const setUp = (props = {}, state = null) => {
  const wrapper = shallow(<Counter {...props} />)
  if (state) wrapper.setState(state)
  return wrapper
}

test('app should render correctly', () => {
  const wrapper = setUp()
  const counterComponent = findByTestAttr(wrapper, 'component-counter')
  expect(counterComponent.length).toBe(1)
})

test('render increment button', () => {
  const wrapper = setUp()
  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  expect(incrementButton.length).toBe(1)
})

test('counter display', () => {
  const wrapper = setUp()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('decrement button counter display', () => {
    const wrapper = setUp()
    const decrementButton = findByTestAttr(wrapper, 'decrement-button')
    expect(decrementButton.length).toBe(1)
})

test('counter starts 0', () => {
  const wrapper = setUp()
  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)
})

test('error msg does not display by default', () => {
  const wrapper = setUp()
  const errorMsg = findByTestAttr(wrapper, 'error-message')
  expect(errorMsg.length).toBe(0)
})

test('increment button', () => {
  const counter = 7
  const wrapper = setUp(null, { counter })
  const button = findByTestAttr(wrapper, 'increment-button')
  button.simulate('click')
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter + 1)
})

test('decrement button', () => {
  const counter = 3
  const wrapper = setUp(null, { counter })
  const button = findByTestAttr(wrapper, 'decrement-button')
  button.simulate('click')
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter - 1)
})

describe('counter at 0, decrement button clicked', () => {
  let wrapper
  beforeEach(() => {
    const counter = 0
    wrapper = setUp(null, { counter })
    const decrementButton = findByTestAttr(wrapper, 'decrement-button')
    decrementButton.simulate('click')
  })

  test ('error message should display when counter below zero', () => {
    const error = findByTestAttr(wrapper, 'error-message')
    expect(error.length).toBe(1)
  })

  test('counter display should not change', () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(0)
  })

  test('counter display change if increment button click', () => {
    const incrementButton = findByTestAttr(wrapper, 'increment-button')
    incrementButton.simulate('click')
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(1)
  })

  test('error message should be hidden when increment button click', () => {
    const incrementButton = findByTestAttr(wrapper, 'increment-button')
    incrementButton.simulate('click')
    const errorMsg = findByTestAttr(wrapper, 'error-message')
    expect(errorMsg.length).toBe(0)
  })
})