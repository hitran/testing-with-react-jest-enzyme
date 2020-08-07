import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats'
import { findByTestAttr, checkProps } from '../../test/testUtils'

Enzyme.configure({adapter: new EnzymeAdapter()})

const defaultProps = { success: false}
/**
 * function to return shallow wrapper of congrats component
 * @param {object} props - initial props passed to congrats component
 * @return {ShallowWrapper} of congrats component
 */
const setUp = (props = {}) => {
    const setUpProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setUpProps} />)
}

test('Congrats component should render without errors', () => {
    const wrapper = setUp()
    const congratsComponent =  findByTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.length).toBe(1)
})

test('empty congrats message when success props is false', () => {
    const wrapper = setUp({success : false})
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.text()).toBe('')
})

test ('non-empty congrats message when succes props is true', () => {
    const wrapper = setUp({success : true})
    const message = findByTestAttr(wrapper, 'congrats-message')
    expect(message.text().length).not.toBe(0)
})

test ('does not throw warning with expected props', () => {
    const expectedProps = {success : false}
    checkProps(Congrats, expectedProps)
})