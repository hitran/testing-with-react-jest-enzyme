import React from 'react'
import {shallow} from 'enzyme'

import { findByTestAttr } from '../test/testUtils'
import Jotto from './Jotto'

/**
 * Set up function to get and set wrapper with initial state and props
 * @param {object} props - props for Jotto component
 * @param {any} state - initial state for Jotto component
 * @returns {ShallowWrapper} of Jotto Component
 */
const setUp = (props = {}, state = null) => {
    const wrapper = shallow(<Jotto {...props}/>)
    if (state) wrapper.setState({state})
    return wrapper 
}

test('Jotto component should renders without errors', () => {
    const wrapper = setUp()
    const jottoComponent = findByTestAttr(wrapper, 'component-jotto')
    expect(jottoComponent.length).toBe(1)
})