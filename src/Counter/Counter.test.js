import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Counter from './Counter'

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

/**
 * Find elements with specific data-test values
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
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

test('click button counter increment at display', () => {
  const counter = 7
  const wrapper = setUp(null, { counter })
  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  incrementButton.simulate('click')
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter + 1)
})

test('click button counter decrement at display', () => {
    const counter = 9
    const wrapper = setUp(null, { counter })
    const decrementButton = findByTestAttr(wrapper, 'decrement-button')
    decrementButton.simulate('click')
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(counter - 1)
})

test('no count below zero', () => {
    const counter = 0
    const wrapper = setUp(null, { counter })
    const decrementButton = findByTestAttr(wrapper, 'decrement-button')
    decrementButton.simulate('click')
    wrapper.update();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    const errorMsg = findByTestAttr(wrapper, 'errorMsg')
    expect(counterDisplay.text()).toContain(0)
    expect(errorMsg.length).toBe(1)
})