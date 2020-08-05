import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats'
import { findByTestAttr } from '../../test/testUtils'

Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * function to return shallow wrapper of congrats component
 * @param {object} props - initial props passed to congrats component
 * @return {ShallowWrapper} of congrats component
 */
const setUp = (props = {}) => {
    return shallow(<Congrats {...props} />)
}

test('Congrats component should render without errors', () => {
    const wrapper = setUp()
    const congratsComponent =  findByTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.length).toBe(1)
})

test('empty congrats message when success props is false', () => {})
test ('non-empty congrats message when succes props is true', () => {})